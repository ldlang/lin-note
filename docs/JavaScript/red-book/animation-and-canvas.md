---
sidebar: auto
---

# 动画与 Canvas 图形

## 使用 requestAnimationFrame

### 定时动画

使用 setTimeout 或者 setInterval 实现的动画，会有时间精度的问题，虽然时间到了就会把你的动画添加到执行队列里面，但是并不能保证这一时刻动画就运行。

### requestAnimationFrame

requestAnimationFrame 接收一个参数，此参数是一个要在重绘屏幕前调用的函数。这个函数就是修改 DOM 样式以反映下一次重绘有什么变化的地方。如果要循环的实现这个动画，可以把多个 requestAnimationFrame()调用串联起来。

```js
循环的调用这个函数;
function animation() {
  console.log("动画");
  requestAnimationFrame(animation);
}
animation();

或者;
function animation() {
  console.log("动画");
  requestAnimationFrame(animation);
}
requestAnimationFrame(animation);
```

实现一个盒子边长再变短往复的动画

```js
let width = 0;
let isLong = true;
function updateProgress() {
  var div = document.getElementById("mydiv");
  const divWidth = div.style.width.slice(0, -2);
  if (divWidth > 1700 || divWidth < 100) {
    if (divWidth > 1700) isLong = false;
    // 盒子的宽度不可能为负数
    if (divWidth <= 0) isLong = true;
  }
  if (isLong) width += 100;
  else width -= 100;
  div.style.width = width + "px";
  requestAnimationFrame(updateProgress);
}
updateProgress();
```

### cancelAnimationFrame

取消通过 `requestAnimationFrame`创建的绘制任务，`requestAnimationFrame`会有一个返回值，用于标识他的绘制任务，可以将这个返回值传给`cancelAnimationFrame`来取消绘制任务。

```js
let aniId;
function animation() {
  console.log("动画");
  aniId = requestAnimationFrame(animation);
}
animation();

// 3秒后关闭绘制任务
setTimeout(() => {
  cancelAnimationFrame(aniId);
}, 3000);
```

### 通过 requestAnimationFrame 实现节流

```js
let isRun = true;
window.addEventListener("scroll", () => {
  if (isRun) {
    isRun = false;
    window.requestAnimationFrame(logNowTime);
    setTimeout(() => (isRun = true), 3000);
  }
});
```

## canvas

## WebGL （是 canvas 的 3D 上下文）
