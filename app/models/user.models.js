const db = require("../common/connect");
const { product } = require("../controller/products.controller");
const User = function (user) {
  this.id = user.id;
  this.name = user.name;
  this.email = user.email;
  this.password = user.password;
};
User.get_all = function (result) {
  db.query("SELECT * FROM users", function (err, users) {
    if (err) {
      console.error("Error querying users:", err);
      result(null);
    } else {
      result(users);
    }
  });
};

User.getById = function (id, result) {
  console.log(id);
  db.query("SELECT * FROM users WHERE id = ?", id, function (err, users) {
    console.log(err, users);
    if (err || users.length == 0) {
      result(null);
    } else {
      result(users[0]);
    }
  });
};
User.create = function (data, result) {
  db.query("INSERT INTO users SET ?", data, function (err, users) {
    if (err) {
      result(err);
    } else {
      result(null, { id: users.insertId, ...data });
    }
  });
};

User.remove = function (id, result) {
  db.query("DELETE FROM users WHERE id = ?", id, function (err, users) {
    if (err) {
      result(null);
    } else {
      result("Xoa du lieu book cos " + id + " thanh cong");
    }
  });
};
User.check_login = function (data, result) {
  console.log(data.email); // Log the email for debugging purposes
  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [data.email, data.password],
    function (err, users) {
      console.log(err, users);
      if (err || users.length === 0) {
        result(null);
      } else {
        result(users[0]);
      }
    }
  );
};

User.update = function (d, result) {
  db.query(
    "UPDATE users SET name=?, password=?, email=? WHERE id = ?",
    [d.name, d.password, d.email, d.id],
    function (err, users) {
      if (err) {
        result(err);
      } else {
        result(d);
      }
    }
  );
};

module.exports = User;
