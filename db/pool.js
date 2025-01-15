const { Pool } = require('pg');

const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD } = process.env;

module.exports = new Pool({
  host: PGHOST,
  user: PGUSER,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: 5432,
});
