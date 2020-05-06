const router = require('express').Router();
const { signUp } = require("../controllers/userAuth");

router.post('/signup', signUp);
// router.get('/users/:userId')
router.get("/", (req, res) => {
    res.send("You don enter express");
})

module.exports = router;