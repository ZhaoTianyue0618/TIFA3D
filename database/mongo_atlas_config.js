const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1:27017/tifa3d_db'
mongoose.connect(uri).then(()=>console.log('MongoDB连接成功'))
