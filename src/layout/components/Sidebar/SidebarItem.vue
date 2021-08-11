<!--  -->
<template>
  <div>
    <!-- 情况1：无子路由 -->
    <router-link v-if="!item.children" :key="item.path" :to="{ name: item.name }">
      <el-menu-item :index="item.path">
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </router-link>

    <!-- 情况2：有子路由 -->
    <el-submenu v-else :index="item.path">
      <template slot="title">
        {{ item.name }}
      </template>
      <sidebar-item v-for="child in item.children" :key="child.path" :item="child"></sidebar-item>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      // required: true
    },
  },
  data() {
    return {}
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
}
</script>
<style lang="less" scoped></style>
