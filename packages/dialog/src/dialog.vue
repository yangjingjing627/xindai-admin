<template>
  <div v-if="visible" v-on:updateVisible="updateVisible">
    <div class="hsy-dialog-bg"></div>
    <div class="hsy-dialog">
      <h2>{{title}}</h2>
      <span class="close" @click="updateVisible"></span>
      <div class="main">
        <slot name="main">父组件内容</slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'admin-dialog',
  props: {
    visible: Boolean,
    title: String
  },
  methods: {
    updateVisible() {
      this.$emit('updateVisible', false)
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'scss/variables.scss';
.hsy-dialog-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #838383;
  opacity: 0.24;
 }
 .hsy-dialog {
  width: 520px;
  max-height: 70%;
  overflow: scroll;
  border: 1px solid $border-color;
  border-radius: 4px;
  text-align: center;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 9999;
  .main {
    overflow: auto;
    padding-bottom: 10px;
  }
  h2 {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    padding:7px 0;
    color: $font-color;
    font-weight: bolder;
    width: 100%;
    border-bottom: 1px solid $border-color;
  }
  .close {
    position: absolute;
    cursor: pointer;
    width: 10px;
    height: 10px;
    top: 9px;
    right: 19px;
    &:before, &:after {
      position: absolute;
      content: '';
      width: 1px;
      height: 10px;
      background: #999;
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
    }
  }
  .footer {
    text-align: center;
    margin: 20px auto;
    .button {
      display: inline-block;
      height: 28px;
      &:nth-of-type(1) {
        margin-right: 23px;
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
 }
</style>
