var Sequelize = require('sequelize');

var db = new Sequelize('postgres://jonathan: @localhost:5432/tripplanner', {
  logging: false
});

module.exports = db;
