const { loadUsersData } = require('./models/postgres/user.model');
const { connection } = require("./models/postgres");

connection
  .sync({ force: true })
  .then(() => {
    console.info("Database synced");
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    connection.close();
  });

await loadUsersData();