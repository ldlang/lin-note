---
sidebar: auto
---

# [npm](https://www.npmjs.cn/)

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

### 4、config 配置

1. 设置

   ```bash
   # 语法
   npm config set key value
   # 设置邮箱
   npm config set init-author-email "your-email@example.com"
   
   # 设置镜像
   npm config set registry https://registry.npmjs.org
   ```

2. 读取

   ```bash
   # 读取邮箱
   npm config get init-author-email
   
   # 读取镜像
   npm config set registry
   ```

3. 删除

   ```bash
   # 删除邮箱
   npm config get init-author-email
   
   # 删除镜像
   npm config set registry
   ```

4. 显示所有配置

   ```bash
   npm config list
   
   # 显示所有配置及默认值
   npm config list -l
   
   # 以json的形式显示
   npm config list -l --json
   ```

5. 在编辑器中打开配置文件。使用标志 `--global` 编辑全局配置。

   ```bash
   npm config edit
   ```

### 5、dedupe 平铺，减少重复

```bash
npm dedupe
npm ddp
```

* 平铺之前

  ![image](/npm/ddp-before.png)

* 平铺之后

  ![image](/npm/ddp-after.png)

### 6、docs 打开某个包的文档

可以通过浏览器直接打开这个包的文档。

```bash
npm docs lodash

#或者
npm home lodash
```

### 7、doctor 检查环境

检查你当前npm存在的问题并提供修改建议

```bash
npm doctor
```

![image](/npm/doctor.png)

### 8、init 初始化

* 问答式

  ```bash
  npm init
  ```

* 全部使用默认值

  ```bash
  npm init -y
  #或者
  npm init --yes
  ```

### 9、install-ci-test 安装依赖并执行test

通过`ci`的方式安装依赖，并且执行`script`下的`test`命令

```bash
npm install-ci-test
```

### 10、install-test 安装依赖并执行test

正常的`install`方式，并执行`script`的`test`命令

```bash
npm install-test
```

### 11、link 本地包连接、调试

在一个包里面使用`npm link`，则会将这个包添加为一个本地的包，包名就是`package.json`中的`name`属性，此时这个包在你本地的任何项目中，通过`npm link 包名`就可以将这个包下载到当前这个项目中。

1. 将一个包添加为本地包

   在包中执行

   ```bash
   npm link
   ```

2. 添加本地包到项目中

   ```bash
   npm link 本地包名
   ```

3. 移除当前项目的本地包

   ```bash
   npm unlink 本地包名
   ```

4. 移除全局的本地包

   ```bash
   npm unlink -g 本地包名
   ```

5. 查看所有的本地包

   ```bash
   npm ls -g --depth=0 --link
   ```

### 11、outdated 检查过时的软件包

检查过时的软件包，并显示最新的软件包版本。

```bash
npm outdated
```

![image](/npm/outdated.png)

### 12、repo 打开包的源码仓库

```bash
npm repo lodash
```

### 13、uninstall 卸载包

```bash
npm uninstall lodash
```

### 14、update 更新版本

* 不进行破坏性的更新包，只更新`package.json`指定范围内的包.

  ```bash
  # 更新指定包
  npm update lodash
  
  # 更新全局包
  npm update -g
  ```

* 破坏性的更新包，更新到`npm`注册表上的最新版本

  ```bash
  # 更新指定包
  npm update lodash --latest
  
  # 更新全局包
  npm update -g --latest
  ```

1. `^` (Caret)

   `^` 符号表示兼容版本，允许更新到不引入破坏性更改的版本。具体来说，它允许更新到同一主版本号下的最新版本。

   * 例如，`^1.1.1` 允许更新到 `1.x.x`，但不允许更新到 `2.0.0`。
   * `^0.1.1` 允许更新到 `0.1.x`，但不允许更新到 `0.2.0`。
   * `^0.0.1` 仅允许更新到 `0.0.1`，因为在 `0.y.z` 版本中，任何次版本和修订版本的更新都可能引入破坏性更改。

2.  `~` (Tilde)

   `~` 符号表示次版本号兼容，允许更新到同一主版本和次版本号下的最新修订版本。

   * 例如，`~1.1.1` 允许更新到 `1.1.x`，但不允许更新到 `1.2.0`。
   * `~0.1.1` 允许更新到 `0.1.x`，但不允许更新到 `0.2.0`。

3. `*` (Wildcard)

   `*` 符号表示任何版本，可以更新到任何版本。

4.  `x` (Wildcard)

   `x` 符号表示任意版本号的部分。

   - 例如，`1.1.x` 允许更新到 `1.1.x` 的任何版本。
   - `1.x.x` 允许更新到 `1.x.x` 的任何版本。

5. 无符号

   指定一个确切的版本号，不允许任何更新。

   - 例如，`1.1.1` 只允许使用 `1.1.1` 版本。

6. `-` (Range)

   指定一个版本范围。

   - 例如，`1.1.1 - 1.2.0` 允许使用 `>=1.1.1` 且 `<=1.2.0` 的版本。

7. `>` (Greater than)

   指定一个大于某个版本的范围。

   - 例如，`>1.1.1` 允许使用任何大于 `1.1.1` 的版本。

8.  `<` (Less than)

   指定一个小于某个版本的范围。

   - 例如，`<1.1.1` 允许使用任何小于 `1.1.1` 的版本。

9.  `>=` (Greater than or equal to)

   指定一个大于或等于某个版本的范围。

   - 例如，`>=1.1.1` 允许使用 `1.1.1` 及其以上的任何版本。

10.  `<=` (Less than or equal to)

    指定一个小于或等于某个版本的范围。

    - 例如，`<=1.1.1` 允许使用 `1.1.1` 及其以下的任何版本。

11.  `||` (Logical OR)

    指定多个版本范围。

    - 例如，`1.1.1 || 1.2.0` 允许使用 `1.1.1` 或 `1.2.0` 版本。

### 15、 ls 列出所有安装的包

```bash
npm ls
```




