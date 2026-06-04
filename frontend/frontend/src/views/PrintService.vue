<template>
  <div style="padding:20px;max-width:800px;margin:0 auto">
    <h3>打印交付下单</h3>
    <div>
      <p>打印材质选择</p>
      <label v-for="item in ['PLA','树脂','ABS','TPU','PETG','PEEK']" :key="item">
        <input v-model="form.material" type="radio" :value="item"/>{{item}}
      </label>
    </div>
    <div style="margin:10px 0">
      <p>尺寸规格：<input v-model="form.size" type="radio" value="小"/>小
      <input v-model="form.size" type="radio" value="中"/>中
      <input v-model="form.size" type="radio" value="大"/>大
      </p>
      <p>填充密度：<input v-model="form.dense" type="radio" value="小"/>小
      <input v-model="form.dense" type="radio" value="中"/>中
      <input v-model="form.dense" type="radio" value="大"/>大
      </p>
    </div>
    <div>
      <input v-model="form.name" placeholder="姓名"/>
      <input v-model="form.phone" placeholder="手机号"/>
      <input v-model="form.address" placeholder="详细收货地址"/>
      <select v-model="form.express">
        <option value="顺丰">顺丰</option>
        <option value="邮政EMS">邮政EMS</option>
        <option value="圆通">圆通</option>
      </select>
    </div>
    <button @click="submitOrder" style="margin-top:10px">提交打印订单</button>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import axios from 'axios'
const route = useRoute()
const form = ref({
  :'PLA',:'中',密度:'中',名称:'',手机:'',地址:'',快递:'顺丰',模型路径：路线。查询.模型
})
const submitOrder = async()=>{
  await axios.post('/api/order/add',form.value)
  alert('订单提交成功')
}
</script>
