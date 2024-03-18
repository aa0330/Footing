<template>
  <div class="card_login">
    <h2>登录</h2>
    <el-form 
      ref="formRef"
      :model="form"
      label-width="300px"
      >
      <el-form-item label="账号">
        <el-input label="账号" prefix-icon="el-icon-user-solid" v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input prefix-icon="el-icon-lock" v-model="form.password" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      
      <el-button type="primary" size="medium" @click="login">登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { reactive,ref } from 'vue'
import { useRouter } from 'vue-router';
  
const formRef = ref()

const form = reactive({
  username: '',
  password: ''
})

function login(){
  console.log('formRef',formRef.value);
  if(!formRef.value){
    ElMessage.error('信息填写错误！')
  }
}

</script>

<style scoped lang="less">
.card_login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
