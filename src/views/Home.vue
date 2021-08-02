<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <tree :parentList="list"></tree>
    <Shopping></Shopping>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Tree from './About.vue'
import Shopping from './Shopping'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Tree,
    Shopping
  },
  data() {
    return {
      list: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1',
                  children: [
                    {
                      label: '四级 1-1-1-1',
                    },
                    {
                      label: '四级 1-1-1-2',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1',
                },
              ],
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1',
                },
              ],
            },
          ],
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1',
                },
              ],
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1',
                },
              ],
            },
          ],
        },
      ]
     
    }
  },
}
</script>
