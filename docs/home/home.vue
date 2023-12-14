<template>
  <div class="container center">
    <img src="/avatar.jpg" class="avatar" />
    <h3 class="name">林达浪</h3>
    <!-- <div class="center" style="height: 50px">
      <h1 id="title" class="title"></h1>
    </div> -->
  </div>
  <canvas-star />
</template>

<script setup>
import canvasStar from "./components/canvas-star.vue";
import Typed from "typed.js";
import { onMounted, onBeforeUnmount } from "vue";

const wisdomList = [
  "相信自己，你能做到任何事情。",
  "积学如山，心知其意。",
  "只要路是对的，就不怕路远。",
  "苦读作舟，乐学为径。",
  "不要轻易放弃，成功就在拐角处。",
  "恒心是通往成功的桥梁。",
  "锲而不舍，金石可镂。",
  "没有无法越过的山峰，没有无法跨过的河流。",
  "学海无涯，苦乐自知。",
  "众里寻他千百度，蓦然回首，那人却在灯火阑珊处。"
]

let typed;
onMounted(() => {
  typed = new Typed("#title", {
    strings: [wisdomList[parseInt(Math.random() * 10)]],
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
