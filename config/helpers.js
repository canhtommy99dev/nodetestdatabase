let MySqli = require("mysqli");

let conn = new MySqli({
  host: "localhost",
  post: "3306",
  user: "root",
  passwd: "",
  db: "lwrbmoishosting_test_db",
});

let db = conn.emit(false, "");

module.exports = {
  database: db,
};
