var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var postSchema = new Schema({
    title: String,
    body: String,
    create_at:{type:Date,default: Date.now},
    author: String,
    publish:{type:Boolean,default:false},
    meta:{
        likes:Number
    }
});

module.exports=mongoose.model('post',postSchema);