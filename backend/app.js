const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/generate',require('./routes/generate'))
app.use('/api/model',require('./routes/model'))
app.use('/api/order',require('./routes/print'))
app.use('/api/community',require('./routes/community'))
require('../database/mongo_atlas_config')
const PORT = 3001
app.listen(PORT,()=>console.log(`服务启动：${PORT}`))
module.exports = app
