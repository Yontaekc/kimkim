const { Pool, Client } = require("pg");
const cliet = new Client();
let queries = require("./queries");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  database: "kimkimdb",
  user: process.env.DB_USER,
  password: process.env.DB_PASS
});

const connect = "postgres://";

pool.on("connect", () => {
  console.log("connected to the db");
});

pool.on("error", err => {
  console.error("An idle client has experienced an error", err.stack);
});

const createTripPlans = () => {
  pool
    .query(queries.createTripTableQuery)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

const createDays = () => {
  pool
    .query(queries.createDaysTableQuery)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

const createTrip = (request, response) => {
  const time = new Date().toLocaleString();
  const { title, summary } = request.body;
  pool.query(
    queries.postTripQuery,
    [title, summary, time, time],
    (err, res) => {
      if (err) {
        throw err;
      }
      console.log(res);
    }
  );
};

const getAllTrips = (request, response) => {
  pool.query("SELECT * FROM trip_plans", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getAllDaysById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM days WHERE trip_plan_id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getDayById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM days WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getTripById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM trip_plans WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const deleteTrip = (request, response) => {
  const id = parseInt(request.params.id);
  pool
    .query("DELETE FROM days WHERE trip_plan_id = $1", [id])
    .then((res, err) => {
      if (err) {
        console.log(err);
      }
      response.status(200).json(res.rows);
      return pool
        .query(`DELETE FROM trip_plans WHERE id = $1`, [id])
        .then((res, err) => {
          if (err) {
            console.log(err);
          }
          response.status(200).json(res.rows);
        });
    });
};

const deleteDayById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM days WHERE id = $1", [id], (res, err) => {
    if (err) {
      console.log(err);
    }
  });
};

const createDay = (request, response) => {
  const time = new Date().toLocaleString();
  const id = parseInt(request.params.id);
  const { title, description } = request.body;
  pool.query(
    queries.createDayQuery,
    [title, description, id, time, time],
    (err, res) => {
      if (err) {
        throw err;
      }
    }
  );
};

const editTrip = (request, response) => {
  const id = parseInt(request.params.id);
  const time = new Date().toLocaleString();
  const { title, summary } = request.body;

  pool.query(
    "UPDATE trip_plans SET title = $1, summary = $2, updated_at = $3 WHERE id = $4",
    [title, summary, time, id],
    (error, results) => {
      if (error) {
        throw error;
      }
    }
  );
};

const editDayById = (request, response) => {
  const id = parseInt(request.params.id);
  const time = new Date().toLocaleString();
  const { title, description } = request.body;

  pool.query(
    "UPDATE days SET title = $1, description = $2, updated_at = $3 WHERE id = $4",
    [title, description, time, id],
    (error, results) => {
      if (error) {
        throw error;
      }
    }
  );
};

const viewTripById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(queries.viewTripQuery, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  createTripPlans,
  createDays,
  createTrip,
  createDay,
  editTrip,
  editDayById,
  getAllTrips,
  deleteTrip,
  getTripById,
  getAllDaysById,
  deleteDayById,
  getDayById,
  viewTripById
};
