const express = require('express');
const { postUser, getUser, deleteUser } = require('../controllers/users.controller');
const router = express.Router();

router.post('/post-user', postUser)
router.get('/get-user', getUser)
router.delete('/delete-user/:id', deleteUser)

module.exports = router;