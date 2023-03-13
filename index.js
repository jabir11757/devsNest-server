const express = require("express");
require('dotenv').config()
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 7000;

const app = express();
app.use(cors());
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.yt0e1fj.mongodb.net/userDataTable`;
console.log(uri)
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const user = require('./routers/users.router');

//set route
app.use('/user', user)

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});