const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverConfig");
async function isLoggedIn(req, res, next) {
  const token = req.cookies["authToken"];

  if (!token) {
    res.status(401).json({
      success: false,
      data: {},
      error: "Not authenticated",
      message: "Unauthorized",
    });
  }

  const decoded = jwt.verify(token, JWT_SECRET);

  if (!decoded) {
    res.status(401).json({
      success: false,
      data: {},
      error: "Not authenticated",
      message: "Invalid token provided",
    });
  }

  // Then user is authenticated allow access
  req.user = {
    email: decoded.email,
    id: decoded.id,
  };
  next();
}

module.exports = {
  isLoggedIn,
};
