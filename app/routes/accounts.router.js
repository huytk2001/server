module.exports = function (router) {
  var userController = require("../controller/user.controller");
  router.post("/account/add", userController.add_user);
  router.post("/account/login", userController.login);
};
