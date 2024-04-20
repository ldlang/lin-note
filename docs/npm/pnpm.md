---
sidebar: auto
---

# 动机

## pnpm 相对于 npm/yarn 的优势

1. 节省磁盘空间

   - 同一依赖包需要使用不同的版本，则仅有 版本之间不同的文件会被存储起来。
   - 因为`pnpm`管理的包全部都在硬盘上的统一的位置。当安装软件包时， 其包含的所有文件都会硬链接自此位置，而不会占用 额外的硬盘空间。这让你可以在项目之间方便地共享相同版本的 依赖包。

2. 安装速度的提升

   - pnpm 使用一种高效的算法来解析包的依赖关系,避免了不必要的重复解析。
   - 它会在安装包时创建一个依赖关系图,并智能地重用已经解析过的包,从而加快了安装过程。

3. 创建非扁平化的`node_modules`

   当使用 npm 或 Yarn Classic 安装依赖包时，所有软件包都将被提升到 node_modules 的 根目录下。其结果是，源码可以访问 本不属于当前项目所设定的依赖包。默认情况下，pnpm 则是通过使用符号链接的方式仅将项目的直接依赖项添加到 `node_modules` 的根目录下。

## 安装

```bash
npm i -g pnpm
```

### 固定项目的包管理器版本

在`nodev16.9.0`版本后就默认安装了，如果没有安装则手动全局安装即可

- 全局安装`npm i -g corepack`

- 启用关闭

  ```bash
  # 启用
  corepack enable npm
  # 关闭
  corepack disable npm

  # 启用
  corepack enable pnpm
  # 关闭
  corepack disable pnpm
  ```

- 固定项目的`pnpm`版本

  默认固定当前正在使用的版本，固定之后`package.json`中就会回增加`packageManager`的配置项用于记录固定版本**<包管理器名称>@<版本>+<哈希>**

  ```
  corepack use pnpm@latest
  ```

### 查询 pnpm 安装的位置

在`git bash`中执行`which pnpm`即可得到安装的位置路径。

### 故障排查

在执行`pnpm install`报错时，先查询`pnpm`安装的位置，然后删除所有关于`pnpm`文件，重新安转`pnpm`即可。
