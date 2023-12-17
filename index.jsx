require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3000;
const AuthMiddleWare = require("./app/common/AutoMiddleware");
const hostname = process.env.HOST_NAME;
/** cau hinh bodypaper */
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Configure static files in the "public" directory
app.use(express.static("public"));
// Cấu hình CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Xử lý yêu cầu OPTIONS
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

require("./app/routes/home.router")(app);
require("./app/routes/accounts.router")(app);
require("./app/routes/products.router")(app);
app.use(AuthMiddleWare.isAuth);
require("./app/routes/user.router")(app);
// Use Morgan for logging
app.use(morgan("combined"));

// Use the homeRouter for handling routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(port, hostname, () => {
  console.log(`Ứng dụng mẫu đang lắng nghe ở cổng ${port}`);
});
