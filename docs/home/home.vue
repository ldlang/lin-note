<template>
  <div class="container">我是首页</div>
  <canvas-star></canvas-star>
</template>

<script setup>
import canvasStar from "./components/canvas-star.vue";
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: transparent;
  position: relative;
  z-index: 1;
}
</style>
