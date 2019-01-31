const { Pool, Client } = require("pg");
const cliet = new Client();
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
