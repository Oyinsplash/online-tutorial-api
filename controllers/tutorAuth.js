const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.signUp = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const userType = "tutor";
  const email = req.body.email;
  const password = req.body.password;

  if ((!firstName, !lastName, !email, !password)) {
    res.status(400).send({
      status: false,
      message: "All fields are required",
    });
    return;
  }
  User.findOne({ email }).then((tutor) => {
    if (tutor) {
      return res.status(423).send({
        status: false,
        message: "This email already exists",
      });
    }
  });
  bcrypt.hash(password, 10).then((password) => {
    let tutor = new User({
      firstName,
      lastName,
      userType,
      email,
      password,
    });
    return tutor.save();
  });
};
