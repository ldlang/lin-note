官网

```
https://www.expressjs.com.cn/
```

安装一个express服务

```js
1、在一个文件夹下 npm init 一个文件夹
2、npm i express
3、创建一个js文件并写入一下代码
	// 导入
	const express = require('express')
	// 创建应用对象
    const app = express()
	// 创建路由
    app.get('/',(req,res)=>{
        req.end('创建成功了') // 返回结果
    })
	// 监听端口
    app.listen(80,()=>{
        console.log('服务启动了');
    })
4、启动服务
	node .\javaScript.js
5、访问端口
	http://127.0.0.1/   因为端口80特殊，可以直接访问
```

路由

```js
app.get('/home',(req,res)=>{}) //匹配get请求同时路径为/home

app.post('/login',(req,res)=>{}) //匹配post请求同时路径为/login

app.get('/',(req,res)=>{}) //不需要输入路径，一般用于首页

app.all('/home',(req,res)=>{}) //匹配所有类型的请求，并且路径为/login

app.all('*',(req,res)=>{}) //匹配所有类型和所有路径的请求，一般用于捕获错误
```

获取请求参数

```js
req.query //获取参数
req.path // 获取请求路径
req.ip //获取ip
req.get('host') // 获取请求头
```

获取路由(路径上的)参数

```js
app.get('/:id',(req,res)=>{
    console.log(req.params.id); // 参数全部存放在params中，只不过是定义个id去接收，id可									以是任何字符串，但是前面必须加：
    res.end('success')
})
```

设置响应

```js
app.get('/key',(req,res)=>{
	res.status(500) //响应状态码
    
    res.set('aa','bb') //设置响应头
    
    res.send('设置响应体')// 设置响应体，自带编码，响应中文也不会乱码
    
    res.status(500).set('aa','bb').send('设置响应体') //还可以连缀写
    
    res.redirect('http://www.baidu.com')// 路由重定向
    
    res.download(__dirname + '/package.json')// 设置响应下载，文件路径必须是绝对路径
    
    res.json({"key":'val'})  // 响应json
    
    res.sendFile(__dirname + '/txt.html') //响应文件内容
})
```

全局中间件

```js
const app = express()

function redfun(req, res, next){
	let {url , ip } = req;
	fs.appendfileSync(path.resolve(__dirname , './file'), url + ip +'\r\n')
	next()
}

app.use(redfun);
能够监听到所有的请求，通过appendfileSync保存到一个文件里
```

路由中间件

```js
let checkCode = (req, res, next)=>{
	if(req.query.code == '200'){
		next()
	}else{
		res.send('请求失败')
	}
}

使用方式
app.get('/admin',checkCode,(req,res)=>{
	此时路径参数上的code必须是200才能执行后面的代码
	res.send('登录成功')
})
```

静态资源中间件

```js
app.use(express.statis(__dirname + '/public')) // /public静态资源文件夹的路径
```

获取请求体的数据

```
npm i body-parser
用这个包的中间件函数
```

防盗链

```js
声明中间件
app.use(req,res,next)=>{
    let referer = req.get('referer');
	if(referer){
	let url = new URL(referer)
	let hostname = url.hostname;
		if(hostname ！= '127.0.0.1') return
	}
	next()
}
只要请求的referer不是127.0.0.1就不给响应结果 
```

路由模块化

```js
新建一个js文件 home.js
const express = require('express');
const router = express.Router()

router.get('/home',(req.res)=>{
	res.send('后台首页')
})

module.exports = router

在主模块中导入此模块
const express = require('express')
const homeRouter = require('./home') //引入文件
const app =  express()
app.use(homeRouter) // 使用包
```

generator

```
具体参考
	https://www.expressjs.com.cn/starter/generator.html

全局安装generator环境
	npm install -g express-generator
```

搭建一个generator服务

```js
express -e 文件名

启动服务
	1、npm start
	2、http://127.0.0.1:3000/
	3、出现express就说明成功了
```

每次修改代码不用重启

```js
将package.json下面node改为nodemon  ===>  前提是安装了nodemon===>npm i -g nodemon
"scripts": {
    "start": "nodemon ./bin/www"
  },
```

子路由模块

```js
app.use('/users', usersRouter);//使用了users子路由模块(usersRouter)，此时配置了路由"/users",里面的usersRouter里面所有的路由都是以/users打头拼接的路径了
```

文件上传必须的请求头设置

```
'Content-Type': 'multipart/form-data'
```

如何实现文件的上传

```js
1、下载包
	npm i formidable

2、使用
	const formidable = require('formidable');

    router.post('/api/upload', (req, res, next) => {
      const form = formidable({ 
        multiples: true,
        // 设置文件保存的路径
        uploadDir: __dirname + '/../public/images',
        // 保持文件后缀
        keepExtensions: true
       });

      form.parse(req, (err, fields, files) => {
        if (err) {
          next(err);
          return;
        }
        // 文件类型的都会保存在files，其他的则保存在fields
        console.log(fields);
        console.log(files);
        res.send('ok')
      });
    });

具体参考
	https://www.npmjs.com/package/formidable
```

cookie

```js
设置cookie
	router.get('/account', function(req, res, next) {
        res.cookie('key', 'value' )  //浏览器关闭就会消失
        res.cookie('name', 'zhansan' ) // 可以设置多个
		res.cookie('key', 'value' , {maxAge :  60*1000}) //1分钟后关闭自动消失
    })

删除cookie
	router.get('/account', function(req, res, next) {
        res.clearCookie('name')  //删除key为name的cookie
    })

获取cookie
	npm i cookie-parser
	var cookieParser = require('cookie-parser')
    app.use(cookieParser())

    app.get('/', function (req, res) {
      // Cookies that have not been signed
      console.log('Cookies: ', req.cookies) //得到cookie

      // Cookies that have been signed
      console.log('Signed Cookies: ', req.signedCookies)
    })
```

token

```

```

jwt

```js
规范化生成token
	使用：
		cnpm i jsonwebtoken
        const jwt = require('jsonwebtoken')
        
        生成token
			//let token = jwt.sign({用户信息对象},加密字符串,{配置对象})

            let token = jwt.sign({'name':'张三'},'woshijia',{ //加密字符串可以随便输
                expiresIn:60 //生命周期，也就是过期时间，单位是秒
            })
			console.log(tokenValue);
		
		校验token
        	//第一个值是token的值，第二个是加密的字符串必须和创建的那个一致
        	jwt.verify(token, 'woshijiami' , (err,data)=>{
              if(err) return console.log(err);
              console.log(data);//包含的信息{ name: '张三', iat: 1683448987, exp: 1683449047 }//iat创建事件，exp过期时间
            })
```

如何创建本地域名

```
1、C:\Windows\System32\drivers\etc\hosts
2、在文件最后输入 
	127.0.0.1     lindalang.com
	此时浏览器输入lindalang.com就会自动跳转到127.0.0.1
```

git如何忽略某个文件夹上传

```
在
.gitignore文件中输入要忽略文件的绝对路径
```

