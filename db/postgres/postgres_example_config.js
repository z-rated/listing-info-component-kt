// Proper way to initialize and share the Database object

// Loading and initializing the library:
const pgp = require('pg-promise')({
  // Initialization Options
});

// Preparing the connection details:
const cn = 'postgres://username:password@host:port/database';
//OR
const cn = {
  host: 'localhost',
  port: 5432,
  database: 'my-database-name',
  user: 'user-name',
  password: 'user-password'
};

// Creating a new database instance from the connection details:
const db = pgp(cn);

// Exporting the database object for shared use:
module.exports = db;
