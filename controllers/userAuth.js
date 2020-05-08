const User = require("../models/user");
const bcrypt = require("bcryptjs");

// REGISTER A USER
exports.signUp = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const category = req.body.category;
  const userType = req.body.userType;
  // const isAdmin = req.body.isAdmin;
  if (
    !firstName ||
    !lastName ||
    !category ||
    !userType ||
    !email ||
    !password
  ) {
    res.status(400).send({
      status: false,
      message: "All fields are required",
    });
    console.log('wetin happen')
    return;
  }
  // check if email has been registered previously
  User.findOne({ email }).then((user) => {
    if (user) {
      return res
        .status(423)
        .send({ status: false, message: "This email already exists" });
    }
  });
  bcrypt
    .hash(password, 12)
    .then((password) => {
      let user = new User({
        firstName,
        lastName,
        category,
        userType,
        email,
        password,
        isAdmin
      });
      return user.save();
    })
    .then(() =>
      res
        .status(200)
        .send({ status: true, message: "User registered successfully" })
    )
    .catch((err) => console.log(err));
};
