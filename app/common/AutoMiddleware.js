let isAuth = async function (req, res, next) {
  var JWT = require("./JWT");
  var _token = req.headers.authorization;

  if (_token) {
    try {
      var auData = await JWT.check(_token);
      req.auth = auData;
      next();
      // Thêm một phản hồi thông tin xác thực thành công (nếu cần)
    } catch (err) {
      console.error(err);
      return res.status(401).send({ data: "Ma token khong hop le" });
    }
  } else {
    return res.status(401).send({ data: "Ban chua co ma token" });
  }
};

module.exports = {
  isAuth: isAuth,
};
