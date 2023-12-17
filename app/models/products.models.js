const db = require("../common/connect");
const { product } = require("../controller/products.controller");
const Products = function (products) {
  this.id = products.id;
  this.name = products.name;
  this.description = products.description;
  this.price = products.price;
};
Products.get_all = function (result) {
  db.query("SELECT * FROM products", function (err, products) {
    if (err) {
      console.error("Error querying products:", err);
      result(null);
    } else {
      result(products);
    }
  });
};

Products.getById = function (id, result) {
  console.log(id);
  db.query("SELECT * FROM products WHERE id = ?", id, function (err, products) {
    console.log(err, products);
    if (err || products.length == 0) {
      result(null);
    } else {
      result(products[0]);
    }
  });
};
Products.create = function (data, result) {
  db.query("INSERT INTO products SET ?", data, function (err, products) {
    if (err) {
      result(err);
    } else {
      result(null, { id: products.insertId, ...data });
    }
  });
};

Products.remove = function (id, result) {
  db.query("DELETE FROM products WHERE id = ?", id, function (err, products) {
    if (err) {
      result(null);
    } else {
      result("Xoa du lieu book cos " + id + " thanh cong");
    }
  });
};
Products.update = function (d, result) {
  console.log("====================================");
  console.log(d);
  console.log("====================================");
  db.query(
    "UPDATE products SET name=?, description=?, pricre=? WHERE id = ?",
    [d.name, d.description, d.pricre, d.id],
    function (err, products) {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
      if (err) {
        result(err);
      } else {
        result(products);
      }
    }
  );
};

module.exports = Products;
