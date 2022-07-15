<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Message } from 'element-ui'
import useStore from '@/stores/user'
import router from '@/router'
import { useCookie } from '@/common/util'

const store = useStore()
const cookie = useCookie()

const loginForm = reactive({
  username: '',
  password: '',
})

const loading = ref(false)

function signIn() {
  loading.value = true
  store
    .login(loginForm)
    .then(() => {
      loading.value = false
      Message.success('登录成功！')
      cookie.set('vault_username', store.username, 365)
      router.push({
        path: '/dashboard',
      })
    })
    .catch(() => {
      loading.value = false
    })
}
</script>

<template>
  <div style="width: 500px; margin: 100px auto auto auto; padding-right: 120px">
    <el-form :model="loginForm" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="loginForm.password"
          @keyup.enter.native="signIn"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="signIn" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
