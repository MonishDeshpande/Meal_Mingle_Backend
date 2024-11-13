const { registerUser } = require("../services/userService");
async function createUser(req, res) {
  console.log("userContoller Called");
  console.log(req.body);
  try {
    const response = await registerUser(req.body);
    return res.json({
      message: "Successfully registered user",
      data: response,
      success: true,
      error: {},
    });
  } catch (error) {
    return res.json({
      message: error.reason,
      data: {},
      success: false,
      error: error,
    });
  }
}

module.exports = {
  createUser,
};
