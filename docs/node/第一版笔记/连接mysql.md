1. 在express中安装mysql

   ```js
   npm i mysql
   ```

2. 创建一个js文件，用于连接mysql

   ```js
   const mysql = require('mysql')
   
   const db = mysql.createConnection({
       host: "localhost", // 地址
       port:  3306 ,   //端口号
       user: "root", // 账户
       password: "root", // 密码
       database: "express", // 连接的表
   });
   
   // 封装查询数据库
   const dbUtils = (sql) => {
     return new Promise((resolve, reject) => {
       db.query(sql, (err, res) => {  // query规定查询字符串的关键字
         if (res) {
           resolve(res)
         } else {
           reject(err)
         }
       })
     })
   }
   
   module.exports = dbUtils  // 导出连接mysql的方法
   ```

3. 使用

   ```js
   在需要查询数据库的地方导入数据库连接的方法
   
       const express = require('express');
       const router = express.Router();
       const dbUtils = require('../utils/db') // 导入连接的方法
   
       router.post('/user',async (req, res) => {
         let bodyData = req.body
         let sql = `INSERT INTO user ( name,sex,age ) values ('${bodyData.name}','${bodyData.sex}',${bodyData.age})`
         let data = await dbUtils(sql)
         res.send('ok')
       });
   
       module.exports = router;
   ```
   
### update 语句失败成功的判断

```js
const sql = `update user set nickname = '${nickname}', email = '${email}' where id = ${id}`
db.query(sql, (err, result)=>{
    if (result.affectedRows  === 1) return res.send({code: 200, data: result[0]})
})

result.affectedRows 更新语句，如果只影响了一行那么说明更新成功，否则就是更新失败
```

