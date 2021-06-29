const User = require("../models/User");
const mongoose = require("mongoose");

exports.getInTouch = (req, res) => {
    let { fullName, email, phoneNo, message } = req.body;
    let user = new User({
        fullName, email, phoneNo, message,
    });
    user.save()
    .then(() => {
        console.log("Message sent successfully");
        return res.status(200).send("Message sent")
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send("ERROR");
    });
};