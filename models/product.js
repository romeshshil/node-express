var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new Schema({
    name: {type:String,require:true},
    // title: {type:String,require:true},
    // desc: {type:String,require:true},
    // price: {type:Number,require:true},
});

module.exports=mongoose.model('gener',productSchema);