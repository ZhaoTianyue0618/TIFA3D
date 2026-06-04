const express = require('express')
const router = express.Router()
const genCtrl = require('../controllers/generateController')
router.post('/sd',genCtrl.runSDImg)
router.post('/tripo3d',genCtrl.runTripo3D)
模块.导出 = 路由器
