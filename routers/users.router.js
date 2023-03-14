const express = require('express');
const { postUser, getUser, deleteUser, deleteClient } = require('../controllers/users.controller');
const router = express.Router();

router.post('/post-user', postUser)
router.get('/get-user', getUser)
router.delete('/delete-user/:id', deleteUser)
router.delete('/delete-client/:id', deleteClient)

module.exports = router;