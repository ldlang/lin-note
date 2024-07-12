---
sidebar: auto
---

# npm

## 快速使用

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

## 命令行（常用命令）

npm 10版本支持的所有命令
![image](/npm/npm-help.png)

### 1、audit 安全检测

1. 扫描所有包，并生成安全报告。

   ```bash
   npm audit
   ```

2. 扫描并尝试修复包中存在的安全漏洞，但不会执行破坏性的更新，也就是只会更新指定范围内的包。

   ```bash
   npm audit fix
   ```

3. 强制修复所有漏洞，并且进行破坏性的更新。

   ```bash
   npm audit fix --force
   ```

4. JSON 格式输出漏洞报告

   ```bash
   npm audit --json
   ```

5. 跳过更新`devDependencies`

   ```bash
   npm audit fix --only=prod
   ```

### 2、cache 缓存包

npm缓存严格来说是缓存:不应该依赖它作为包数据的持久和可靠的数据存储。NPM不保证之前缓存的数据稍后仍然可用，并且会自动删除损坏的内容。缓存做出的主要保证是，如果它确实返回数据，则该数据将与插入的数据完全相同。

1. 缓存指定包

   ```bash
   npm cache add lodash
   ```

2. 清除指定包的缓存

   ```bash
   npm cache clean lodash
   ```

3. 清除所有缓存

   ```bash
   npm cache clean --force
   ```

4. 验证缓存的完整性，并清理不需要的文件

   ```bash
   npm cache verify
   ```


### 3、ci 完全按照packgae.json安装

功能类似于`npm i`，但是必须要有`package-lock.json`和`package.json`两个文件，安装的依赖也会严格按照`package-lock.json`来进行安装，不会出现包不一致的请求，他会将现有的`node_modules`中的文件删除，并进行重新安装，并且比常规的`npm i`安装的速度更快，所以经常用于项目部署。

* `npm i`和`npm ci`的区别
  1. 项目必须具有现有的 `package-lock.json` 或 `npm-shrinkwrap.json` 
  2. 如果包锁中的依赖项与 中的 `package.json` 依赖项不匹配， `npm ci` 则将退出并显示错误，而不是更新包锁。
  3. `npm ci` 一次只能安装整个项目：此命令无法添加单个依赖项。
  4. 如果 `node_modules` 已存在，则在开始安装之前 `npm ci` 会自动将其删除。
  5. 它永远不会写入 `package.json` 或任何软件包锁：安装基本上是冻结的。





