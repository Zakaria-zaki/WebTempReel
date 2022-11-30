const Sequelize = require("sequelize");

const connection = new Sequelize('postgres://user:password@postgres:5432/websockets', {
  useNewUrlParser: true,
});
connection.authenticate().then(() => {
  console.info("Postgres connection ready!");
});

module.exports = connection;
