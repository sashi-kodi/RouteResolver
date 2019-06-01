var userRouter = require('./userRouter');
var express = require('express');
var router = express.Router();
router.use('/api/users', userRouter);
module.exports = router;