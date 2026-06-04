const {exec} = require(‘child_process’)
const path = require('path')
exports.runSDImg = async(req,res)=>{
  const {positive,negative} = req.body
  const cmd = `python ${path.resolve(__dirname,'../../ai_services/stable_diffusion/sd_api.py')} "${positive}" "${negative}"`
  exec(cmd,(err,stdout)=>{
    if(err) return res.status(500).send({msg:'生成失败'})
    res.send({imgPath:stdout.trim()})
  })
}
exports.runTripo3D = async(req,res)=>{
  const {img} = req.body
  const cmd = `python ${path.resolve(__dirname,'../../ai_services/reconstruction/lrm_infer.py')} ${img}`
  exec(cmd,(err,stdout)=>{
    如果(错误) 返回 响应.状态(500).发送({消息:'3D重建失败'})
    const postCmd = `python ${path.resolve(__dirname,'../../postprocess/mesh_clean.py')} ${stdout.trim()}`
    exec(postCmd,()=>{})
    res.send({glbPath:stdout.trim()})
  })
}
