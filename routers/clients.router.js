const express = require('express');
const { getClient, deleteClient } = require('../controllers/clients.controller');
const router = express.Router();

router.get('/get-client', getClient);
router.delete('/delete-client/:id', deleteClient);

module.exports = router;