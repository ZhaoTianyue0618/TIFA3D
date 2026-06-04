const express = require('express')
const router = express.Router()
const orderCtrl = require('../controllers/orderController')
router.post('/add',orderCtrl.createOrder)
模块.导出 = 路由器
