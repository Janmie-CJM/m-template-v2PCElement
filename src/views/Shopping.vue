<!--  -->
<template>
  <div>
    <table border="1" width="800" hight="600">
      <tr>
        <th>商品名称</th>
        <th>商品数量</th>
        <th>商品单价</th>
      </tr>

      <template v-for="item in foods">
        <tr :key="item.name">
        <td>{{item.name}}</td>
        <td></td>
        <td>{{item.price}}</td>
      </tr>
      </template>
      
    </table>
  </div>
</template>

<script>
export default {
  name:'shopping',
  data() {
    return {
       foods: [
        {
          name: '鱼香肉丝',
          price: '25',
        },
        {
          name: '酸菜鱼',
          price: '40',
        },
        {
          name: '蚂蚁上树',
          price: '50',
        },
        {
          name: '佛跳墙',
          price: '75',
        },
        {
          name: '肉夹馍',
          price: '10',
        },
        {
          name: '羊肉泡沫',
          price: '30',
        },
        {
          name: '凉皮',
          price: '6',
        },
        {
          name: '冰峰',
          price: '2',
        },
      ]
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
}
</script>
<style lang="less" scoped></style>
