// homeController.js
var products = require("../models/products.models");
exports.list = function (req, res) {
  products.get_all(function (data) {
    res.send({ result: data });
  });
};

exports.product = function (req, res) {
  products.getById(req.params.id, function (response) {
    res.send({ result: response });
  });
};

exports.add_products = function (req, res) {
  var data = req.body;
  products.create(data, function (response) {
    res.send({ result: response });
  });
};
exports.delete_products = function (req, res) {
  var id = req.params.id;
  products.remove(id, function (response) {
    res.send({ result: response });
  });
};
exports.update_products = function (req, res) {
  var data = req.body;
  products.update(data, function (response) {
    res.send({ result: response });
  });
};
