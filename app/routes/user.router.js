// home.router.js

module.exports = function (router) {
  const userController = require("../controller/user.controller"); // Update the path and extension accordingly
  router.get("/user/list", userController.list);
  router.post("/user/add", userController.add_user);
  router.get("/user/product/:id", userController.user);
  router.delete("/user/delete/:id", userController.delete_user);
  router.put("/user/update", userController.update_user);
};
