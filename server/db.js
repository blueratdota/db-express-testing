const Pool = require("pg").Pool;
const pool = new Pool({
  user: "john",
  password: "123456",
  host: "localhost",
  port: 5050,
  database: "perntodo"
}).Pool;

module.exports = pool;
