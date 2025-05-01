const Pool = require("pag").Pool;

const pool = new Pool({
  user: "postgres",
  password: "malinda",
  host: "localhost",
  port: 5432,
  database: "aegle",
});

module.exports = pool;
