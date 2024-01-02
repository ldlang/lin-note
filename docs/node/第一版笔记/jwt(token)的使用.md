### jwt认证机制

1. jwt

   ```js
   jwt是跨域认证的解决方案
   ```

2. jwt的组成

   ```
   jwt由三部分组成，分别是Header、payload、signature，三者之间通过 . 分割，真正的用户信息存储在payload部分，其他部分是为了jwt安全性的，为了保证token的安全性
   ```

3. jwt的使用

   ```js
   客户端收到服务器返回的jwt之后，一般会进行持久化的存储，伺候，客户端每次与服务器通信，都要带上这个jwt的字符串，去进行身份的验证，jwt推荐的使用方式，将jwt的token放在http的请求头上的Authorization中
   
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

5. secret秘钥

   ```js
   为了保证jwt字符串的安全性，防止jwt字符串在传输过程中被破解，需要定义一个用于加密和解密的secret秘钥
   	1.生成jwt字符串的时候，需要使用secret秘钥最用户的信息进行加密，最终得到加密好的jwt字符串
       2.当jwt字符串解析还原为json对象的时候，需要用secret进行解密
       
   secret其实就是一个随意书写的字符串
   const secretKey = 'woshijiamizifuchuan'
   ```

6. 在登录成功后生成jwt

   ```js
   调用jsonwebtoken包提供的sign()方法，将用户的信息加密成jwt字符串，响应给客户端
   
   sign()接收三个参数，分别是用户信息，加密字符串，和配置对象，加密的东西，最好不要包好用户的密码
   const token = jwt.sign({username:'张三'}, secretKey,{expiresIn: '60s'})
   ```

7. 将jwt的token字符串`还原`为json对象

   ```js
   使用express-jwt这个中间件，自动将客户端发送过来的token解析还原
   
   const secretKey = 'lindalang'
   app.use(expressJwt.expressjwt({ secret: secretKey, algorithms: 		["HS256"] })
   
   此时所有请求的req身上都有了一个auth属性，这个属性里面就包涵了解析后的信息
   ```

8. 处理jwt解析错误

   ```js
   jwt解析错误err.name就会有一个'UnauthorizedError'属性，所以只需要看有没有这个属性就知道是不是token解析错误了
   
   app.use((err, req, res, next)=>{
       if (err.name === 'UnauthorizedError'){
           console.log('token 解析错误',err)
           res.status(401).send('token过期')
       }else{
           res.status(500).send('未知错误')
       }
   })
   ```

9. 完整示例

   ```js
   const express = require('express')
   const app = express()
   const cors = require('cors') // 导入跨域模块
   const jwt = require('jsonwebtoken') // 导入jwt模块
   const expressJwt = require('express-jwt') // 导入express解析jwt的模块
   
   app.use(cors())  // 挂载跨域模块，一定要在所有路由的前面
   app.use('/public',express.static('public'))  // 挂载全局静态资源的模块
   const secretKey = 'lindalang'  // 定义jwt的加密解密字符串
   
   // 解析jwt的全局中间件，unless里可以配置要忽略解析的接口
   app.use(expressJwt.expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({path:['/login']}))
   
   // 登录以后返回用户token给客户端
   app.get('/login', (req,res)=>{
       const token = jwt.sign({username:'张三'}, secretKey, {expiresIn: '60s'})
       res.send({
           code: 200,
           token // 将token发送给客户端
       })
   })
   
   // 登录成功，通过携带的token解析用户的信息
   app.get('/user',(req, res)=>{
       console.log(req.auth)
       res.send(req.auth) // 获取通过express-jwt解析后的用户信息
   })
   
   // 错误处理
   app.use((err, req, res, next)=>{
       // 如果err.name有'UnauthorizedError'这个属性，则代表是token解析错误导致的
       if (err.name === 'UnauthorizedError'){
           console.log('token 解析错误',err)
           res.status(401).send('token过期')
       }else{
           res.status(500).send('未知错误')
       }
   })
   
   app.listen(80,()=>{
       console.log('服务器启动成功')
   })
   ```

# 前端使用

```js
// 登录获取token
axios.get('/api/login').then(res=>{
	res.data.token && localStorage.setItem('token',res.data.token) // 持久化存储token
})

// 将token携带给服务端
axios.get('/api/user',{
  headers: {
      // 配置token传给服务端
    'Authorization': `Bearer ${localStorage.getItem('token')}` 
  }
}).then(res=>{
  console.log('用户接口',res.data);
})
```