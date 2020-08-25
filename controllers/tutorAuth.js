const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.signUp = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const userType = "tutor";
  const email = req.body.email;
  const password = req.body.password;

  if (!firstName || !lastName || !email || !password) {
    res.status(400).send({
      status: false,
      message: "All fields are required",
    });
    return;
  }
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
        userType,
        email,
        password,
      });
      console.log("yea");
      return user.save();
    })
    .then(() => {
      res
        .status(200)
        .send({ status: true, message: "Tutor's registration was successful" });
    })
    .catch((err) => console.log(err));
};