const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email:String,
    username:String,
    password:String,
});

     const user = mongoose.model('users',schema);
     module.exports = user;