---
sidebar: auto
---

# [npm](https://www.npmjs.cn/)

## 一、快速使用

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

## 二、命令行（常用命令）

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

2. `~` (Tilde)

   `~` 符号表示次版本号兼容，允许更新到同一主版本和次版本号下的最新修订版本。

   * 例如，`~1.1.1` 允许更新到 `1.1.x`，但不允许更新到 `1.2.0`。
   * `~0.1.1` 允许更新到 `0.1.x`，但不允许更新到 `0.2.0`。

3. `*` (Wildcard)

   `*` 符号表示任何版本，可以更新到任何版本。

4. `x` (Wildcard)

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

8. `<` (Less than)

   指定一个小于某个版本的范围。

   * 例如，`<1.1.1` 允许使用任何小于 `1.1.1` 的版本。

9. `<`

   指定一个小于某个版本的范围。

   - 例如，`<1.1.1` 允许使用任何小于 `1.1.1` 的版本。

10. `>=` (Greater than or equal to)

    指定一个大于或等于某个版本的范围。

    * 例如，`>=1.1.1` 允许使用 `1.1.1` 及其以上的任何版本。

11. `<=` 指定一个小于或等于某个版本的范围。
    
    * 例如，`<=1.1.1` 允许使用 `1.1.1` 及其以下的任何版本。
11.  `||` 指定多个版本范围。
     
     * 例如，`1.1.1 || 1.2.0` 允许使用 `1.1.1` 或 `1.2.0` 版本。
### 15、 ls 列出所有安装的包

```bash
npm ls
```

## 三、package.json配置说明

### 1、name 包名

包的命名，如果要安装这个包，就是通过`npm i 包名`来安装。

### 2、version 版本号

![image](/npm/version.png)

一般版本号有三部分组成：

1. **主版本号**：通常在涉及重大功能更新，API不向下兼容时才会进行升级，产生了破坏性变更时会更新此版本号。
2. **次版本号**：在引入了新功能,但并未产生破坏性变更，依然向下兼容时更新此版本号。
3. **修订号**：修复了一些问题，通常在发布向下兼容的问题修复时更新。

查看包的版本信息

* 查看vue包的最新版本

  ```bash
  npm view vue version
  ```

* 查看vue的所有版本

  ```bash
  npm view vue versions
  ```

### 3、description 描述信息

包的描述信息，如果包发布到`npm`上，那么包名下面的就是描述信息。

### 4、keywords 关键字

用于在npm官网删搜索匹配。

### 5、repository 项目仓库地址

项目的仓库地址，一般是github地址。

### 6、homepage 项目文档

一般是项目的文档首页，或者项目的官网，也可能是项目的github地址。

### 7、bugs 问题提交地址

用于项目问题的提交地址，一般是项目github的`issues`地址。

### 8、license 开源许可证

ISC、BSD、MIT、Apache等

### 9、author 作者

### 10、files 包中包含的文件

指定npm包发布时包含的文件，如果不指定，发布包的时候只会包含`package.json`，`license`，`README` 和`main` 字段里指定的文件。

```json
"files": [
    "index.js",
    "index.mjs",
    "dist",
    "compiler-sfc",
    "server-renderer",
    "jsx-runtime",
    "jsx.d.ts"
],
```

### 11、type 模块化的方式

如果不指定则默认为`CommonJs`的方式，也可以指定为`EsModule`的方式。也可以通过文件后缀名来确定模块方式，如果是`EsModule`一般后缀名为`.mjs`，`CommonJs`的后缀名为`.cjs`

```json
"type": "module" // EsModule
```

### 12、 mian 包的入口文件

如果没有指定，则使用根目录的`index.js`作为入口文件。在一个项目中引入一个包，实际上就是引入这个包`main`中指定的入口文件。

如引入axios

* axios中的`main`指定的文件

  ```json
  "main": "index.js",
  ```

* 在项目中导入axios

  ```js
  // 实际上就是引入了axios包中的index.js文件
  import axios from axios
  ```

### 13、 brower web端的入口文件

`main`指定的入口文件在`web`端和`node`端都能使用，如果只想在`web`端使用，那么就在`brower`指定。

### 14、 module ES模块的入口

### 15、exports 优先级最高的导出

如果包中包含了exports的导出，那么他的优先级是最高的，也可以理解为`mian`中导出失效了。

exports可以分别指定`commonJs`和`ES`模块的导出，也可以指定``browser`和`node`模块。

```json
"exports": {
    ".": {
        "import": "./dist/index.js",
        "node": "./dist/index.node.js",
        "require": "./dist/index.js",
        "types": "./types/index.d.ts",
        "default": "./dist/index.js"
    },
},
// 或者
"exports": {
    "import": "./dist/index.js",
    "require": "./dist/index.js"
},
```

最好把`import`等放在一个`.`的下面，这样就可以使用`exports`来导出一些其他的文件，此时只需要使用`impurt 包名/style`就可以导入`./dist/style.css`。

```json
"exports": {
    ".": {
        "import": "./dist/index.js",
        "node": "./dist/index.node.js",
        "require": "./dist/index.js",
        "types": "./types/index.d.ts",
        "default": "./dist/index.js"
    },
    "./style": "./dist/style.css"
},
```

### 16、 workspaces 多包管理

在`Monorepo`模式下，一个包中同时管理了多个包，那么根目录下的`workspaces`就会复指定多个包的文件。

如包含了packages，example，docs三个包，packages下又包含了很多个包，此时的根目录下的`workspaces`就会是这个样子

```json
"workspaces": [
    "packages/*",
    "example",
    "docs"
],
```

### 17、config

`config` 字段用于设置 `script` 字段里的脚本运行时的参数,例如设置 `prot` 为3000

```json
"config": {
  "port": "8080"
}
```

此时就可以通过`process.env.npm_package_config_port`访问到

### 18、scripts 脚本配置

在`scripts`的配置的命令可以通过使用`npm run 命令`来执行。特殊的如`start`、`test`和`stop`可以省略`run`。当你在 `package.json` 中定义了 `pre<script>` 和 `post<script>` 脚本时，运行 `npm run <script>` 会依次执行 `pre<script>`、`<script>` 和 `post<script>`。

如果配置了以下命令，那么执行`npm run build`的时候就会依次执行`prebuild`、`build`、`postbuild`

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "build": "node src/index.js",
    "prebuild": "node scripts/clean.js",
    "postbuild": "node scripts/compress.js"
  }
}
```

### 19、 dependencies 生产依赖

```bash
npm i lodash -S
npm i lodash --save
```

### 20、devDependencies 开发依赖

```bash
npm i lodash -D
npm i lodash --save-dev
```

### 21、peerDependencies 同伴依赖

假如你开发一个插件，并且这个插件强依赖`vue`的2.17.0版本才能运行，那么你的`package.json`中就会有下面的配置，别人下载使用你的插件的时候就会提醒他安装`vue`，但是使用`npm i`的时候不会自动下载`peerDependencies`中的依赖。

```json
"peerDependencies": {
	"vue": "2.17.0"
},
```

### 22、optionalDependencies 可选依赖

里面的依赖装不装都可以，对项目的正常运行没有什么影响。

```bash
npm install lodash -O
npm install lodash --save-optional
```

### 23、peerDependenciesMeta 可选同伴依赖

### 24、bundleDependencies 打包依赖

`bundleDependencies`中的依赖，在使用`npm pack`和`npm publish`的时候会将里面指定的包一同带上。

### 25、overrides 修改依赖的依赖

替换所有依赖

```json
"overrides": {
    "lodash": "1.1.0"
}
```

替换指定依赖的依赖

```json
"overrides": {
    "axios": {
        "lodash": "1.1.0"
    }
}
```

### 26、private 是否为私有包

`true`则为私有包

```json
"private": true 
```

### 27、publishConfig 发布包配置

指定`npm publish`时的配置，配置发布包时发布到阿里云上

```json
"publishConfig": {
    "registry": "https://packages.aliyun.com"
},
```

### 28、engines 指定版本

`engines` 可以帮助你确保用户在正确的环境中运行你的项目。通过指定兼容的 Node.js 和其他运行时版本，你可以避免由于版本不兼容而导致的问题，并提高项目的稳定性和可靠性。

```json
{
  "engines": {
    "node": ">=14.0.0",
    "npm": ">=6.0.0",
    "yarn": ">=1.22.0"
  }
}
```

### 29、os 指定能够运行的系统

```json
// 能运行在除了win32以外的系统
"os": [ "!win32" ]

// 只能运行在linux系统上
"os": [ "linux" ]
```

### 30、cpu 只能能够运行的cpu

```json
// 除了Intel 64-bit的cpu，其他都能运行
"cpu": ["!x64"]

// 只能在Intel 64-bit的cpu上运行
"cpu": ["x64"]
```

### 31、types 或 typings 类型文件入口

`types` 或 `typings` 字段是用于指定 TypeScript 类型定义文件位置，如果没有指定则它会查找与主入口文件（`main` 字段指定的文件）同名但扩展名为 `.d.ts` 的文件。

```json
{
  "main": "index.js",
  "types": "index.d.ts"
}
```

### 32、unpkg 或 jsdelivr 开启cdn

访问`https://unpkg.com/my-package` 时，unpkg 会提供 `dist/my-package.min.js` 文件。

```json
{
    "name": "my-package",
    "version": "1.0.0",
    "main": "index.js",
    "unpkg": "dist/my-package.min.js",
    "jsdelivr ": "dist/my-package.min.js"
}
```

- 直接访问包的最新版本：`https://unpkg.com/my-package`
- 访问特定版本的包：`https://unpkg.com/my-package@1.0.0`
- 访问包中的特定文件：`https://unpkg.com/my-package@1.0.0/path/to/file.js`

### 33、 browserslist

是一个用于在不同工具之间共享目标浏览器和 Node.js 版本的配置文件。它被许多前端工具使用，如 Autoprefixer、Babel、ESLint 和 Stylelint，以确保生成的代码在指定的浏览器环境中运行良好。

`browserslist` 配置可以放在以下几个地方：

1. `package.json` 文件中
2. 一个单独的 `.browserslistrc` 文件
3. `browserslist` 字段的 `config` 文件

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}
```

- 支持市场份额超过 1% 的浏览器：

  ```json
  ["> 1%"]
  ```

- 支持最新的两个版本的所有浏览器：

  ```json
  ["last 2 versions"]
  ```

- 不支持已死的浏览器（如 IE 10）：

  ```json
  ["not dead"]
  ```

- 支持最新的 Chrome 和 Firefox：

  ```json
  ["last 2 Chrome versions", "last 2 Firefox versions"]
  ```

- 支持特定版本的浏览器：

  ```json
  ["Firefox ESR", "iOS >= 8", "Safari >= 8"]
  ```

### 35、sideEffects 打包优化

`sideEffects` 字段可以是一个布尔值或一个字符串数组。

1. 布尔值

   - `true`：表示所有文件都有副作用，不进行任何 tree-shaking 优化。
   - `false`：表示所有文件都没有副作用，可以进行最大程度的 tree-shaking 优化

   ```json
   "sideEffects": false
   ```

2. 字符串数组

   包中只有部分文件有副作用，可以使用字符串数组来指定这些文件的路径模式。

   ```json
   "sideEffects": [
       "*.css",
       "*.scss",
       "./src/someFile.js"
   ]
   ```

### 36、lint-staged 代码提交格式化

要使用 `lint-staged`，你需要先安装它。通常，它与 `husky` 一起使用，以便在 Git 钩子（如 pre-commit 钩子）中运行。

## 四、.npmrc

