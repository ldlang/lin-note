---
sidebar: auto
---

# shell

## 1、运行 shell 脚本

脚本内容，文件名为`test.sh`

```bash
#!/bin/bash
echo "Hello World !"
```

> "#!" 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell。

- 方式一

  在保存脚本的目录下执行

  ```bash
  chmod +x ./test.sh  #使脚本具有执行权限
  ./test.sh  #执行脚本
  ```

- 方式二

  可以不需要脚本内容的第一行

  ```bash
  /bin/sh test.sh
  ```

## 2、shell 变量

### 2.1 变量

1. 定义变量

   语法：直接变量名=变量值

   ```bash
   variable="Hello World!"
   ```

   **注意：**

   - 变量名、=、变量值三者之间不能有空格

   * 首个字符必须为字母（a-z，A-Z）。
   * 中间不能有空格，可以使用下划线（\_）。
   * 不能使用标点符号。
   * 不能使用 bash 里的关键字（可用 help 命令查看保留关键字）。

2. 使用变量

   - 方式一：

     ```bash
     # 使用 $ + 变量名
     $variable
     ```

   - 方式二

     ```bash
     # 使用 ${} 包裹住变量变量名
     ${variable}

     # 应用场景
     # 在字符中使用变量
     "this ${variable}"
     ```

### 2.2 字符串

1. 单引号字符串

   ```bash
   str='variable'
   ```

   **注意：**

   - 单引号字符串中不能使用变量
   - 单引号字符串中不能出现单引号，即使转义也不行

2. 双引号字符串

   ```bash
   str1="str"
   str2="this is a \"${str1}\""
   echo str2 # this is a "str"
   ```

3. 获取字符串长度

   ```bash
   str1="字符串"
   echo ${#str1} # 3
   ```

4. 截取字符串

   ```bash
   str2="this is a str"
   # 截取下标 2 到 9 的位置的字符
   echo ${str2:2:9} # is is a s
   ```

5. 查找字符串索引

   ```bash
   # 查找 a 在 str3 中的位置，得到的索引会加一
   str3="this is a str"
   echo `expr index "$str3" a`
   ```

### 2.3 数组

1. 创建数组

   ```bash
   arr=(1,2,3,4,5)

   # 或者
   arr[0]=0
   arr[1]=1
   arr[n]=2
   ```

2. 读取数组元素

   ```bash
   # ${数组名[下标]}
   echo ${arr[2]}
   ```

3. 读取数组所有元素

   ```bash
   echo $arr
   echo ${arr[@]}
   ```

4. 获取数组长度

   ```bash
   # 取得数组元素的个数
   length=${#arr[@]}

   # 或者
   length=${#arr[*]}

   # 取得数组第三个元素的长度
   length3=${#arr[3]}
   ```

### 2.4 注释

只有一种注释`#`，即使是多行也只能每行写`#`
