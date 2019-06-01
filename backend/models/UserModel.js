var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
})

var UsersModel = mongoose.model('UsersModel', UsersSchema, 'MyUsers' )
module.exports=UsersModel;