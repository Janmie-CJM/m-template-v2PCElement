<!--  -->
<template>
  <div>
    <!-- 1-侧边栏 -->
    <sidebar></sidebar>
    <!-- 2-页面展示 -->
    <div>
      <!-- 2-1 面包屑 -->
      <div>我是面包屑</div>
      <!-- 2-2 当前路由页面展示router-view -->
      <div>
        <tool-jsoncode :dataInfo="key" :title="'$route.path'"></tool-jsoncode>
        <tool-jsoncode v-model="key" :title="'$route.path'"></tool-jsoncode>
        <hr>
        <transition>
          <keep-alive>
            <router-view :key="key"></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'Layout',
  data () {
    return {
    };
  },
  components: {Sidebar},
  computed: {
    // 当前路由key
    key() {
      return this.$route.path
    }
  },
  mounted(){},

  methods: {}
}

</script>
<style lang='less' scoped>
</style>