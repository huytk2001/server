// home.router.js

module.exports = function (router) {
  const productsController = require("../controller/products.controller"); // Update the path and extension accordingly
  router.get("/products/list", productsController.list);
  router.post("/products/add", productsController.add_products);
  router.get("/products/product/:id", productsController.product);
  router.delete("/products/delete/:id", productsController.delete_products);
  router.put("/products/update", productsController.update_products);
};
