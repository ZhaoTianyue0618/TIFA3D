const {exec} = require(‘child_process’)
exports.cleanMesh = (req,res)=>{
  const {input,output} = req.body
  常量 cmd = `python postprocess/mesh_clean.py${输入} ${输出}`
  exec(cmd,(err)=>err?res.send({code:0}):res.send({code:1}))
}
