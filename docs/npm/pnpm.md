---
sidebar: auto
---

# pnpm

## 1、动机

### pnpm 相对于 npm/yarn 的优势

1. 节省磁盘空间

   - 同一依赖包需要使用不同的版本，则仅有 版本之间不同的文件会被存储起来。
   - 因为`pnpm`管理的包全部都在硬盘上的统一的位置。当安装软件包时， 其包含的所有文件都会硬链接自此位置，而不会占用 额外的硬盘空间。这让你可以在项目之间方便地共享相同版本的 依赖包。

2. 安装速度的提升

   - pnpm 使用一种高效的算法来解析包的依赖关系,避免了不必要的重复解析。
   - 它会在安装包时创建一个依赖关系图,并智能地重用已经解析过的包,从而加快了安装过程。

3. 创建非扁平化的`node_modules`

   当使用 npm 或 Yarn Classic 安装依赖包时，所有软件包都将被提升到 node_modules 的 根目录下。其结果是，源码可以访问 本不属于当前项目所设定的依赖包。默认情况下，pnpm 则是通过使用符号链接的方式仅将项目的直接依赖项添加到 `node_modules` 的根目录下。

## 2、安装

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

  默认固定当前正在使用的版本，固定之后`package.json`中就会回增加`packageManager`的配置项用于记录固定版本**<包管理器名称>@<版本>+<哈希>**，如果项目中的`pnpm`版本已经被固定了，那么再次执行这个命令会将固定的版本改为当前全局最新的版本。

  ```bash
  corepack use pnpm@latest
  ```

### 查询 pnpm 安装的位置

在`git bash`中执行`which pnpm`即可得到安装的位置路径。

### 故障排查

在执行`pnpm install`报错时，先查询`pnpm`安装的位置，然后删除所有关于`pnpm`文件，重新安转`pnpm`即可。

## 3、pnpm cli

### 参数

1. `-C <path>`和`--dir <path>`

   两者是等价的，用于将包安装到指定的`path`下面，或者运行指定目录下面的命令。

   - 把包安装到指定目录

     ```bash
     # 将包安装到packages/components下，前提是这个文件也是一个包，有自己的package.json
     pnpm add axios -C packages/components
     ```

   - 运行指定包下面的命令

     ```bash
     # 运行example目录下面package.json配置build命令
     pnpm -C example build
     ```

2. `-w`

   执行`pnpm`是在根目录，而不是当前目录，就是你在`packages/components`开了终端要安装包，那么加入`-w`就会安装到根目录的包中，而不是安装在`packages/components`文件的包中。

   ```bash
   # 无论在包任何目录下执行该命令，都会将包安装到根目录下面
   pnpm remove axios -w
   ```

## 4、CLI 命令

**注意： ** 部分命令的配置项并不全，因为不是经常用到，查看其他配置项，参考[官网](https://www.pnpm.cn/)

### pnpm add \<pkg\>

安装依赖包，默认情况安装为生产的依赖包

| 命令                               | 含义                                                                 |
| ---------------------------------- | -------------------------------------------------------------------- |
| `pnpm add sax`                     | 保存到 `dependencies` 配置项下                                       |
| `pnpm add -D sax`                  | 保存到 `devDependencies` 配置项下                                    |
| `pnpm add -O sax`                  | 保存到 `optionalDependencies` 配置项下                               |
| `pnpm add -g sax`                  | 安装软件包到全局环境中                                               |
| `pnpm add sax@next`                | 安装标记为 `next` 的版本                                             |
| `pnpm add sax@3.0.0`               | 安装指定版本 `3.0.0`                                                 |
| `pnpm add  react@">=0.1.0 <0.2.0"` | 安装`react` 包的版本将会在 `0.1.0` 和 `0.2.0` 之间，但不包括 `0.2.0` |

1. 从 npm 注册表中安装包

   ```bash
   pnpm add axios
   ```

2. 从本地文件系统上安装

   ```bash
   # 安装压缩包
   pnpm add ./package.tar.gz
   # 安装一个目录
   pnpm add ./some-directory
   # 将E盘下面的lin-note作为包安装进来
   pnpm add E:\lin-note
   ```

3. 安装远端的压缩包

   URL 必须是一个以 "http://" 或 "https://" 开头的网络地址。

   ```bash
   pnpm add https://github.com/indexzero/forever/tarball/v0.5.6
   ```

4. 从 git 仓库安装

   ```bash
   # 将仓库的dev分支作为库引入
   pnpm add git+https://gitee.com/linda-lang/vue3-ts-base.git#dev

   # 将仓库的指定commit作为库引入
   pnpm add git+https://gitee.com/linda-lang/vue3-ts-base.git#4a9d4642e70cb4069a883fe8407c8faa1284a1cc

   # 也可以使用用户名+仓库名的方式安装，但是要配置ssh
   pnpm add git+ldlang/lin-admin#master
   ```

5. 配置项

   - `--save-prod, -P`，安装指定的软件包并添加到 `dependencies` （生产依赖）配置项中。
   - `--save-dev, -D`，安装指定的软件包并添加到 `devDependencies` （开发依赖）配置项中。
   - `--save-optional, -O`，安装指定的软件包并添加到 `optionalDependencies` （可选依赖）配置项中。
   - `--save-exact, -E`，保存的依赖项将使用确切的版本进行配置，而不是使用 pnpm 的默认 semver 范围运算符。
   - `--save-peer`，使用 `--save-peer` 会添加一个或多个包并将它们 `peerDependencies` 作为开发依赖项安装。
   - `--ignore-workspace-root-check`，除非使用 `--ignore-workspace-root-check` or `-w` 标志，否则向根工作区包添加新依赖项将失败。
   - `--global, -g`，将软件包安装都全局环境中。
   - `--workspace`，仅添加能在 workspace 中找到的依赖包。

### pnpm install

安装所有依赖包

**别名：** `i`

| Command                    | Meaning                                  |
| -------------------------- | ---------------------------------------- |
| `pnpm i --offline`         | 仅从本地缓存中安装，但本地缓存中要有才行 |
| `pnpm i --frozen-lockfile` | 不更新 `pnpm-lock.yaml`                  |
| `pnpm i --lockfile-only`   | 只更新 `pnpm-lock.yaml`                  |

**配置项**

- `--force`，强制重新安装依赖：重新获取并修改缓存中的包，由不兼容版本的 pnpm 重新创建的 lock 文件和（或）模块目录。 安装所有 optionalDependencies，即使它们不满足当前环境。
- `-offline`，pnpm 会仅使用已经在缓存中的包。 如果缓存中没有找不到这个包，那么就会安装失败。
- `--prefer-offline`，如果为 true，缺失的数据将会从服务器获取，并绕过缓存数据的过期检查。 想强制使用离线模式, 请使用 `--offline`。
- `--prod, -P`，如果环境变量中`NODE_ENV`被设置为 production，那么 pnpm 不会安装任何属于 `devDependencies` 的包，如果有相关的包已经被安装了，则会清除这些包。 使用这个指令 pnpm 会忽略`NODE_ENV` ，强制 pnpm 以 production 的方式执行 install 命令。
- `--dev, -D`，仅安装`devDependencies`并删除已安装的`dependencies`，无论 `NODE_ENV`是什么。
- `--no-optional`，不安装 `optionalDependencies` 依赖。
- `--fix-lockfile`，自动修复损坏的 lock 文件入口。

### pnpm update

`pnpm update` 根据指定的范围更新软件包的最新版本。在不带参数的情况下使用时，将更新所有依赖关系。

**别名：** `up`, `upgrade`

| 命令                 | 意义                                          |
| -------------------- | --------------------------------------------- |
| `pnpm up`            | 更新所有依赖项，遵循 `package.json`指定的范围 |
| `pnpm up --latest`   | 将所有依赖项更新到最新版本                    |
| `pnpm up foo@2`      | `foo` 更新到 v2 上的最新版本                  |
| `pnpm up "@babel/*"` | 更新 `@babel` 范围内的所有依赖项              |

例：
更新所有 `babel` 程序包：

```bash
pnpm update "@babel/*"
```

更新所有依赖项，除了 `axios`

```bash
pnpm update "!axios"
```

模式也可以组合，因此下一个命令将更新所有 `babel` 包，但以下情况除外 `core` ：

```bash
pnpm update "@babel/*" "\!@babel/core"
```

**配置项**

- `--recursive, -r`，同时更新所有带有`package.json`的依赖包，任意深度的依赖项都会被更新
- `--latest, -L`，忽略在 `package.json` 中指定的版本范围。 相反，版本将被指定为 `latest` 被使用 (可能会导致跨主版本的升级) 。
- `--global, -g`，更新全局安装的依赖包。
- `--workspace`，尝试链接工作区中所有的包。 版本将更新至与工作区内的包匹配的版本。如果更新了特定的包，而在工作区内也找不到任何可更新的 依赖项，则命令将会失败。
- `--prod, -P`，仅更新在 `dependencies` 和 `optionalDependencies` 中的依赖项。
- `--dev, -D`，仅更新在 `devDependencies`中的依赖项。
- `--no-optional`，忽略在 `optionalDependencies` 中的依赖项。
- `--interactive, -i`，显示过时的依赖项并选择要更新的依赖项。

### pnpm remove

从 `node_modules` 目录下和 `package.json` 文件中删除软件包。

**别名：** `rm`、`uninstall`、`un`

**配置项： **

- `--recursive, -r`，当不在 workspace 下使用时，将在 子目录下寻找所有软件包并删除指定的一个或多个依赖包。
- `--global, -g`，从全局环境中删除指定的软件包。
- `--prod, -P`，仅删除 `dependencies` 中列出的依赖包。
- `--dev, -D`，仅删除 `devDependencies` 中列出的依赖包。
- `--no-optional`，仅删除 `optionalDependencies` 中列出的依赖包。
