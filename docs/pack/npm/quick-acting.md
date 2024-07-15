---
sidebar: auto
---

# 快速使用

### 1、npm 版本管理

1. 查看版本

   ```bash
   npm -v
   ```

2. 更新至最新版

   ```bash
   npm install npm@latest -g
   ```

3. 更新只预发布版本

   ```bash
   npm install npm@next -g
   ```

### 2、如何防止权限错误

1. 使用`nvm`进行进行重新安装

### 3、如何安装本地包

1. 使用`npm install <package_name>`进行安装，简写`npm i <package_name> `

   ```bash
   # 安装lodash
   npm i lodash
   ```

### 4、使用`package.json`

1. `package.json`必填项

   - name：包名，必须全部小写字母且没有空格。
   - version：版本号，如"1.0.0"

2. 创建`package.json`的方式

   - 问答式

     ```bash
     npm init
     ```

   - 全部使用默认值

     ```bash
     npm init --yes
     ```

     默认值说明

     ```bash
     {
       "name": "js",  # 当前目录名称
       "version": "1.0.0", # 总是 1.0.0
       "description": "", # 描述
       "main": "index.js", # 总是 index.js
       "scripts": { # 默认情况下创建一个空 test 脚本
         "test": "echo \"Error: no test specified\" && exit 1"
       },
       "keywords": [], # 关键字 默认空[]
       "author": "", # 作者
       "license": "ISC" # 开源协议
     }
     ```

3. 指定依赖关系

   - **dependencies**：生产必须的包，默认安装为生产依赖。

     安装命令：

     ```bash
     npm i lodash -S
     # 或者
     npm i lodash --save
     ```

   - **devDependencies**：仅用于开发测试的包。

     ```bash
     npm i lodash -D
     # 或者
     npm i lodash --save-dev
     ```

### 5、如何更新本地安装的包

[npm updata]()

### 6、如何卸载本地的包

```bash
# 实测此命令不管是开发包，还是生产包都能够卸载，不需要指定--save或--save-dev
npm uninstall lodash
#或者
npm remove lodash
```

### 7、如何安装全局包

```bash
npm i -g lodash
```

### 8、如何更新全局包

1. 更新指定的全局包

   ```bash
   npm update -g nodemon
   ```

2. 更新全局所有包，在指定范围内的包

   ```bash
   npm update -g
   ```

3. 更新全局所有包到 npm 上注册的最新版本

   ```bash
   npm install npm@latest -g
   ```

### 9、如何卸载全局包

```bash
npm uninstall -g nodemon
# 或者
npm remove -g nodemon
```

### 10、如何发布和更新包

[npm login 和 npm publish](https://www.npmjs.cn/getting-started/publishing-npm-packages/)

### 11、如何使用作用域包(@)

创建包的时候只需要将`package.json`中的`name`属性以`@`打头，如下作用域就是`@username`，包名就是`/`后面的`project-name`。

```json
{
  "name": "@username/project-name"
}
```