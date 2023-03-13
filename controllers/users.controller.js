const { Users } = require("../models/users.model")

const postUser = async (req, res) => {
    try {
        const result = await Users.create(req.body);
        // console.log(req.body)
        res.send(result)
    }
    catch (err) {
        console.error(err)
    }
}

const getUser = async (req, res) => {
    const user = await Users.find({})
    res.send(user)
}

exports.postUser = postUser;
exports.getUser = getUser;