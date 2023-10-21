<template>
  <div class="container">
    <img src="/avatar.jpg" class="avatar" />
    <div style="display: flex; justify-content: center; align-items: center">
      <h1 id="title" class="title"></h1>
    </div>
  </div>
  <canvas-star />
</template>

<script setup>
import canvasStar from "./components/canvas-star.vue";
import Typed from "typed.js";
import { onMounted } from "vue";

onMounted(() => {
  new Typed("#title", {
    strings: ["学海无涯，苦乐自知。"],
    typeSpeed: 50,
  });
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: transparent;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .title {
    color: #ffffff;
    font-size: 40px;
  }
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 100%;
  box-shadow: 0px 0px 30px 8px rgba(255, 255, 255, 0.82);
  transition: all 0.2s;
  &:hover {
    transform: scale(1.3);
  }
}
::v-deep(.typed-cursor) {
  color: #ffffff;
  transform: scaleY(2);
}
</style>
