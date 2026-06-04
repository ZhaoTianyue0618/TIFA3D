//Order.js
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name:String,phone:String,address:String,material:String,size:String,dense:String,express:String,modelPath:String,createTime:{type:Date,default:Date.now}
})
module.exports = mongoose.model('Order',schema)

//User.js
const mongoose = require('mongoose')
module.exports = mongoose.model('User',new mongoose.Schema({name:String,pwd:String}))

//ModelAsset.js
const mongoose = require('mongoose')
module.exports = mongoose.model('ModelAsset',new mongoose.Schema({user:String,imgPath:String,modelPath:String,create:Date}))
