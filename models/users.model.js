const mongoose = require('mongoose');


//user schema

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile: {
        type: String,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
})

//user model
const Users = mongoose.model('user', userSchema)

exports.Users = Users;

