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
      <tool-jsoncode :title="'token'" :dataInfo="$store.getters.token"></tool-jsoncode>
      <tool-jsoncode :title="'axiosResponse'" :dataInfo="$store.getters.axiosResponse"></tool-jsoncode>
      <tool-jsoncode :title="'axiosConfig'" :dataInfo="$store.getters.axiosResponse"></tool-jsoncode>
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
  computed: {
  },
  mounted() {},
  methods: {
    // 登录
    handleSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('user/login', this.loginForm) // 通过username、password获取token，更新vuex及cookie中token值
            .then(() => {
              // this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('提交失败！！！')
          return false
        }
      })
    },
    handleReset() {
      this.$refs.loginForm.resetFields()
      const h = this.$createElement
      this.$message({
        message: h('p', null, [h('h1', { style: 'color:red' }, '你好'), h('i', { style: 'color:blue' }, 'abc')]),
        type: 'info',
        showClose: true,
        duration: 1000,
        onClose: (action) => {
          console.log('action', action)
        },
      })
    },
  },
}
</script>
<style lang="less" scoped></style>
