const router = require("express").Router;

const {signUp} = require("../controllers/tutorAuth");

router.post("/signup", signUp);