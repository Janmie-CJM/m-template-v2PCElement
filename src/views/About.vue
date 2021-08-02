<!--  -->
<template>
  <div>
    <div v-for="(item,index) in parentList" :key="index">
      <p @click="showMore(item,index)">{{item.label}}</p>
      <tree v-if="item.children && item.isShow" :parentList="item.children"></tree>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tree",
  props: {
    parentList: {
      type: Array,
      default: ()=>{
        return []
      }
    }
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {
    showMore(item,index){
      if(item.isShow){
        this.$set(item,"isShow",false)
      } else {
        this.$set(item,"isShow",true)
      }
    }
  }
}

</script>
<style lang='less' scoped>
</style>
