---
sidebar: auto
---

## 快速注册一堆全局组件

1. 创建一个 globalComponent.js（文件名任意）文件，在文件中将你需要注册的组件全部导入进来，并使用 install 方法创建一个插件。

   ```js
   import svgIcon from './SvgIcon/svgIcon.vue'
   import menu from './menu

   const components = {
       svgIcon,
       menu
   }

   export default {
       // 暴露方法必须叫install，这样才能接收到app的实例，才能拿到component方法
       install(app) {
           Object.keys(components).forEach((key) => {
               app.component(key, components[key])
           })
       },
   }
   ```

2. 在 main.js 中导入 js 文件

   ```js
   import globalComponent from "@/components";
   app.use(globalComponent);
   ```

## 递归组件

在组件内部调用自身组件，必须配置组件的 name 属性，一定要有条件的去调用组件，如果只是简单的组件调用自身组件，那么就会造成死循环，组件里面无限嵌套子组件，说白了就是一定要有终止的条件。

```html
<template>
  <div v-for="(item,index) in menuList" :key="index">
    <div>
      {{ item.title }} 子组件
      <child-temp v-if="item.childList" :menuList="item.childList" />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    menuList: Array,
    default: () => [],
  });

  // 一定要声明组件的name属性
  defineOptions({
    name: "child-temp",
  });

  // menuList的数据
  [
    ({
      title: 1,
      childList: [
        {
          title: 2,
          childList: "",
        },
      ],
    },
    {
      title: 3,
      childList: [
        {
          title: 4,
          childList: "",
        },
      ],
    }),
  ];
</script>
```

## 样式控制技巧

如果一个标签上本来就有这个样式属性，且无法修改原有的样式，那么就给他添加一个优先级更高的样式去覆盖原有的样式，以达到修改样式的目的，而不是一味想着去更改原有的样式。

## 实现全屏和非全屏的切换

document 对象上的一个 fullscreenElement 属性，可以用来判断当前是否为全屏，全屏为 true，否则为 null

```js
let screen = document.fullscreenElement;
if (!screen) {
  // 全屏
  document.documentElement.requestFullscreen();
} else {
  // 退出全屏
  document.exitFullscreen();
}
```
