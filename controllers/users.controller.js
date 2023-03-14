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

//delete user for task-5
const deleteUser = async (req, res) => {
    const user = await Users.deleteOne({ _id: req.params.id })
    res.send(user)
}


//delete user for task-4 {I used client as user to avoid match task-4 & task-5 matches name of user}
const deleteClient = async (req, res) => {
    const client = await Users.deleteOne({ _id: req.params.id })
    res.send(client)
}

exports.postUser = postUser;
exports.getUser = getUser;
exports.deleteUser = deleteUser;
exports.deleteClient = deleteClient;