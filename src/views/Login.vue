<!--  -->
<template>
  <div>
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
      <el-form-item label="账号：" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>

      <el-form-item label="密码：" prop="password">
        <el-input v-model.number="loginForm.password" @keyup.enter.native="handleSubmit"></el-input>
      </el-form-item>

      <el-button @click="handleReset">resetFields</el-button>
      <el-button :loading="loading" @click="handleSubmit">提交</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '111111',
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', message: '此项为必填项' },
          { min: 3, max: 5, type: 'string', trigger: 'blur', message: '长度在 3 到 5 个字符' },
        ],
        password: [{ required: true, trigger: 'blur', message: '此项为必填项' }],
      },
      loading: false,
    }
  },
  components: {},
  watch: {},
  computed: {},
  mounted() {},
  methods: {
    // 登录
    handleSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          console.log('valid')
          this.$store.dispatch('user/login', this.loginForm)
            .then(()=>{
              this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('validate failed')
          return false
        }
      })
    },
    handleReset() {
      this.$refs.loginForm.resetFields()
    },
  },
}
</script>
<style lang="less" scoped></style>
