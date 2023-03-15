const { Clients } = require("../models/clients.model")

const getClient = async (req, res) => {
    try {
        const client = await Clients.find({})
        res.send(client);
    }
    catch (err) {
        console.error(err)
    }
}

const deleteClient = async (req, res) => {
    console.log(req.params.id)
    const client = await Clients.deleteOne({ _id: req.params.id });
    res.send(client)
}

exports.getClient = getClient;
exports.deleteClient = deleteClient;