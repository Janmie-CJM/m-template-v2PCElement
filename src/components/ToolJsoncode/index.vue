<!--  -->
<template>
  <div>
    <p>{{ title }}</p>
    <pre><code id="json">{{dataInfo}}</code></pre>
  </div>
</template>

<script>
export default {
  name: 'ToolJsoncode',
  model:{
    prop: 'dataInfo',
    event: 'change'
  },
  props: {
    dataInfo: {
      type: [String,Object],
      default: null,
    },
    title: {
      type: String,
      default: 'title',
    }
  },
  data() {
    return {
    }
  },
  components: {},
  computed: {
  },
  watch: {
  },
  created() {
  },
  mounted() {},

  methods: {},
}
</script>
<style lang="less" scoped></style>
