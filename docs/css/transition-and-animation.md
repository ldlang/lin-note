---
sidebar: auto
---

## transition 过渡

### transition 过渡属性

接收 4 个参数，分别是

- 表示动画所应用的 CSS 属性名称，如 width、opacity 等。all 表示全部属性都参与过渡。
- 表示过渡动画的持续时间。
- 过渡效果的时间曲线。
- 表示过渡动画的延迟时间.

```css
transition: width 1s ease 0;		表过渡的属性是width，过渡时间为2s，
```

### 4 个参数说明

1. transition-property 第一个参数

   规定应用过渡的 CSS 属性的名称。

2. transition-duration 第二个参数

   定义过渡效果花费的时间。默认是 0。

3. transition-timing-function 第三个参数

   规定过渡效果的时间曲线。默认是 "ease"。

   - linear 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
   - ease 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
   - ease-in 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
   - ease-out 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
   - ease-in-out 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
   - cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。

4. transition-delay 第四个参数

   规定过渡效果何时开始。默认是 0。

### 使用方式

1. 同时过渡分别过渡多个属性

   ```css
   .box {
     transition: opacity 1s ease, transform 1s ease;
   }
   ```

2. 同时过渡所有动画，使用关键字 all

   ```css
   .box {
     transition: all 1s;
   }
   ```

## animation 动画

### animation 的使用

animation: name 3s ease 2s infinite alternate both running forwards;

9 个参数分别为：

- animation-name： 必须设置，指定绑定到选择器的一个或多个关键帧的名称。
- animation-duration： 指定动画一次循环的时间。默认值为 0s。
- animation-timing-function： 指定动画使用的时间函数以决定动画如何沿指定的轨迹移动和变化。
- animation-delay： 指定动画开始之前的延迟时间。默认值为 0s。
- animation-iteration-count： 指定动画播放的次数。默认为 1。
- animation-direction： 指定动画是否应该在正常播放方向或反向播放。默认值为 normal。
- animation-fill-mode： 指定当动画不播放时元素应如何呈现。默认值为 none。
- animation-play-state： 指定动画应播放还是暂停。默认值为 running。
- animation-iteration-duration： 指定动画的每次循环持续时间。默认值为 animation-duration。

关键帧的 name 定义，必须使用@keyframes 关键字

```css
@keyframes myName {
  0% {
    background: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background: yellow;
    left: 200px;
    top: 0px;
  }
  50% {
    background: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background: green;
    left: 0px;
    top: 200px;
  }
  100% {
    background: red;
    left: 0px;
    top: 0px;
  }
}
或者 @keyframes myfirst {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}
```
