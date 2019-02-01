// select * from trip_plans INNER JOIN days ON trip_plans.id=days.trip_plan_id;
let viewTripQuery =
  "SELECT * FROM trip_plans INNER JOIN days ON trip_plans.id=days.trip_plan_id WHERE trip_plans.id = $1";

let postTripQuery =
  "INSERT INTO trip_plans (title, summary, created_at, updated_at) VALUES ($1, $2, $3, $4)";

let createTripTableQuery = `CREATE TABLE IF NOT EXISTS
trip_plans(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
)`;

let createDaysTableQuery = `CREATE TABLE IF NOT EXISTS
days(
  id SERIAL PRIMARY KEY UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  trip_plan_id INTEGER REFERENCES trip_plans(id) ON DELETE CASCADE
)`;

let createDayQuery =
  "INSERT INTO days (title, description, trip_plan_id, created_at, updated_at) VALUES ($1, $2, $3, $4, $5)";

module.exports = {
  postTripQuery,
  createTripTableQuery,
  createDaysTableQuery,
  createDayQuery,
  viewTripQuery
};
