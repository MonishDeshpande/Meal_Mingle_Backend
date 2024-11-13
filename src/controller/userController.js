const UserRepository = require("../repositories/userRepository");
const UserService = require("../services/userService");
async function createUser(req, res) {
  console.log("userContoller Called");
  console.log(req.body);
  const userService = new UserService(new UserRepository());
  try {
    const response = await userService.registerUser(req.body);
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
