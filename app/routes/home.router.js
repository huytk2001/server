// home.router.js

module.exports = function (router) {
  const homeController = require("../controller/home.controller"); // Update the path and extension accordingly
  const JWT = require("../common/JWT");
  router.get("/", homeController.home);
  router.get("/about", homeController.about);
  router.get("/login", async function (req, res) {
    var user = {
      name: "Admin",
      email: "admin@gmail.com",
    };
    const _token = await JWT.make(user);
    res.send({ token: _token });
  });
  router.get("/check", async function (req, res) {
    try {
      var _token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIn0sImlhdCI6MTcwMjQ1NTg1MSwiZXhwIjoxNzAyNDU5NDUxfQ.2Deur5eEPuz4xcW7Vf5LBl_w2tiSU5xUY0av18Pi8vk";

      const data = await JWT.check(_token);
      res.send({ data: data });
    } catch (err) {
      res.send("ma toket khong hop le");
    }
  });
};
