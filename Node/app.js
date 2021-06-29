const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./routes/UserRoute");
const User = require("./models/User");

const DB = 'mongodb+srv://drishti:portfolio@cluster0.nm8rj.mongodb.net/myPortfolio?retryWrites=true&w=majority'

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
 
mongoose.connect(DB, {
    useUnifiedTopology : true,
    useNewUrlParser: true,
})
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch(() => {
    console.log("MongoDB connection failed.");
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`My server is running on port ${PORT}`);
});

app.use(userRoute);

/*
{
    {
    "fullName": "Drishti Arora",
    "email": "drishti@email.com",
    "phoneNo": 9587419000,
    "message": "Nice to know about you!"
}
}
 */