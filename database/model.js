const { Pool, Client } = require("pg");
const cliet = new Client();

const pool = new Pool({
  host: "localhost",
  database: "kimkimdb",
  user: "yontechnology",
  password: "qlqjs797"
});

const connect = "postgres://";

pool.on("connect", () => {
  console.log("connected to the db");
});

pool.on("error", err => {
  console.error("An idle client has experienced an error", err.stack);
});

const createTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      reflections(
        id UUID PRIMARY KEY,
        success VARCHAR(128) NOT NULL,
        low_point VARCHAR(128) NOT NULL,
        take_away VARCHAR(128) NOT NULL,
        created_date TIMESTAMP,
        modified_date TIMESTAMP
      )`;

  pool
    .query(queryText)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

const dropTables = () => {
  const queryText = "DROP TABLE IF EXISTS reflections";
  pool
    .query(queryText)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

module.exports = {
  createTables,
  dropTables
};
