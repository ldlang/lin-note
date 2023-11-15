---
sidebar: auto
---

# JSON

JSON 是 JavaScript 的严格子集，利用 JavaScript 中的几种模式来表示结构化数据。虽然它是基于 JavaScript 语法，但它独立于 JavaScript。

## 语法

JSON 支持 3 中类型的值

- 简单值：字符串、数值、布尔值和 null

- 对象：对象表示有序键/值对。每个值可以是简单值，也可以是复杂类型
- 数组：数组表示可以通过数值索引访问的值的有序列表。数组的值可以 是任意类型，包括简单值、对象，甚至其他数组。

### 简单值

任何一个简单的值都是 JSON 的有效值，和 js 不同的是，JSON 中的字符串必须使用双引号包裹。

### 对象

由于 JSON 中没有变量，所以在 JSON 中表示一个对象直接使用`{}`即可，但是对象中的 key 值也必须使用双引号将其包裹起来，最后一个键值对的后面也不需要`,`结尾。

```json
{
  "name": "张三",
  "age": 15,
  "school": {
    "name": "小学",
    "location": "这里"
  }
}
```

### 数组

数组在 JSON 中使用 JavaScript 的数组字面量形式表示`[]`

```json
[
  {
    "name": "张三",
    "age": 18,
    "sex": "男",
    "phone": "12345678901",
    "email": 11,
    "role": "admin"
  }
]
```

## JSON解析与序列化

### JSON对象

在JSON对象中有两个方法 stringify() 和 parse()，这两个方法分别可以将 JavaScript 序列化为 JSON 字符串，以及将 JSON 解析为原生 JavaScript 值。

strinify()将将对象转换为一个序列化后的字符串。

```js
let book = {
    title: "我是书名",
};

console.log(JSON.stringify(book)); // 是一个字符串  {"title":"我是书名"}
```

parse()将被stringify()序列化后的字符串转为对象

```js
JSON.parse(JSON.stringify(book)) // 是一个对象 {title:"我是书名"}
```

### 序列化选项

1. JSON.stringify() 可以接收三个参数，第一个是要序列化的对象，第二个参数可以是一个数组或者对象，第三个是序列化后缩进的字符数（最大缩进值为 10，大于 10 的值会自动设置为 10）

   第二个参数是数组，会将被序列化的对象的key与数组的值进行比较，只有相等的值才会被保存下来

   ```js
   // 两个参数
   let book = {
       obj: {
           title: "二级title",
           name: "二级名字"
       },
       title: "一级title",
       name: "一级名字",
   };
   const jsy = JSON.stringify(book, ["title", "name"])
   // 只有最外层匹配的key被保存下来了
   console.log(jsy); // {"title":"一级title","name":"一级名字"}
   
   // 3个参数
   JSON.stringify(book, ["title", "name"], 2)
   结果：依旧是一个字符串，只不过被格式化了
   {
       "title": "一级title",
   	"name": "一级名字"
   }
   ```

2. JSON.parse()方法也可以接收一个额外的参数，这个函数会针对每个键/值对都调用一次。为区别 于传给 JSON.stringify()的起过滤作用的替代函数（replacer），这个函数被称为还原函数（reviver）。