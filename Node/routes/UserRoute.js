const express = require("express");
const router = express();
const userController = require("../controller/UserController");

router.post("/getInTouch", userController.getInTouch);

module.exports = router;