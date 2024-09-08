---
sidebar: auto
---

# vue

## 1、data 为什么是函数而不是对象

- 每个组件实例都应具有独立的数据。如果`data`属性是一个对象，那么它将成为所有组件实例之间共享的数据。这样一来，一个组件中的数据改变会影响到其他组件中的数据，导致意外的副作用。而将`data`属性设置为一个函数可以确保每个组件实例有自己的独立数据，避免了数据混用问题。
- 当组件被复用时，如果 data 属性是一个对象，那么每个组件实例之间会共享同一个数据对象。这意味着，如果一个组件实例改变了 data 对象中某个属性的初始值，那么它会影响到其他组件实例的初始值。而当 data 属性是一个函数时，每个组件实例都会调用该函数来获取一个新的数据对象，确保每个组件实例的数据都被正确地初始化。

## 2、mixins 对于同名属性的处理

1. 对于`props`、`methods`、`inject`、`computed`的同名参数，页面上的会替代`mixins`中的
2. `data`中的数据会进行深度合并
3. 生命周期和`watch`则是会先执行`mixins`中的
4. `component`、`directives`、`filters`会通过原型链层层叠加

## 3、修饰符有哪些

1. 表单修饰符

   - `lazy` 光标离开标签的时候才会触发值的修改
   - `trim` 过滤首空格
   - `number` 自动转为数值型，如果值无法被`parseFloat`解析则返回原值

2. 事件修饰符

   - `stop` 阻止事件冒泡
   - `prevent` 阻止默认事件，如阻止`a`标签点击跳转
   - `capture` 内部元素触发的事件先在此处理，然后才由内部元素进行处理
   - `self` 将事件绑定在自身身上，相当于阻止事件冒泡
   - `once` 事件只触发一次
   - `passive` 阻止默认事件，能够提升移动端的性能。
   - `native` 触发原生事件，而非自定义事件

3. 鼠标按键修饰符

   - `left` 鼠标左键
   - `right` 鼠标右键
   - `middle` 鼠标中键

4. 键盘修饰符 (部分举例)

   - `enter` 回车
   - `esc` 退出

5. v-bind 修饰符

   - `sync` 双向绑定
   - `camel` 由于绑定特性时，会将大写字母转换为小写字母，得到不是一个驼峰属性，使用 camel 修饰符可以将 v-bind 属性名称驼峰化
   - `prop` 被加入此修饰符的属性不会被渲染到最终的`dom`结构上

6. 系统修饰符

   - `ctrl`
   - `alt`
   - `shift`
   - `meta`
   - `exact` 修饰符允许你控制由精确的系统修饰符组合触发的事件。

     ```html
     <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
     <button v-on:click.ctrl="onClick">A</button>

     <!-- 有且只有 Ctrl 被按下的时候才触发 -->
     <button v-on:click.ctrl.exact="onCtrlClick">A</button>
     ```

## 4、vue 挂载实例的过程

- `new Vue`的时候调用会调用`_init`方法
  - 定义 `$set`、`$get `、`$delete`、`$watch` 等方法
  - 定义 `$on`、`$off`、`$emit`、`$off`等事件
  - 定义 `_update`、`$forceUpdate`、`$destroy`生命周期
- 调用`$mount`进行页面的挂载
- 挂载的时候主要是通过`mountComponent`方法
- 定义`updateComponent`更新函数
- 执行`render`生成虚拟`DOM`
- `_update`将虚拟`DOM`生成真实`DOM`结构，并且渲染到页面中

## 5、首屏加载慢的解决方案

- 减小入口文件体积
- 静态资源本地缓存
- `UI`框架按需加载
- 图片资源压缩
- 减少组件重复打包
- 开启`Gzip`压缩（需要服务端做支持）
- 使用`SSR`

## 6、为什么 `vue3` 中要使用`Proxy`

- 在 `vue2` 中使用的是`Object.defineProperty`,但是这个 `api` 不能监听对象属性的新增和删除，为此在 `vue2` 中引入了`Vue.set`和`Vue.delete`方法，但是
  `proxy` 可以解决这个问题，并且可以监听到对象的新增和删除，所以`vue3` 中使用`Proxy`
- `Object.defineProperty`监听深层次的属性变化是需要递归监听对象的属性，这种方式会导致对嵌套对象的监听变得复杂而且低效，`proxy`能够对整个对象进行监听，只需要递归监听对象即可。
- `proxy`能监听整个数组的变化
