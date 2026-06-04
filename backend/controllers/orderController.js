const Order = require('../models/Order')
exports.createOrder = async(req,res)=>{
  const data = new Order(req.body)
  await data.save()
  res.send({code:200,msg:'下单成功'})
}
