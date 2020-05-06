const router = require("express").Router();
const { signUp } = require("../controllers/userAuth");
const { logIn } = require("../controllers/userAuth");

router.post("/login", logIn);
router.post("/signup", signUp);
router.get("/", (req, res) => {
  res.send("You don enter express");
});

module.exports = router;
