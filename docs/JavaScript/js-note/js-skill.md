---
sidebar: auto
---

# js 技巧与积累

## 1、日期对象注意点

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
