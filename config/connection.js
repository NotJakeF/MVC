// Dependencies
const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize
// Include your MySQL user/password information
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('userDB', 'root', 'password', {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql'
    });
var z = true ? "a":"b"
// Exports the connection for other files to use
module.exports = sequelize;
