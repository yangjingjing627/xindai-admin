<template>
  <admin-dialog v-if="createUser.visible" :visible="createUser.visible" :title="createUser.dialogTitle" v-on:updateVisible="updateVisible">
    <div slot="main">
      <h3>这是一个弹窗</h3>
    <!-- <div slot="footer"><a class="button" @click="updateVisible">关闭</a><a class="button">编辑</a></div> -->
      <div slot="footer" class="dialog-footer">
        <el-button  @click="updateVisible">取 消</el-button>
        <el-button type="primary" @click="">确 定</el-button>
      </div>
    </div>
  </admin-dialog>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  props: {
    createUser: {
      type: Object
    }
  },
  // created() {
  // },
  // computed: {
  //
  // },
  // watch: {
  //
  // },
  methods: {
    updateVisible() {
      this.$emit('updateVisible', false)
    }
  }
}
</script>
