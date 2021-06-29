const mongoose = require("mongoose");

const User = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },

    email: {
        type:String,
        required: true, 
    },

    phoneNo: {
        type: Number,
    },

    message: {
        type: String,
        reuired: true,
    }
});

module.exports = mongoose.model("user", User, "user");