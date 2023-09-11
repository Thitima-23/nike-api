const mongoose = require('mongoose');

const option = {
    toJSON:{virtuals:true},
    timestamps:true
}

const Schema = mongoose.Schema;
const schema = mongoose.Schema({
    menuname:{type:String,require:true,trim:true},
    price:{type:Number},
    menuphoto:{type:String,default:'no_pic.png'},
    shop:{type:Schema.Types.ObjectId,ref:'shop'}
},option)

const menu = mongoose.model('menus',schema);
module.exports = menu;