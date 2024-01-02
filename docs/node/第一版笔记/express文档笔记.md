# express 官方文档笔记

```
全局安装generator环境
	npm install -g express-generator

搭建generator服务
	express -e 文件名
```

### 路由

1. 路由方法

   ```js
   let express = require('express');
   let router = express.Router();
   
   创建一个post和get路由方法，支持多种 method
       router.post('/', function (req, res, next) {
         res.send('成功')
       });
   
   	router.get('/', function (req, res, next) {
         res.send('成功')
       });
   
   特殊 all 路由      
   	// 只要路由路径匹配成功了，不管是get，post还是put都能响应
   	router.all('/', function (req, res, next) {
         res.send('成功')
       });
   ```

2. 路由路径

   ```js
   路径支持多种写法，正则、字符串等等都可以
   	// 字符串写法
       router.get('/index', function (req, res, next) {
           res.send('成功')
       });
   	// 正则写法，匹配任何带有“a”的请求
   	app.get(/a/, function (req, res) {
         res.send('/a/')
       })
   
   "/index"  就是路由的路径,只要发过来的请求匹配了这和路径，就能成功进入这个方法里面
   ```

3. 路径参数

   ```js
   指定路由的参数
   	// 带有 : 的路径其实就是路径参数
       app.get('/users/:userId/books/:bookId', function (req, res) {
         res.send(req.params)
       })
   
   	注意：
       	1.获取路径参数通过req里面的params
           2.其中:userId获取到的值就赋值给users，:bookId就赋值给books，组成一个对象
           
   带有 - 或 . 的参数
   	router.post('/user/:id-:name', function (req, res, next) {
         res.send(req.params)
       });
   	// 请求方式
   	axios.post('/api/user/15-tom')  //  响应结果 {"id":"15","age":"tom"}
   
   	router.post('/user/:id-:name', function (req, res, next) {
         res.send(req.params)
       });
   	// 请求方式
   	axios.post('/api/user/15.tom') // 响应结果 {"id":"15","age":"tom"}
   ```

4.  路线处理程序

   ```js
   同一个路由由多个函数共同完成逻辑，但路由上一定要接收一个next参数，路由才能被放行到下一个函数里面
       router.get('/user/b', (req, res, next)=> {
         console.log('我被执行了')
         next()
       }, (req, res)=> {
         res.send('我也被执行了')
       })
   
   也可以是一组函数
       let cb1 = (req, res, next) => next() // 放行
       let cb2 = (req, res) => res.send('我是c函数')
       router.get('/user', [cb1, cb2])
   
   或者
   	let cb0 = (req, res, next)=> next()
       let cb1 = (req, res, next) => next()
       router.get('/user', [cb0, cb1], (req, res) => {
         res.send('我是响应结果')
       })
   ```

5. route()

   ```js
   同一个路由支持不同的请求方式,通过处理函数，请求方式不同，响应结果也不同
       router.route('/user')
         .get(function (req, res) {
           res.send('get')
         })
         .post(function (req, res) {
           res.send('post')
         })
         .put(function (req, res) {
           res.send('put')
         })
   ```

6. 路由分模块

   ```js
   创建一个users.js路由模块，写入一下内容
   	let express = require('express');
       let router = express.Router();
   
       router.get('/user',(req, res)=> {
           res.send('get')
       })
   
       module.exports = router; // 暴露出去
   
   在主路由中
   	let usersRouter = require('./routes/users');//	引入路由
   	app.use('/users', usersRouter)  // 挂载路由
   ```


### 中间件

1. 创建一个中间件

   ```js
   let express = require('express');
   let router = express.Router();
   
   // 创建中间件
   let middleware = (req, res, next)=> {  
     console.log('middleware')
     next()
   }
   // 挂载中间件
   router.use(middleware)
   
   注意：
   	1.一旦挂载了这个中间件，那么所有的路由都会先经过这个中间件，然后才会到达路由上去
       2.中间件可以做很多需要统一处理的事，例如统一的校验token、cookie
   ```

2. 使用中间件

   * **应用层中间件**

     应用层中间件，就是挂载在app里的中间件，所有的路由，包括子路由都会经过符合条件的应用层中间件

     ```js
     let middleware = (req, res, next)=>{
         console.log('走了')
         next()
     }
     
     app.use(middleware) // 挂载中间件
     ```

     指定路由中间件， 只要是路由上'/user'的都会经过这个中间件

     ```js
     app.use('/user', (req, res, next) => {  // 创建并挂载user中间件
         console.log('user执行了');
         next()
     })
     ```

     带有子栈的中间件可以通过 next('route') 跳过嵌套的中间件

     ```js
     app.get('/user/:id',  (req, res, next) => {
         if (req.params.id=='0') next('route') //如果id为0，那么中间件的第二个方法将不会执行
         else next()
     }, (req, res, next) => {
         res.send('第二个方法')
     })
     
     app.get('/user/:id', (req, res) => {
         res.send('special')
     })
     ```

     为一个路由单独指定中间件，也就是多个方法处理同一个路由

     ```js
     function middleware1(req, res, next) {
       console.log('middleware1');
       next();
     }
     
     function middleware2(req, res, next) {
       console.log('middleware2');
       next();
     }
     
     // 路由处理程序
     app.get('/user', [middleware1, middleware2], (req, res)=> {
       res.send('Hello World!');
     });
     ```

   * **路由中间件**

     ```js
     就是挂载在路由模块上的中间件，也就是挂载在express.Router()，只有这个模块的路由才能触发这个中间件
     
     使用方式和应用层中间件一致
     ```

   * **错误处理中间件**

     ```js
     router.get('/user', (req, res, next)=> {
       const error = new Error('Something went wrong');
       next(error);
     });
     
     // 错误中间件
     router.use((err, req, res, next)=> {
       // 进行错误处理
       console.error(err);
       res.status(500).send('失败了');
     });
     
     和普通中间的区别就是多了一个err参数
     ```

   * **内置中间件**

     ```js
     express.static  		提供静态资产，如HTML文件、图像等
     express.json 			用JSON有效负载解析传入的请求
     express.urlencoded 		用URL编码的有效负载解析传入的请求
     ```

   * **第三方中间件使用**

     ```js
     1.安装 
     	npm install cookie-parser
     2.引入
     	var cookieParser = require('cookie-parser')
     3.挂载
     	app.use(cookieParser())
     ```

### 覆盖原有api

1. 例：重写send方法

   ```js
   // 重写Express的send方法
   app.response.send = function (body) {
     this.charset = 'utf-8'; // 设置响应的字符编码
     this.setHeader('Content-Type', 'text/plain'); // 设置响应的Content-Type
     this.end(`自定义响应：${body}`); // 发送自定义响应
   };
   
   // 路由处理程序
   app.get('/user', (req, res) => {
     res.send('Hello World!'); // 使用重写后的send方法
   });
   ```

### 内置api

1. #### app下的api

   * **locals **  局部变量

     ```js
     定义变量
     	app.locals.name = '张三'
     
     使用变量
     	app.locals.name
     	
     	注意：
         	1.这个变量能在app里面任何一个路由里面使用，但是在子路由中无法使用
             2.子路由也可以定义自己的局部变量，但是要引入app
             	例：
                 	var express = require('express');
                     var router = express.Router();
     				let app = express()
                     app.locals.name = '张三'
     ```

   * **mountpath **  安装子应用

     ```js
     const subApp = express();
     subApp.get('/', (req, res) => {
       res.send('This is the sub-app');
     });
     
     // 将子应用程序挂载到主应用程序的指定路径上
     app.use('/sub', subApp);  // /sub就是这个子应用的根路径
     
     console.log(subApp.mountpath)// 输出: "/sub",为子应用的根路径
     ```

   * **on**    

     这mount当子应用程序装载到父应用程序时，在子应用程序上触发事件。父应用程序被传递给回调函数。有点像生命周期的样子

     ```javascript
     var admin = express()
     
     admin.on('mount', (parent)=> {
       console.log('Admin Mounted')
       console.log(parent)
     })
     
     admin.get('/', (req, res)=> {
       res.send('Admin Homepage')
     })
     
     app.use('/admin', admin)  // 挂载完毕了就会触发on的回调函数
     ```

   * **all**   匹配相同路径的所有请求方法

     ```js
     只要路由的路径是'/user', 无论是使用GET、POST、PUT、DELETE还是任何其他HTTP请求方法,都能匹配。
         app.all('/user',(req,res)=>{
             res.send('成功了')
         })
     
     匹配任意方式的任意路由
         app.all('*', (req, res) => {
           res.send('成功了all')
         })
     ```

   * **disable**             禁用特定的应用程序设置

     **disabled**		  检查某应用程序是否被禁用

     **enable** 			启用特定的应用程序设置

     **enabled**		 指定的设置是否被启用

     ```js
     app.disable('etag'); // 禁用ETag设置
     app.disabled('etag'); // 检查ETag是否被禁用
     app.enable('trust proxy'); // 启用代理信任设置
     app.enabled('trust proxy'); // 代理信任是否被启用
     ```

   * **listen**

     ```js
     启动服务器并监听指定的路径和端口
     
     app.listen(3000, 'localhost', () => {
       const { address, port } = server.address();
       console.log(`服务器已启动，地址为 http://${address}:${port}`);
     });
     ```

   *  **method** 方法

     ```js
     Express支持以下与同名HTTP方法相对应的路由方法:
     
     checkout	copy	delete	get	head	lock	merge	mkactivity	mkcol	move
     m-search	notify	options	patch	post	purge	put	report	search	subscribe
     trace	unlock	unsubscribe
     ```

   * **path**

     ```js
     返回一个应用程序的根路径
     	var app = express()
         var blog = express()
         var blogAdmin = express()
     
         app.use('/blog', blog)
         blog.use('/admin', blogAdmin)
     
         console.dir(app.path()) // ''
         console.dir(blog.path()) // '/blog'
         console.dir(blogAdmin.path()) // '/blog/admin'
     ```

   * **render**

     ```js
     通过返回视图的呈现HTMLcallback功能。它接受一个可选参数，该参数是一个包含视图局部变量的对象。这就像res.render()，只是它不能自己将呈现的视图发送给客户端。
         app.render('email', function (err, html) {
           // ...
         })
     ```

   * **route**  

     ```js
     对同一个路径，书写不同的应用请求方法，以提高代码的可读性和维护性，不需要将同一个路径书写为很多个路由
     
     app.route('/users')
       .get((req, res) => {
         res.send('获取用户');
       })
       .post((req, res) => {
         res.send('创建用户');
       })
       .put((req, res) => {
         res.send('更新用户');
       });
     ```

   * **set**

     ```js
     设置应用程序的配置，具体配置参考官网
         // 设置视图引擎为EJS
         app.set('view engine', 'ejs');
     
         // 设置应用程序的端口号
         app.set('port', process.env.PORT || 3000);
     ```

   * **use**  使用中间件

2. #### request的api  —— 路由回调函数的第一个参数

   * **baseUrl**

     ```js
     返回当前路由的根路径
         // 在app上挂在的根路径
         app.use('/index', indexRouter);
     	// 在子路中
         router.get('/users',(req, res) => {
             consloe.log(req.baseUrl) // '/index' 得到的是这个路由的根路径
             res.send(req.baseUrl);  
         })
     
     ```

   * **body** 请求体

     ```js
     通过axios请求
     	 axios.post('/api/index/users', {name: '张三'}) // 请求体为{name: '张三'}
     
     	router.post('/users', (req, res) => {
           console.log(req.body);   // 请求体得到的结果 {name: '张三'}
           res.send(req.baseUrl);
         })
     ```

   * **cookie**

     ```js
     查询当前请求的cookie
     	router.post('/users', (req, res) => {
           console.log(req.cookies)  // 得到当前请求的cookie，没有则为一个空对象
           res.send(req.body);
         })
     ```

   * **fresh**

   * **hostname**   主机名
   
     ```js
     当这个路由被请求，就会得到请求的主机名, 例 www.baidu.com
     router.post('/users', (req, res) => {
       console.dir(req.hostname)  // 127.0.0.1
       res.send(req.hostname);
     })
     ```
   
   * **ip**
   
     ```js
     得到当前请求的IP地址
     	router.post('/users', (req, res) => {
           console.dir(req.ip)  // 127.0.0.1
           res.send(req.ip);
         })
     ```
   
   * **ips**
   
     ```js
     当trust proxy环境不评估为false中指定的IP地址数组X-Forwarded-For请求标题。否则，它包含一个空数组。该报头可以由客户端或代理设置。
     例如，如果X-Forwarded-For是client, proxy1, proxy2, req.ips会是["client", "proxy1", "proxy2"]，在哪里proxy2是最下游的地方。
     ```
   
   * **method** 请求的方法
   
     ```js
     router.post('/users', (req, res) => {
       console.dir(req.method)  // post
       res.send(req.method);
     })
     ```
   
   * **originalUrl**    原始url
   
     ```js
     就是没有结果解析的，客户端发过来的请求路径是什么样子，他得到就是什么样子
     
       axios.post('/api/index/users?15')
     
         router.post('/users', (req, res) => {
           console.log(req.originalUrl)  	// '/index/users?15'
           console.log(req.baseUrl); 		// '/index'
           console.log(req.path); 			// '/users'
           res.send(req.originalUrl);
         })
     ```
   
   * **params** 请求参数
   
     ```js
     路径上的请求参数，客户端发来的和路由上接收的 组合成为一个对象
     	axios.post('/api/index/users/15')
     
     	router.post('/users/:id', (req, res) => {
           console.log(req.params)			// 得到的结果 { id: '15' }
           res.send(req.originalUrl);
         })
     ```
   
   * **path**   包含请求URL的路径部分
   
     ```js
     当前路由书写的路由路径
     	axios.post('/api/index/users/15')
     
     	router.post('/users/:id', (req, res) => {
           console.log(req.path) 		// 得到的结果/users/15
           res.send(req.path);
         })
     ```
   
   * **protocol**  请求协议 http/ https
   
     ```js
     当前请求的协议是什么
         router.post('/users/:id', (req, res) => {
           console.log(req.protocol)  // http
           res.send(req.protocol);
         })
     ```
   
   * **query**   路径查询参数
   
     ```js
     得到路径上的查询字符串，组合的对象
     	axios.post('/api/index/users?name=15&sex=男')
     
     	router.post('/users', (req, res) => {
           console.log(req.query)		// 得到的结果  { name: '15', sex: '男' }
           res.send(req.query);
         })
     ```
   
   * **res**
   
     ```js
     保存对响应对象与此请求对象相关的
     ```
   
   * **route**
   
     ```js
     保存着当前路由的信息，属性提供了有关当前路由的信息，包括路由的路径、HTTP方法和处理程序等
     ```
   
   * **secure**
   
     ```js
     查询当前请求是否是安全的，防护布尔值   
     	等同于 protocol === "https"
     ```
   
   * **accepts**
   
     ```js
     用于检查客户端请求中的Accept头部信息，以确定客户端是否接受HTML响应格式。
     
     eq.accepts('html')将检查客户端请求的Accept头部信息，如果其中包含text/html或/，则返回html，否则返回false。
     
     app.get('/', function(req, res) {
       if (req.accepts('html')) {
         // 客户端接受HTML格式的响应
         res.send('<h1>Hello, World!</h1>');
       } else {
         // 客户端不接受HTML格式的响应
         res.status(406).send('Not Acceptable');
       }
     });
     ```
   
   * **get**
   
     ```js
     获取请求头的字段
     
     router.post('/users', (req, res) => {
       console.log(req.get('content-Type'))  // "text/plain"
       res.send(req.path);
     })
     ```
   
   * **is**
   
     ```js
     用于检查请求的Content-Type头部字段是否与指定的MIME类型匹配
     
     app.post('/upload', function(req, res) {
       if (req.is('multipart/form-data')) {
         // 请求的Content-Type头部字段为multipart/form-data
         // 处理上传文件的逻辑
         res.send('File uploaded successfully.');
       } else {
         // 请求的Content-Type头部字段不是multipart/form-data
         res.status(400).send('Bad Request');
       }
     });
     ```
   
3. #### response的api  —— 路由回调函数的第二个参数

   * **headersSent**

     ```js
     用于检查响应头部是否已经被发送到客户端，返回布尔值
     
     router.post('/users', (req, res) => {
       console.log(res.headersSent) // false
       res.send('OK')
       console.log(res.headersSent) // true
     })
     ```

   * **locals**  

     ```js
     局部变量，类似于app上的locals
     ```

   * **append**  

     ```js
     设置响应头，如果响应头的key已经存在，那么覆盖他的value，如果不存在就新增一个
     
     router.post('/users', (req, res) => {
       res.append('Warning', 'response header')
       res.send('OK')
     }) 
     ```

   * **attachment**

     ```js
     用于将响应设置为以附件形式下载
     	res.attachment([filename])
     
     	其中，filename是要在下载时显示的文件名。如果提供了filename参数，Express将自动设置		Content-Disposition头部字段，指示浏览器以附件形式下载响应内容。
     ```

   * **cookie**

     ```js
     设置cookie，以键值对的方式
         router.get('/download', function(req, res) {
           res.cookie('cart', 'buy')  // 设置cookie
           res.send('请求成功')
         });
     
     还有第三个参数是一个配置对象，可以设置cookie的一些属性
     ```

   * **clearCookie** 

     ```js
     清除指定key的cookie
     
     res.clearCookie('cart')
     ```

   * **download**

     ```js
     文件下载，接收三个参数，第一个为文件路径，第二个为可选参数，指定下载文件的名字，第三个为可选，错误的回调函数。
     router.get('/user', (req, res) => {
       res.download(__dirname + '/../public/images/down.png', 'down.png', (err) => {
         console.log(err)
       })
     });
     ```

   * **end**

     ```js
     结束响应，之后的逻辑都不会响应到客户端
         router.get('/user', (req, res) => {
           res.end()
           res.send('ok') // 被end结束了，不会响应到服务端
         });
     ```

   * **format**

     ```js
    根据请求头上的Accept，可以实现响应不同的结果
     
     	axios.get('/user', { headers: { 'Accept' : 'application/json' } })
     
     	router.get('/user', function(req, res, next) {
             res.format({
                 'text/plain': function () {
                     res.send('hey')
                 },
     
                 'application/json': function () {
                     res.send({ message: 'hey' })   // 匹配到这个，响应对应的内容
                 },
     
                 default: function () {
                     // log the request and respond with 406
                     res.status(406).send('Not Acceptable')
                 }
             })
         });
     
     简写形式：
     	res.format({
             text: function () {
                 res.send('hey')
             },
     
             html: function () {
                 res.send('<p>hey</p>')
             },
     
             json: function () {
                 res.send({ message: 'hey' })
             }
         })
     
     Accept 是一个 HTTP 请求头部字段，用于告知服务器客户端能够接受的响应内容类型。客户端可以通过设置 Accept 头部来表明它们所接受的媒体类型或内容协商的首选项。
     Accept 头部字段的值通常是一个逗号分隔的列表，包含了 MIME 类型或其他表示内容类型的标识符。每个标识符可以包含一个可选的参数，用来指定权重或其他质量因素。
     ```
   
   * **get 和 set**
   
     ```js
     set：设置响应头
     get：获取通过set设置的响应头指定key的内容
         router.get('/user', function(req, res) {
           res.set('Content-Type', 'text/plain');  // 设置响应头
           const contentType = res.get('Content-Type');   // 获取响应头的value
           res.send(`Content-Type 的值为 ${contentType}`);
         });
     ```
   
   * **json**
   
     ```js
     响应json内容
         router.get('/user', function(req, res) {
           res.json({user:'张三'});
         });
   ```
     
   * **links**
   
     ```js
     res.links 是一个 Express 框架中用于设置响应头部中的链接头部字段的方法。链接头部字段用于指定与当前资源相关的链接.
         router.get('/user', function(req, res) {
         res.links({
           next: 'http://api.example.com/users?page=2',
           last: 'http://api.example.com/users?page=5'
         })
           res.json({user:'张三'});
         });
     
     ```
   
   * **location**
   
     ```js
     res.location 方法设置重定向的目标 URL 为 'http://example.com'。然后，我们使用 res.status 方法设置响应的状态码为 302（临时重定向）。最后，我们使用 res.send 方法发送 'Redirecting...' 作为响应内容。
     
     router.get('/user', function(req, res) {
       res.location('http://example.com');
       res.status(302).send('Redirecting...');
     });
     ```
   
   * **redirect**
   
     ```js
     路由重定向，当访问'/user'这个路由的时候，会将路由重定向到'/admin'这个路由上，最终客户端会发起两次请求。
     
         router.get('/user', function (req, res) {
           res.redirect(301, '/admin') // 重定向到'/admin'，会增加一个请求
           // 301为可选参数，意为临时重定向
         });
     ```
   
   * **render**
   
     ```js
     模板引擎根据视图模板和传递的数据渲染最终的 HTML。这个 HTML 响应将被发送回客户端。一般配合ejs来使用
     ```
   
   * **send**
   
     ```js
     响应客户端的内容
     	res.send(Buffer.from('whoop'))
         res.send({ some: 'json' })
         res.send('<p>some html</p>')
         res.status(404).send('Sorry, we cannot find that!')
         res.status(500).send({ error: 'something blew up' })
     ```
   
   * **sendFile**
   
     ```js
     发送指定文件，在给定的 path 传输文件。根据文件名的扩展名设置 Content-Type 响应 HTTP 标头字段。除非在选项对象中设置了 root 选项，否则 path 必须是文件的绝对路径。
     
     router.get('/user', (req, res)=> {
       res.sendFile(__dirname + '/../public/images/down.png')
       res.send('ok')
     });
     ```
   
   * **sendStatus 和 status**
   
     ```js
     设置响应状态码
     sendStatus: 终止响应，并且自动发送对应状态的的响应结果
     status：只会修改状态码，并不会终止响应，该响应什么内容，还是响应什么内容
         router.get('/user', function (req, res) {
             res.sendStatus(200)
             res.status(403)
             res.send('ok')
         });	
     ```
   
   * **type**
   
     ```js
     将 Content-Type HTTP 标头设置为由指定 type 确定的 MIME 类型。如果 type 包含 "/" 字符，则它将 Content-Type 设置为 type 的确切值，否则假定它是文件扩展名并使用 express.static.mime.lookup() 方法在映射中查找 MIME 类型
     
     res.type('.html') // => 'text/html'
     res.type('html') // => 'text/html'
     ```
