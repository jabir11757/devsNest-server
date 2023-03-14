const { Clients } = require("../models/clients.model");
const { Users } = require("../models/users.model")

const postUser = async (req, res) => {
    try {
        const result = await Users.create(req.body);
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

const getClient = async (req, res) => {
    const client = await Clients.find({})
    res.send(client)
}

// delete user for task-5
const deleteUser = async (req, res) => {
    const user = await Users.deleteOne({ _id: req.params.id })
    res.send(user)
}


exports.postUser = postUser;
exports.getUser = getUser;
exports.deleteUser = deleteUser;
exports.getClient = getClient;