var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo_node",
});
connection.connect(function (err) {
  if (err) console.log("Kết nối csdl không thành công");
});
module.exports = connection;
