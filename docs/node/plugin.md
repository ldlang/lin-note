---
sidebar: auto
---

# express 常用插件积累

## 1、jwt

1. jwt

   jwt 是跨域认证的解决方案;

2. jwt 的组成

   jwt 由三部分组成，分别是 Header、payload、signature，三者之间通过 . 分割，真正的用户信息存储在 payload 部分，其他部分是为了 jwt 安全性的，为了保证 token 的安全性

3. jwt 的使用

   客户端收到服务器返回的 jwt 之后，一般会进行持久化的存储，伺候，客户端每次与服务器通信，都要带上这个 jwt 的字符串，去进行身份的验证，jwt 推荐的使用方式，将 jwt 的 token 放在 http 的请求头上的 Authorization 中

   ```js
   格式
   Authorization: Bearer token  // Bearer后面空格再接上token
   ```

4. 安装使用

   ```js
   npm i jsonwebtoken   // 用于生成jwt字符串
   npm i express-jwt	// 用于将jwt字符串解析还原为json对象

   导入包
   	const jwt = require('jsonwebtoken')
   	const expressJwt = require('express-jwt')

   定义jwt秘钥
   	const secretKey = 'lindalang'

   定义全局解析秘钥的中间件，解析完成后会往req身上挂载一个auth属性，这个属性就包涵了解析后的数据信息，express-jwt需要配置algorithms算法，一般默认是HS256。
   	app.use(expressJwt.expressjwt({ secret: secretKey, algorithms:						["HS256"]}).unless({path:['/login']}))	//unless过滤不需要解析的接口
   ```

5. secret 秘钥

   为了保证 jwt 字符串的安全性，防止 jwt 字符串在传输过程中被破解，需要定义一个用于加密和解密的 secret 秘钥 1.生成 jwt 字符串的时候，需要使用 secret 秘钥最用户的信息进行加密，最终得到加密好的 jwt 字符串 2.当 jwt 字符串解析还原为 json 对象的时候，需要用 secret 进行解密

   ```js
   secret其实就是一个随意书写的字符串;
   const secretKey = "woshijiamizifuchuan";
   ```

6. 在登录成功后生成 jwt

   调用 jsonwebtoken 包提供的 sign()方法，将用户的信息加密成 jwt 字符串，响应给客户端

   sign()接收三个参数，分别是用户信息，加密字符串，和配置对象，加密的东西，最好不要包好用户的密码

   ```js
   const token = jwt.sign({ username: "张三" }, secretKey, {
     expiresIn: "60s",
   });
   ```

7. 将 jwt 的 token 字符串`还原`为 json 对象

   使用 express-jwt 这个中间件，自动将客户端发送过来的 token 解析还原

   ```js
   const secretKey = 'lindalang'
   app.use(expressJwt.expressjwt({ secret: secretKey, algorithms: 		["HS256"] })

   此时所有请求的req身上都有了一个auth属性，这个属性里面就包涵了解析后的信息
   ```

8. 处理 jwt 解析错误

   jwt 解析错误 err.name 就会有一个'UnauthorizedError'属性，所以只需要看有没有这个属性就知道是不是 token 解析错误了

   ```js
   app.use((err, req, res, next) => {
     if (err.name === "UnauthorizedError") {
       console.log("token 解析错误", err);
       res.status(401).send("token过期");
     } else {
       res.status(500).send("未知错误");
     }
   });
   ```

9. 完整示例

   ```js
   const express = require("express");
   const app = express();
   const cors = require("cors"); // 导入跨域模块
   const jwt = require("jsonwebtoken"); // 导入jwt模块
   const expressJwt = require("express-jwt"); // 导入express解析jwt的模块

   app.use(cors()); // 挂载跨域模块，一定要在所有路由的前面
   app.use("/public", express.static("public")); // 挂载全局静态资源的模块
   const secretKey = "lindalang"; // 定义jwt的加密解密字符串

   // 解析jwt的全局中间件，unless里可以配置要忽略解析的接口
   app.use(
     expressJwt
       .expressjwt({ secret: secretKey, algorithms: ["HS256"] })
       .unless({ path: ["/login"] })
   );

   // 登录以后返回用户token给客户端
   app.get("/login", (req, res) => {
     const token = jwt.sign({ username: "张三" }, secretKey, {
       expiresIn: "60s",
     });
     res.send({
       code: 200,
       token, // 将token发送给客户端
     });
   });

   // 登录成功，通过携带的token解析用户的信息
   app.get("/user", (req, res) => {
     console.log(req.auth);
     res.send(req.auth); // 获取通过express-jwt解析后的用户信息
   });

   // 错误处理
   app.use((err, req, res, next) => {
     // 如果err.name有'UnauthorizedError'这个属性，则代表是token解析错误导致的
     if (err.name === "UnauthorizedError") {
       console.log("token 解析错误", err);
       res.status(401).send("token过期");
     } else {
       res.status(500).send("未知错误");
     }
   });

   app.listen(80, () => {
     console.log("服务器启动成功");
   });
   ```

**jwt 在前端使用**

```js
// 登录获取token
axios.get("/api/login").then((res) => {
  res.data.token && localStorage.setItem("token", res.data.token); // 持久化存储token
});

// 将token携带给服务端
axios
  .get("/api/user", {
    headers: {
      // 配置token传给服务端
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
  .then((res) => {
    console.log("用户接口", res.data);
  });
```

## 2、mysql

1. 安装 mysql 包

   ```js
   npm i mysql
   ```

2. 创建一个 js 文件，用于连接 mysql

   ```js
   const mysql = require("mysql");

   const db = mysql.createConnection({
     host: "localhost", // 地址
     port: 3306, //端口号
     user: "root", // 账户
     password: "root", // 密码
     database: "express", // 连接的表
   });

   // 封装查询数据库
   const dbUtils = (sql) => {
     return new Promise((resolve, reject) => {
       db.query(sql, (err, res) => {
         // query规定查询字符串的关键字
         if (res) {
           resolve(res);
         } else {
           reject(err);
         }
       });
     });
   };

   module.exports = dbUtils; // 导出连接mysql的方法
   ```

3. 在路由中使用

   在需要查询数据库的地方导入数据库连接的方法

   ```js
   const express = require("express");
   const router = express.Router();
   const dbUtils = require("../utils/db"); // 导入连接的方法

   router.post("/user", async (req, res) => {
     let bodyData = req.body;
     let sql = `INSERT INTO user ( name,sex,age ) values ('${bodyData.name}','${bodyData.sex}',${bodyData.age})`;
     let data = await dbUtils(sql);
     res.send("ok");
   });

   module.exports = router;
   ```

**update 语句失败成功的判断**

result.affectedRows 更新语句，如果只影响了一行那么说明更新成功，否则就是更新失败

```js
const sql = `update user set nickname = '${nickname}', email = '${email}' where id = ${id}`;
db.query(sql, (err, result) => {
  if (result.affectedRows === 1)
    return res.send({ code: 200, data: result[0] });
});
```

## 3、cors 解决跨域

1. cors 的使用

   ```js
   npm i cors  // 下载插件

   const cors = require('cors')   // 导入中间件

   app.use(cors())  // 挂载中间件
   ```

2. cors 的原理

   cors 全程 跨域资源共享 是由一些列的 http 响应头组成的，这些 http 响应头决定了浏览器是否阻止前端技术 js 代码跨域获取资源

   ```js
   Access-Control-Allow-Origin: *   // *代表所有的地址都能被访问
   ```

3. 指定域名不跨域

   ```js
   res.setHeader('Access-Control-Allow-Origin', 'http://lindalang.com')
   指定只有 'http://lindalang.com'  访问服务器不跨域
   ```

4. CORS 仅支持客户端向服务器发送如下的 9 个请求头

   **Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width 、Content-Type** （值仅限于 **text/plain、multipart/form-data、application/x-www-form-urlencoded** 三者之一）
   如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过 Access-Control-Allow-Headers 对额外的请求头进行声明，否则这次请求会失败！

   ```js
   res.setHeader(
     "Access-Control-Allow-Headers",
     "Content-Type, X-Custom-Header"
   );
   ```

5. 默认情况下，CORS 仅支持客户端发起 GET、POST、HEAD 请求

   如果客户端希望通过 PUT、DELETE 等方式请求服务器的资源，则需要在服务器端，通过 Access-Control-Alow-Methods 来指明实际请求所允许使用的 HTTP 方法

   ```js
   res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, HEAD");
   res.setHEader("Access-Control-Allow-Methods", "*"); //支持所有请求方式
   ```
