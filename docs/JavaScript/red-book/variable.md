---
sidebar: auto
---

# 变量、作用域、内存

### 原始值和引用值

1. 原始值

   ```js
   6个基础类型 Undefined、Null、Boolean、Number、String 和 Symbol
   通过字面量形式创建的会直接将值存储在内存中(也就是存储在栈内存中)，访问变量就直接访问内存中的值
   ```

2. 引用值

   ```js
   object、Array、function、和通过 new 创建的基础类型(存储在堆内存中)，变量保存的只不过是这个值存储在内存中的引用地址

   注意：通过 new 创建出来的基础类型，通过typeof检测为object
   ```

3. 复制值

   ```js
   原始数据类型：
   	将一个变量保存的值赋值给另一个变量式，会在内存中开辟两个空间来存储这两个值，因此两个值是互不干扰的，即使一个值变了，另一个值也不会变
       let str = "str";
       let str1 = str;
       str = 2;
       console.log(str, str1); // 2  '字符串'

   引用数据类型：
   	引用数据类型将一个变量的引用值赋值个另一个变量，只是原来这个变量存储的引用地址赋值给了这个新的变量，只要任意个变量改变了存储的这个值，那么所有保存这个引用值的变量都会改变,引用数据直接赋值也就是所谓的浅拷贝。
       对象：
           let obj = {
               a: "1",
               b: "2",
           };
           let obj1 = obj;
           obj.a = "15";
           console.log(obj，obj1); // {a: '15', b: '2'} 两个变量的结果都是同一个

   	数组：
   		let arr = [1, 2, 3];
       	let arr1 = arr;
       	arr[1] = "字符串";
       	console.log(arr, arr1); // [1, '字符串', 3] 两个变量的结果都是同一个

   	即使是通过函数参数的形式去修改值同样也只是修改了内存中的值
           function fun(ob) {
               ob.a = "哈哈哈";
           }
           fun(obj);
           console.log(obj, obj1);// {a: '哈哈哈', b: '2'} 两个变量的结果都是同一个

   	修改原来的对象后，在开辟一个新对象去修改，是不会影响到原来的对象的
           function setName(obj) {
               obj.name = "张三";
               obj = new Object();
               obj.name = "李四";
           }
           let person = new Object();
           setName(person);
           console.log(person.name); // "张三"

   ```

4. 确定类型

   ```js
   通过typeof去检测除了 null 的基础数据类型是有意义的，因为能够准确的知道类型，检测引用数据类型的意义其实并不大，此时就可以 instanceof 去确定引用的数据类型

       let mao = new Map();
       console.log(mao instanceof Object); // true
       console.log(mao instanceof Map);// true

       function fun() {}
       console.log(fun instanceof Object);// true
       console.log(fun instanceof Function);// true

   通过 instanceof 检测基础数据类型会直接返回false，检测引用数据类型，所有的数据类型通过 instanceof 与 Object 检测都是返回true，即使是函数也是true， 所以可以直接检测对应的类型，如Array，Function，Map等
   ```

5. const 定义的引用数据类型如何不让更改

   ```js
   创建一个对象，并用 Object.freeze 来冻结这个对象，那么这个对象将永远不能更改
   const obj = Object.freeze({
       a: "1",
       b: "2",
   });
   obj.a = 15;
   console.log(obj);
   ```

6. 判断两个值是否相等

   ```js
   基础数据类型只是判断值等不等，引用数据类型，则是判断连个变量保存的引用地址等不等
   ```
