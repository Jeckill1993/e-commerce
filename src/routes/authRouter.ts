import express from 'express';

const { createUser } = require('../controller/user');

const router = express.Router();


router.post('/register', createUser);

module.exports = router;
