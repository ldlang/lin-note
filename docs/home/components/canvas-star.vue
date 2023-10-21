<template>
  <canvas
    id="ctx"
    :width="windowSize.width"
    :height="windowSize.height"
    class="star"
  ></canvas>
</template>

<script setup>
import { onMounted, reactive, nextTick, onBeforeUnmount } from "vue";
// 画布尺寸设置
const windowSize = reactive({
  height: 0,
  width: 0,
});

onMounted(() => {
  // 监听可视窗口尺寸变化
  window.addEventListener("resize", changeSize);
  windowSize.height = window.innerHeight;
  windowSize.width = window.innerWidth;
  getCtx();
});

// 移除监听窗口尺寸变化
onBeforeUnmount(() => {
  window.removeEventListener("resize", changeSize);
});

// 修改画布尺寸
function changeSize() {
  windowSize.height = window.innerHeight;
  windowSize.width = window.innerWidth;
  nextTick(() => debounce(() => getCtx()));
}

// 绘制画布
function getCtx() {
  let canvas = document.getElementById("ctx");
  let ctx = canvas.getContext("2d");
  ctx.beginPath(); //开始绘制
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, windowSize.width, windowSize.height);
  ctx.closePath(); //结束绘制
  canvasStar(ctx);
}

// 生成随机star
let circles = []; // 存储所有圆点的数组
function canvasStar(ctx) {
  circles = [];
  // 随机生成50到300个
  let randomNum = Math.floor(Math.random() * 300) + 50;
  for (let i = 0; i < randomNum; i++) {
    ctx.beginPath();
    ctx.fillStyle = "#fff";
    let x = parseInt(Math.random() * windowSize.width);
    let y = parseInt(Math.random() * windowSize.height);
    let r = parseInt(Math.random() * 3);
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath(); //结束绘制

    // 将圆点信息存储在数组中
    circles.push({ x, y, r });
  }
  animate(ctx); // 开始动画
}

// 给star增加闪烁效果
function animate(ctx) {
  ctx.clearRect(0, 0, windowSize.width, windowSize.height); // 清除画布
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, windowSize.width, windowSize.height);
  // 更新并重新绘制每个圆点
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // 改变半径以产生闪烁效果
    circle.r = Math.abs(Math.sin(Date.now() / 1000 + i)) * 3;
  }
  requestAnimationFrame(() => animate(ctx)); // 请求下一帧动画
}

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
let timeout = null;
function debounce(func, wait = 500, immediate = false) {
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === "function" && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === "function" && func();
    }, wait);
  }
}
</script>

<style lang="scss" scoped>
.star {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
