---
sidebar: auto
---

# js 技巧与积累

## 日期对象注意点

1. 日期对象虽然是一个对象，但是日期对象身上并没可枚举或者不可枚举的属性

   ```js
   const date = new Date();
   console.dir(date); // 日期对象有很多的方法

   // 得到一个空数组，因为日期对象身上并没可枚举或者不可枚举的属性
   Object.getOwnPropertyDescriptors(date);

   // 无法走进循环
   for (let key in date) {
     console.log("日期", key);
   }
   ```

   > Object.getOwnPropertyDescriptors(obj) 返回一个对象身上所有的可枚举和不可枚举属性的一个数组

2. 判断一个对象是否为空之前，一定要判断这个对象是不是一个日期对象，因为日期对象没有可枚举的属性，所以只要是日期对象就可以判断不为空。

   ```js
   // 检测一个对象是不是日期对象
   const date = new Date();
   date instanceof Date; // true
   ```

## MouseEvent 模拟鼠标事件

应用场景

比如现在页面上有两个标签，一个有 click 事件，而另一个标签的 click 事件时通过 vue 的自定义指令去做的，此时你想通过绑有 click 的这个标签，去触发绑有自定义指令的这个标签的 click 事件，就可以通过**[`MouseEvent()`](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/MouseEvent)**模拟鼠标事件去做到（因为这个自定义指令是点击就触发，无法在点击的时候做一些前置的处理，所以就只能通过另一个标签去触发）。

```html
<button @click="onBtn">按钮</button>
<div v-custom="'custom'" ref="customDiv" style="display: none;" />
```

```js
const customDiv = ref(null);
const onPrintClick = async () => {
  // 创建事件
  const clickEvent = new MouseEvent("click");
  // 派发事件
  customDiv.value.dispatchEvent(clickEvent);
};
```
