const express = require('express');
const { postUser, getUser } = require('../controllers/users.controller');
const router = express.Router();

router.post('/post-user', postUser)
router.get('/get-user', getUser)

module.exports = router;