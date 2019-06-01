const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://sashikodi:omsai28@ds151927.mlab.com:51927/whitebox');

var db =mongoose.connection;
db.once('open', function(){
    console.log('connection with mongo db establised');
})
app.use('/', require('./routers'));

app.listen(3000, function(){
     console.log('server is listening at port 3000');
})
