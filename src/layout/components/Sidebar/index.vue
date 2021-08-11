<!--  -->
<template>
  <div>
    我是侧边栏
    <el-menu
      :collapse-transition="false"
      :default-active="activeMenu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      mode="vertical"
      unique-opened
    >
      <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  name: 'Sidebar',
  data() {
    return {
    }
  },

  components: { SidebarItem },

  computed: {
    ...mapGetters(['permission_routes']),
    // 高亮菜单
    activeMenu() {
      const route = this.$route
      return route.path
    },
  },

  mounted() {},

  methods: {},
}
</script>
<style lang="less" scoped></style>
