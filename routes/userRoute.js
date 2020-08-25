const router = require("express").Router();
const { signUp } = require("../controllers/userAuth");
const { logIn } = require("../controllers/userAuth");


router.post("/signup", signUp);
router.post("/login", logIn);


module.exports = router;
