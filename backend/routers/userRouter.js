var express = require('express');
var router = express.Router();
var UserModel = require('../models/UserModel');

router.get('/', function(req, res, next){
    UserModel.find({})
    .then(users=>{
        res.status(200).json({users: users})
    },
         err=>{
        res.status(400).json({error: 'Error occured while fetching users from DB'})
    })
});

module.exports = router;
