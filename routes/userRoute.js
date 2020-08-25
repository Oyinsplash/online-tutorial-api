
const router = require('express').Router();
const { signUp , logIn } = require("../controllers/userAuth");

router.post('/signup', signUp);
router.post('/login', logIn);

// router.get('/users/:userId')
router.get("/", (req, res) => {
    res.send("You don enter express");
})

router.post("/signup", signUp);
router.post("/login", logIn);


module.exports = router;
