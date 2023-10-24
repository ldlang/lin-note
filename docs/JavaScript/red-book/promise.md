---
sidebar: auto
---

# 期约(Promise)与异步函数

1. **Promise**

   - promise 有三种状态分别是，`padding`进行中，`resolved`已完成，`rejected`已失败

     ```js
     进行中
     	new Promise(()=>{})

     已成功
     	new Promise(resolve => resolve('成功了'))
     	等同于	Promise.resolve('成功了')

     已失败
     	new Promise((resolve, reject) => reject('失败了'))
     	等同于 Promise.reject('失败了')
     ```

   - primose 的状态只能改变一次，第一次改变的状态就是这个 promise 的最终态了，之后无论
     再怎么去改变他的状态都是不行的。

   - `Promise.reject()`抛出的错误是不会被`try`捕获的

     ```js
     let p = Promise.reject();
     try {
       console.log(p);
     } catch (error) {
       console.log("失败了"); // 不会走到这里
     }
     ```

   - 330 页之后继续

2.
