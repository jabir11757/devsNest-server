const express = require('express');
const { postUser, getUser, deleteUser, getClient } = require('../controllers/users.controller');
const router = express.Router();

router.post('/post-user', postUser)
router.get('/get-user', getUser)
router.get('/get-client', getClient)
router.delete('/delete-user/:id', deleteUser)

module.exports = router;