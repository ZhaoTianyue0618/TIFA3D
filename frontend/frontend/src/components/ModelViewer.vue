<template>
  <divref="container" style="width:100%;height:450px;border:1px solid#eee"></div>
</template>
<script setup>
导入 ref,onMounted,watch} 来自 
import * as THREE from 'three'
导入 GLTFLoader} 来自 
const container = ref(null)
let scene,camera,renderer,mesh
const 加载模型 = (url)=>{
  const loader = new GLTFLoader()
加载器.加载(网址,(glTF)=>{
    如果网格场景.移除(网格)
网格 = gltf.场景
添加网格
  })
}
常量 模型地址 = 引用('')
监听(模型地址,v=>v&&加载模型(v))
onMounted(()=>{
场景 =新THREE。场景()
相机 =新THREE.(75,容器.值.客户端宽度/容器.值.客户端高度
渲染器 =新THREE.{抗锯齿:真}
  renderer.setSize(container.value.clientWidth,container.value.clientHeight)
  container.value.appendChild(renderer.domElement)
相机。位置.z = 5
  常量 光 = newTHREE.环境光(0xffffff,1)
场景。添加(光)
  函数 渲染(){requestAnimationFrame(渲染);渲染器.渲染(场景,相机)}
  渲染()
})
定义暴露({模型地址})
</script>
