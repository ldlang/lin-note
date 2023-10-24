<template>
  <div class="container center">
    <img src="/avatar.jpg" class="avatar" />
    <h3 class="name">林达浪</h3>
    <div class="center" style="height: 50px">
      <h1 id="title" class="title"></h1>
    </div>
  </div>
  <canvas-star />
</template>

<script setup>
import canvasStar from "./components/canvas-star.vue";
import Typed from "typed.js";
import { onMounted, onBeforeUnmount } from "vue";

let typed;
onMounted(() => {
  typed = new Typed("#title", {
    strings: ["学海无涯，苦乐自知。"],
    typeSpeed: 50,
  });
});
onBeforeUnmount(() => {
  typed.destroy();
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: transparent;
  position: relative;
  z-index: 1;
  flex-direction: column;
  & .title {
    color: #ffffff;
    font-size: 40px;
  }
  & .name {
    color: #ffffff;
    font-size: 26px;
    margin-bottom: 30px;
  }
}
.avatar {
  position: relative;
  width: 80px;
  height: 80px;
  cursor: pointer;
  border-radius: 100%;
  box-shadow: 0px 0px 30px 8px rgba(255, 255, 255, 0.82);
  transition: all 0.2s;
  &:hover {
    transform: scale(1.3);
  }
}
::v-deep(.typed-cursor) {
  color: #ffffff;
  transform: scaleY(2.2);
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
