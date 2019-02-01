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

const createTripPlans = () => {
  const trip_plans_query = `CREATE TABLE IF NOT EXISTS
      trip_plans(
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        summary TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL,
        updated_at TIMESTAMP NOT NULL
      )`;

  pool
    .query(trip_plans_query)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

const createDays = () => {
  const days_query = `CREATE TABLE IF NOT EXISTS
      days(
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL,
        updated_at TIMESTAMP NOT NULL,
        trip_plan_id INTEGER REFERENCES trip_plans (id)
      )`;

  pool
    .query(days_query)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = {
  createTripPlans,
  createDays
};
