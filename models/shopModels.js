const mongoose = require('mongoose');
const menu = require('./menuModels');


const option = {
    toJSON:{virtuals:true},
    timestamps:true
}

const schema = new mongoose.Schema({
    name:{type:String,require:true,trim:true},
    photo:{type:String,default:'no_pic.png'},
},option);


schema.virtual('menuItem',{
    ref:'menus',
    localField:'_id',
    foreignField:'shop'
})

const shop = mongoose.model('shops',schema);
module.exports =shop;