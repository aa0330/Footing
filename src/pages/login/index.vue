<template>
  <div class="card_login">
    <el-form ref="formRef" style="max-width: 600px" :model="formData" label-width="auto" status-icon :rules="rules">
      <el-form-item prop="username" label="用户名">
        <el-input size="large" :prefix-icon="User" v-model.number="formData.username" type="text" autocomplete="on">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input size="large" v-model.number="formData.password" type="text" autocomplete="on">
          <template #prepend>
            密码 &nbsp;
            <el-icon>
              <Lock />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="btn_box">
        <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
        <el-button type="primary" @click="resetForm(formRef)">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>

import { onMounted, reactive, ref, } from 'vue'
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { User, Lock } from '@element-plus/icons-vue'

onMounted(() => {
  ElMessage.info('小破站不注重ui样式，只追求多元化的展示')
})

const formRef = ref()
const router = useRouter()

const formData = reactive({
  username: '',
  password: ''
})

// 自定义校验规则
const verifyName = (rule, value, callback) => {
  const reg = new RegExp(/^.{3,10}$/)
  if (value === '') {
    callback(new Error('随便输入点什么都可以'))
  }
  else if (!reg.test(value)) {
    callback(new Error('用户名长度长度3-10'))
  }
  callback()
}

const verifyPassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('只校验是否为空，请随便输入'))
    return
  }
  callback()
}

const rules = reactive({
  username: [{
    validator: verifyName, trigger: 'blur'
  }],
  password: [{
    validator: verifyPassword, trigger: 'blur'
  }]
})


async function submitForm(formEl) {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      const { username, password } = formData
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)
      localStorage.setItem('token', '1111')
      router.replace('/')
    } else {
      ElMessage.error('信息输入错误！')
    }
  })
}

</script>

<style scoped lang="less">
.card_login {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: rgb(162, 187, 188, 0.3);

  .el-form {
    width: 23%;

    label {
      font-weight: 700;
    }

    button {
      width: 48%;
    }
  }

  .btn_box {
    display: flex;
    align-items: center;
    margin: 0;

  }

}
</style>
