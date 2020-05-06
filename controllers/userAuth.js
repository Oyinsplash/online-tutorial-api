const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// REGISTER A USER
exports.signUp = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const category = req.body.category;
  const userType = req.body.userType;
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
    return;
  }
  // check if email has been registered previously
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(423).send({
        status: false,
        message: "This email already exists",
      });
    }
  });

  // hash password
  bcrypt
    .hash(password, 12)
    .then((password) => {
      let user = new User({
        firstName,
        lastName,
        email,
        password,
        category,
        userType,
      });
      return user.save();
    })
    .then(() =>
      res
        .status(200)
        .send({ status: true, message: "User registered successfully" })
    )
    .catch((err) => console.log(err, "user wasn't registered"));
  console.log("user has been signed up");
};

// LOGIN A USER
exports.logIn = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res
          .status(404)
          .send("User not found, please provide valid credentials");
      }
      bcrypt.compare(password, user.password).then((valid) => {
        if (!valid) {
          return res
            .status(403)
            .send(
              "Incorrect username or password, please review details and try again"
            );
        }
        const token = jwt.sign(
          {
            email: user.email,
            _id: user._id,
          },
          process.env.SECRET_KEY,
          { expiresIn: "1hr" }
        );
        res.status(200).send({
          _id: user._id,
          token,
        });
      });
    })
    .catch((err) => console.log(err, "user wasn't logged in"));
  console.log("user has been logged in");
};
