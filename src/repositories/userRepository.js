const User = require("../schema/userSchema");

async function findUser(parameters) {
  try {
    const response = await User.findOne({ ...parameters });
    return response;
  } catch (error) {
    console.log(error);
  }
}
async function createUser(parameters) {
  try {
    const response = await User.create(parameters);
    return response;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  findUser,
  createUser,
};
