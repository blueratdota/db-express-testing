const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "john",
//   password: "123456",
//   host: "localhost",
//   port: 5050,
//   database: "perntodo"
// }).Pool;

const pool = new Pool({
  user: "john", // pc to pc basis
  password: "123456", // @home 123456 pud ang pass
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
