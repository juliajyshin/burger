var mysql = require("mysql");

if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
        // root: 3000,
        host: "localhost",
        user: "root",
        password: "",
        database: "burger_db",
    });
};



// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "juliashin",
//     database: "burger_db"
//   });
// };
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "juliashin",
//   database: "burger_db"
// });


connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
