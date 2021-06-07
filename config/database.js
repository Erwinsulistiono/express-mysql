const { createPool } = require("mysql");

const pool = createPool({
  host: 'remotemysql.com',
  user: '8GgaV0JqWf',
  password: 'UAPU2Si2Nu',
  database: '8GgaV0JqWf',
  connectionLimit: 1000
});

module.exports = pool;
