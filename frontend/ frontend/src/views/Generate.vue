<template>
  <div style="padding:20px;max-width:1200px;margin:0 auto">
    <h3>文生3D文创生成工作台</h3>
    <PromptInput引用="promptRef"/>
    创建2D图像" 样式="边距:10像素 0;内边距:6像素 16像素"生成2D预览图</按钮
<div v-if="imgUrl"><img :src="imgUrl" style="width:300px"/></div>
    按钮>
    ModelViewer ref="viewerRef"/>
    <button v-if="modelFile" @click="goPrint">前往打印下单</button>
  </
</template>
<script setup>
导入 PromptInput 来自 '@/components/PromptInput.vue'
导入 ModelViewer 来自 '@/components/ModelViewer.vue'
import {ref} from 'vue'
import axios from 'axios'
const promptRef = ref(null)
const viewerRef = ref(null)
const imgUrl = ref('')
const modelFile = ref('')

const create2DImg = async()=>{
  const {positivePrompt,negativePrompt} = promptRef.value
  const res = await axios.post('/api/generate/sd',{positive:positivePrompt,negative:negativePrompt})
  imgUrl.value = res.data.imgPath
}
const build3D = async()=>{
  const res = await axios.post('/api/generate/tripo3d',{img:imgUrl.value})
  modelFile.value = res.data.glbPath
  viewerRef.value.modelUrl = modelFile.value
}
const goPrint = ()=>{
  router.push({path:'/print',query:{model:modelFile.value}})
}
import {useRouter} from 'vue-router'
const router = useRouter()
</script>
