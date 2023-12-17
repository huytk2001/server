// homeController.js
var User = require("../models/user.models");
const JWT = require("../common/JWT");
exports.list = function (req, res) {
  User.get_all(function (data) {
    res.send({ result: data });
  });
};

exports.user = function (req, res) {
  User.getById(req.params.id, function (response) {
    res.send({ result: response });
  });
};

exports.add_user = function (req, res) {
  var data = req.body;
  User.create(data, function (response) {
    res.send({ result: response });
  });
};
exports.delete_user = function (req, res) {
  var id = req.params.id;
  User.remove(id, function (response) {
    res.send({ result: response });
  });
};
exports.update_user = function (req, res) {
  var data = req.body;
  User.update(data, function (response) {
    res.send({ result: response });
  });
};
exports.login = function (req, res) {
  var data = req.body;

  User.check_login(data, async function (response) {
    if (response) {
      try {
        const _token = await JWT.make(response);
        res.send({ result: _token });
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal Server Error" });
      }
    } else {
      res.status(401).send({ result: response });
    }
  });
};
