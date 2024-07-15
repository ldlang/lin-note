---
sidebar: auto
---

# package.json配置说明

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

### 30、cpu 指定能够运行的cpu

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
