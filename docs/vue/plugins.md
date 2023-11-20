---
sidebar: auto
---

## mitt

在vue3中使用，类似于全局事件总线，能实现任意组件间通信。[mitt](https://www.npmjs.com/package/mitt)

1. 安装

   npm i mitt

2. 创建使用文件

   创建一个js文件，并写入一下代码

   ```js
   import mitt from 'mitt'
   const bus = mitt()
   export default bus
   ```

3. 使用

   * 传递数据

     ```js
     import bus from '../utils/mitt'
     
     bus.emit('change', 'change数据')
     ```

   * 接收数据

     ```js
     import bus from '../utils/mitt'
     
     bus.on('change', (e)=> {
       console.log('接收到的数据', e)
     })
     ```

   * 关闭监听

     ```js
     // 关闭对所有foo的监听
     bus.off('foo')
     
     // 关闭指定事件的指定函数的监听
     bus.off('foo', 函数名)
     ```

     

