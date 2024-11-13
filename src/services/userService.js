class UserService {
  constructor(_userRepository) {
    this.userRepository = _userRepository;
  }
  async registerUser(userDetails) {
    // logic to register user
    // 1 - check if user already exists
    const user = await this.userRepository.findUser({
      email: userDetails.email, 
      mobileNumber: userDetails.mobileNumber,
    });
    if (user) {
      throw { reason: "User already exists", statusCode: 400 };
    }
    // 2 - if not, register user
    const newUser = await this.userRepository.createUser({
      email: userDetails.email,
      password: userDetails.password,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      mobileNumber: userDetails.mobileNumber,
    });

    if (!newUser) {
      throw { reason: "Unable to register user", statusCode: 500 };
    }
    // 3 - return the details of the user
    return newUser;
  }
}

module.exports = UserService;
