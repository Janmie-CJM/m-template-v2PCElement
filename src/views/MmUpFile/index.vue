<!--  -->
<template>
  <div>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :limit="limitNum"
      :file-list="fileList"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :on-exceed="handleExceed"
    >
      <el-button size="mini" type="primary">
        上传扫描文件
      </el-button>
      <div slot="tip" class="el-upload__tip">只能上传22222</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'MmUpFile',
  data() {
    return {
      limitNum: 1,
      fileList: [
        // {
        //   name: 'food.jpeg',
        //   url:
        //     'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        // },
        // {
        //   name: 'food2.jpeg',
        //   url:
        //     'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        // },
      ],
    }
  },
  watch: {},
  methods: {
    handleRemove(file, fileList) {
        console.log('handleRemove',file, fileList);
      },
    handlePreview(file) {
        console.log('handlePreview',file);
      },
    handleExceed(files, fileList) {
      this.$message.warning(`
        当前限制选择 ${this.limitNum} 个文件，本次选择了 ${files.length} 个文件，
        共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
  },
}
</script>
<style lang="less" scoped></style>
