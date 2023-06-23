const express = require('express');
const router = express.Router()

const userRouter = require('./user.js')

router.use('/api', userRouter)

module.exports = router