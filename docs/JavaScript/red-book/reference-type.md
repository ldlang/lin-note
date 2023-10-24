---
sidebar: auto
---

# 集合引用类型

1. **Object**

   - 如果用数字作为对象的 key，那么会被自动转换为字符串类型，读取也能通过`.`的方式去读取。

     ```js
     let person = {
       name: "Nicholas",
       5: true,
     };
     console.log(person[5]); // true
     ```

2. **Array**

   - form

     - 对普通的字符串使用 Array.form 方法，会将字符串的每个字符切割为数组的每一项

       ```js
       let str = "asdfghjkl";
       let arr = Array.from(str);
       console.log(arr); // ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
       ```

     - 对于 Map 和 Set 也能转为数组

       ```js
       const set = new Set().add(1).add(2).add(3).add(4);
       let arr = Array.from(set);
       console.log(arr); // [1, 2, 3, 4]

       const map = new Map().set(1, 2).set("a", 6);
       let arr = Array.from(map);
       console.log(arr); //  [[1, 2], [a, 6]]
       ```

     - 对于简单的一维数组可以实现深拷贝

       ```js
       let arr = [1, 2, 3];
       let arr2 = Array.from(arr);
       console.log(arr2 == arr); // false

       arr2[1] = 5;
       console.log(arr2, arr); // [1, 5, 3] , [1, 2, 3]
       ```

     - 复杂的数组，其实也是深拷贝，但是里面的对象不是深拷贝

       ```js
       let arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
       let arr2 = Array.from(arr);
       console.log(arr == arr2); // false

       如果改变的是里面对象的值，则两个数组里面的对象都会改变
       arr2[0].a = 100;
       console.log(arr);  // 输出：[{a: 100}, {b: 2}, {c: 3}]
       console.log(arr2); // 输出：[{a: 100}, {b: 2}, {c: 3}]
       ```

     - 还可以接收第二个参数，是一个回调函数，接收的参数是转化后的数组每一项

       ```js
       let arr = [1, 2, 3];
       let arr2 = Array.from(arr, (item) => item + 2);
       console.log(arr2); //  [3, 4, 5]
       ```

   - 空位数据也是有 length 的，只不过每位都是 undefined

     ```js
     let arr = [, , , , , ,];
     console.log(arr.length); // 6
     ```

   - 改变数组的 length，可以改变数组

     ```js
     去除数组的最后一项
     let arr = [1, 2, 3]
     arr.length = 2
     console.log(arr); // [1, 2]

     如果是改变为超出原有数组的长度，则超出的部分会被填充上undefined
     ```

   - `Array.isArray()`检测一个对象是不是数组最准确的方式，是数组则返回 true，否则返回 false

   - `fill`数组填充方法

     - 只有一个参数会将数组的每一项都替换为这个参数

       ```js
       let arr = [1, 2, 3];
       arr.fill(5);
       console.log(arr); // [5,5,5]
       ```

     - 有两个参数第一个代表填充的值，第二个代表起始位置

       ```js
       let arr = [1, 2, 3, 4, 5];
       arr.fill(5, 2);
       console.log(arr); // [1, 2, 5, 5, 5]
       ```

     - 有三个参数，第一个代表填充的数值，第二个代表起始位置，第三个为终止位置(不包含)

       ```js
       let arr = [1, 2, 3, 4, 5];
       arr.fill(5, 2, 3);
       console.log(arr); // [1, 2, 5, 4, 5]
       ```
