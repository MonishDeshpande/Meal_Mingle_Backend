const User = require("../schema/userSchema");

class userRepository {
  async findUser(parameters) {
    try {
      const response = await User.findOne({ ...parameters });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async createUser(parameters) {
    try {
      const response = await User.create(parameters);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = userRepository;
