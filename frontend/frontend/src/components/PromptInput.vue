<template>
  <div>
    <!--正面提示词-->
    <div class="input-group">
      <div class="label-row">
        提示词</标签>
        <按钮类="复制按钮"@点击="复制提示词" 标题="复制提示词">
          <svg宽度="16" 高度="16" 视窗="0 0 24 24" 填充=“无” 描边=“当前颜色”></svg>
        </button>
      </div>
      <div class="textarea-wrap">
        <textarea
          v-model="positivePrompt"
          :maxlength="500"
          占位符="输入文创描述"
          rows="4"
        /文本区域>
      </div>

    </div>

    <!--负面提示词-->
    <div class="input-group" style="margin-top:12px">
      <div class="label-row">
        <label>负面提示</label>
        <button class="copy-btn" @click="copyNegPropt" title="复制负面提示">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"></svg>
        </button>
      </div>
      <div class="textarea-wrap">
        <textarea
          v-model="negativePrompt"
          :maxlength="500"
          占位符="排除内容：畸形、复杂花纹、破损"
          rows="4"
        ></文本区域>
      </div>
      <span class="car-count">{{negativePrompt.length}}/500</span>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
const positivePrompt = ref('')
const negativePrompt = ref('')
const copyPropt = ()=>{
  navigator.clipboard.writeText(positivePrompt.value)
}
const copyNegPropt = =>{
导航器。剪贴板.写入文本(负向提示。值)
}
defineExpose({positivePrompt,negativePrompt})
</script>
<style scoped>
.input-group{宽度:100%}
.textarea-wrap textarea{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px}
.label-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}
.copy-btn{border:none;background:#eee;padding:3px 6px;border-radius:3px;cursor:pointer}
</style>
