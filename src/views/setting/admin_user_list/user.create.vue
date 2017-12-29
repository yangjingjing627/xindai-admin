<template>
  <hsy-dialog v-if="createUser.visible" :visible="createUser.visible" :title="createUser.dialogTitle" v-on:updateVisible="updateVisible">
    <div slot="main">
      <h3>这是一个弹窗</h3>
    <div slot="footer"><a class="button" @click="updateVisible">关闭</a><a class="button">编辑</a></div>
    </div>
  </hsy-dialog>
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
