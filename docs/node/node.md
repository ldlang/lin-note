---
sidebar: auto
---

# node.js 笔记

node 也是 js 的运行环境 但是无法调用 dom、bom 和 ajax 等的流浪器内置的 api

### 如何用 node 运行 js 文件

1、打开 js 文件存放的位置
2、在终端使用 node+文件名 就可运行

### 快捷键

tab 可以快速补全路径
esc 清空当前输入的命令
快捷命令
els+回车，清空历史

## fs 模块

### 文件的读取

- readFile

  ```js
  const fs = require("fs"); // 引入fs模块
  // 异步的方式
  fs.readFile("./test.txt", "utf8", function (err, res) {
    console.log(err, "失败");
    console.log(res, "成功");
  }); //第一个参数为路径，第二个为读取的编码格式（默认为utf8），第三个为回调函数
  //如果不传'utf8'得到的结果是一个buffer，需要对结果调用toString()，才能转成文字
  ```

- readFileSync 同步的方式

  ```js
  let res = fs.readFileSync("./test.txt");
  ```

- createReadStream

  流式读取

  ```js
  const fs = require("fs");
  const rs = fs.createReadStream("./测试.mp4");
  // 绑定data事件才能拿到数据
  rs.on("data", (res) => {
    console.log(res); // 得到的是一些buffer
  });
  // 绑定end事件，监听读取完成
  rs.on("end", () => {
    console.log("读取结束");
  });
  ```

### 文件的写入

- writeFile 异步

  第一个参数为路径，第二个参数为写入的内容，第三个为读取的编码格式（默认为 utf8），第四个为回调函数
  写入的内容会把原来的替换掉，如果写入的路径没有那个文件，则会新建一个文件

  ```js
  const fs = require("fs");
  fs.writeFile("./test.txt", "很棒", "utf8", function (err) {
    console.log(err, "失败");
  });
  ```

- writeFileSync 同步

- appendFile

  追加写入

  ```js
  fs.appendFile('./test.txt','很棒'，err=>{
  	console.log(err)
  }) // 异步的方法
  appendFileSync()//同步的方法
  ```

- createWriteStream

  文件流的写入

  ```js
  const fs = require('fs')
  const ws = fs.createWriteStream('./测试.txt')//要写入的文件，没有则会自动创建
  ws.write（'你好'）
  ws.write（'很棒'）
  ws.end()//结束写入
  ```

### 文件读取写入练习，复制一份文件

```js
通过流式读取和写入的方式; //效率更高
const fs = require("fs");
const rs = fs.createReadStream("./测试.mp4");
const ws = fs.createWriteStream("./ceshi.mp4");
rs.on("data", (res) => {
  ws.write(res);
});
rs.on("end", () => {
  console.log("读取结束");
});

ws.pipe("fs"); //简单写法，不常用
通过同步的方式;
let data = fs.readFileSync("./ceshi.mp4");
fs.writeFileSync("./ceshi1.mp4", data);
```

### 文件的移动与重命名

- rename 异步的方式

  如果原路径与新路径相同那么就是重命名，否则就是移动并且重命名

  ```js
  const fs = require("fs");
  //，参数：(原路径，新路径，回调)
  fs.rename("./test.txt", "./text.txt", (err) => {
    console.log(err);
  });
  ```

- renameSync 同步的方式

### 文件的删除

- unlink 异步

  ```js
  fs.unlink("./ceshi.mp4", (err) => {
    console.log(err);
  });
  ```

- unlinkSync 同步

- rm

  异步 文件的删除，同时也能删除文件夹

  ```js
  fs.rm("./ceshi1.mp4", (err) => {
    console.log(err);
  });
  ```

- rmSync 同步

### 操作文件夹

- mkdir
  新建文件夹

  ```js
  // 创建单个文件夹;
  fs.mkdir("./a", (err) => {
    console.log(err);
  });

  // 创建递归文件夹; recursive:true开启递归模式
  fs.mkdir("./a/b/c", { recursive: true }, (err) => {
    console.log(err);
  });
  ```

- readdir

  读取文件夹

  ```js
  // 返回一个数组，里面包含了文件夹下面所有的文件名
  fs.readdir("../node", (err, data) => {
    console.log(data);
  });
  ```

- rmdir
  删除文件夹

  ```js
  // 只有文件夹a里面是空的才能删除
  fs.rmdir("./a", (err) => {
    console.log(err);
  });

  //无论文件夹a里面是不是空的都能删除
  fs.rmdir("./a", { recursive: true }, (err) => {
    console.log(err);
  });
  ```

### 查看文件信息

- stat

  查看文件得到信息，如大小，创建事件，修改时间等

  ```js
  fs.stat("./ceshi2.mp4", (err, res) => {
    console.log(res);
    console.log(res.isFile());
    console.log(res.isDirectory());
  });
  ```

- isFile
  看是不是一个文件

- isDirectory
  看是不是一个文件文件夹

## 全局属性

### \_\_dirname

\_\_dirname 保存的是所在文件的所在目录的绝对路径，说白了就是你写代码这个文件的相对路径
node 有一个特性，会在终端的目录下运行代码，导致文件路径不对，此时路径前面加上\_\_dirname 路径就一定不会出错了

### join 小技巧

join 将数组转换为字符串

```js
let arr = [1, 2, 3, 6, 5, 6];
console.log(arr.join("\r\n")); // 打印的结果是每一个数字占一行
```

## path 路径模块

- path.join() 拼接路径

  ```js
  fs.writeFile(path.join(__dirname，'/test.txt'),'很棒','utf8', function(err){
      console.log(err,'失败');
  })

  ../会抵消前一个路径
  例:console.log(path.join('/a','/b',../,'/c') //结果/a/c,/b被后面的../抵消了
  //这样拼接的路径会减少很多问题
  ```

- basename

  读取路径的最后一段，也就是文件名

  ```js
  const newPath = path.extname("./text/index.html");
  console.log(newPath); // index.html

  const newPath = path.extname("./text/index.html", "tml");
  console.log(newPath); // index.h会把匹配到第二个参数的内容干掉
  ```

- extname

  读取文件的扩展名

  ```js
  const newPath = path.extname("./text/index.html");
  console.log(newPath); //.html
  ```

- 动态路径问题

  使用`__dirname`解决`__dirname`表示当前目录

  ```js
  fs.writeFile(__dirname + "/test.txt", "很棒", "utf8", function (err) {
    console.log(err, "失败");
  }); //此时无论在哪执行，都不会路径报错
  ```

## buffer 模块

1. 创建 buffer

   - alloc

     安全但是效率不高

     ```js
     let buf = Buffer.alloc(10);
     ```

   - allocUnsafe

     不是很安全但是效率高

     ```js
     let buf2 = Buffer.allocUnsafe(1000);
     ```

   - from

     ```js
     let buf3 = Buffer.from("hello");
     ```

2. buffer 与字符串的装换

   默认转换编码为 utf-8

   ```js
   let buf5 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
   buf5.toString();
   ```

3. 操作 buffer

   ```js
   let buf = Buffer.from("hello");
   buf[0] = 95; //就能将h变成_
   ```

## 抓取请求包软件

```
https://www.telerik.com/fiddler
```

## http 模块

```js
const http = require("http");

// 创建服务对象
const server = http.createServer((request, response) => {
  const http = require("http");

  // 创建服务对象
  const server = http.createServer((request, response) => {
    request.method; //获取请求方法
    request.url; // 获取请求的地址，只能拿到请求路径上的字符串
    request.headers; // 获取请求头
    request.httpVersion; // 获取http协议版本

    response.setHeader("Content-Type", "application/json;charset:utf-8");
    response.end("你好");
  });

  // 监听端口，启动服务
  server.listen(80, () => {
    console.log("服务启动了");
  });
  //设置编码模式，能够解析中文
  response.setHeader("Content-Type", "application/json;charset:utf-8");
  response.end("hello node"); // 返回响应结果
});

// 监听端口，启动服务
server.listen(9000, () => {
  console.log("服务启动了");
});
```

### 获取请求的内容

```js
获取请求体内容
    const server = http.createServer((request,response)=>{
        let body = ''
        request.on('data',chunk=>{
            body += chunk
        })
        request.on('end',()=>{
            console.log(body);//得到的就是请求体
            response.end('http')
        })
    })

获取请求的路径，以及查询参数
    const http = require('http')
    const { parse } =require('url') // url模块
    // 创建服务对象
    const server = http.createServer((request,response)=>{
        // 请求的路径：http://127.0.0.1/search?keys=5
        //提取查询的路径,第二个参数会让query变成一个对象，也就是查询的字符串变成一个对象
        let res = parse(request.url,true)
        // 路径
        pathName = res.pathname
        let keys = res.query.keys
        console.log(pathName,keys);
        response.end('查询成功了')
    })
    // 监听端口，启动服务
    server.listen(80,()=>{
        console.log('服务启动了');
    })
```

### 响应设置

```js
const http = require("http");
const { parse } = require("url");

// 创建服务对象
const server = http.createServer((request, response) => {
  response.statusCode = 200; // 设置响应状态码
  response.statusMessage = "成功了"; // 设置响应状态描述
  response.setHeader("serves", "node");
  // 可以设置重复响应头的key，value分别是后面的值
  response.setHeader("love", ["a", "b", "c"]);

  response.write("响应的结果");
  response.write("响应的结果"); // 可以返回多次响应结果
  response.end("响应的结果"); //必须有end结束响应
});

// 监听端口，启动服务
server.listen(80, () => {
  console.log("服务启动了");
});
```

## 关闭电脑指定端口

打开电脑搜索 资源监视器 ===> 网络 ===> 侦听端口 ===> 找到对应服务的 pid ===> 打开资源管理器找到对应 pid 然后结束他的服务

## 暴露与导入

```js
暴露方式与引入方式;
home.js暴露;
function home() {
  console.log("我是home");
}
module.exports = {
  home,
};
exports.home = home;
module.exports = home;

index.js引入; // 分别对应上面的三种暴露方式
const me = require("./home");
me.home(); // 运行函数
me.home(); // 运行函数
me(); // 运行函数
```

## npm——包管理工具

```js
npm init
	将一个文件夹初始化为一个[包]

npm init -y
	全部以默认值来创建一个包

注意事项
	包的名字不能有中文，不能有大写字母
```

## 开发依赖和生产依赖

```js
npm i -S axios
	安装的就是生产依赖，会安装到package.json的dependencies里,即使不加-S默认的使用npm i axios也是等于加入了-S

npm i -D less
	安装的就是开发环境，会安装到package.json的devDependencies里
```

## nodemon

```js
能够热启动node服务，不用每次修改代码再去重启服务

使用：
	1、全局安装
		npm i -g nodemon // 加入-g就是全局安装
	2、使用
		使用nodemon替换node去启动服务
			例：nodemon ./index.js
```

## npm 部分说明

### npm root -g

查看已安装的全局包

### npm r 或 npm remove

```
卸载包
npm r -g nodemon 卸载全局包
```

### 自定义启动命令

```js
1、配置命令
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "serve": "node ./javaScript.js" // 自定义的命令 serve可以随便取
        "start": "node ./javaScript.js" // 特殊自定义的命令
    },
2、使用
	npm run serve ===>是刚刚配置的自定义的
	npm start 不用加run
```
