---
sidebar: auto
---

# npm

## 快速使用

### 1、npm版本管理

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
   # 安装loadsh
   npm i loadsh
   ```

### 4、使用`package.json`

1. `package.json`必填项

   * name：包名，必须全部小写字母且没有空格。
   * version：版本号，如"1.0.0"

2. 创建`package.json`的方式

   * 问答式

     ```bash
     npm init
     ```

   * 全部使用默认值

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

     

