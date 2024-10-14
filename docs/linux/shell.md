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

## 3、传递参数

1. 传递参数

   在执行脚本的时候进行参数的传递

   ```bash
   # 9 是第一参数， 哈哈 是第二个参数
   ./test.sh 9 "哈哈"
   ```

2. 接受参数

   ```bash
   #!/bin/bash
   # 参数
   echo "shell 名称: $0"  # $0默认为文件的名称
   echo "第一个参数：$1"
   echo "第二个参数：$2"
   echo "参数个数：$#"
   echo "传递的参数作为一个字符串显示：$*"

   # 执行结果
   shell 名称: ./test.sh
   第一个参数：9
   第二个参数：哈哈
   参数个数：2
   ```

   > \>=10 的参数格式 ${10}

**特殊参数**

| $#  | 传递到脚本的参数个数                                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| $\* | 以一个单字符串显示所有向脚本传递的参数。 如"$\*"用「"」括起来的情况、以"$1 $2 … $n"的形式输出所有参数。                 |
| $$  | 脚本运行的当前进程 ID 号                                                                                                |
| $!  | 后台运行的最后一个进程的 ID 号                                                                                          |
| $@  | 与$*相同，但是使用时加引号，并在引号中返回每个参数。 如"$@"用「"」括起来的情况、以"$1" "$2" … "$n" 的形式输出所有参数。 |
| $-  | 显示 Shell 使用的当前选项，与 set 命令                                                                                  |
| $?  | 显示最后命令的退出状态。0 表示没有错误，其他任何值表明有错误。                                                          |

## 4、运算符

`expr` 是一款表达式计算工具，使用它能完成表达式的求值操作。

```bash
a=10
b=20
echo `expr $a + $b`
```

> - 表达式和运算符之间必须要有空格
> - 完整的表达式要被 ` 包含

1. 算数运算符

   下表列出了常用的算术运算符，假定变量 a 为 10，变量 b 为 20：

   | 运算符 | 说明                                          | 举例                         |
   | :----- | :-------------------------------------------- | :--------------------------- |
   | +      | 加法                                          | `expr $a + $b` 结果为 30。   |
   | -      | 减法                                          | `expr $a - $b` 结果为 -10。  |
   | \*     | 乘法                                          | `expr $a \* $b` 结果为 200。 |
   | /      | 除法                                          | `expr $b / $a` 结果为 2。    |
   | %      | 取余                                          | `expr $b % $a` 结果为 0。    |
   | =      | 赋值                                          | a=$b 将把变量 b 的值赋给 a。 |
   | ==     | 相等。用于比较两个数字，相同则返回 true。     | [ $a == $b ] 返回 false。    |
   | !=     | 不相等。用于比较两个数字，不相同则返回 true。 | [ $a != $b ] 返回 true。     |

   > - 条件表达式要放在方括号之间，并且要有空格，例如: [$a==$b] 是错误的，必须写成 [ $a == $b ]。
   > - 乘号(\*)前边必须加反斜杠(\)才能实现乘法运算；

2. 关系运算符

   **关系运算符的结果不能被`echo`直接输出，只能作为条件使用**

   ```bash
   a=10
   b=20

   [ $a -eq $b ] && echo "true" || echo "false"

   if [ $a == $b ]
   then
   	echo 'a等于b'
   else
   	echo 'a不等于b'
   fi
   ```

   假定变量 a 为 10，变量 b 为 20：

   | 运算符 | 说明                                                  | 举例                       |
   | :----- | :---------------------------------------------------- | :------------------------- |
   | -eq    | 检测两个数是否相等，相等返回 true。                   | [ $a -eq $b ] 返回 false。 |
   | -ne    | 检测两个数是否不相等，不相等返回 true。               | [ $a -ne $b ] 返回 true。  |
   | -gt    | 检测左边的数是否大于右边的，如果是，则返回 true。     | [ $a -gt $b ] 返回 false。 |
   | -lt    | 检测左边的数是否小于右边的，如果是，则返回 true。     | [ $a -lt $b ] 返回 true。  |
   | -ge    | 检测左边的数是否大于等于右边的，如果是，则返回 true。 | [ $a -ge $b ] 返回 false。 |
   | -le    | 检测左边的数是否小于等于右边的，如果是，则返回 true。 | [ $a -le $b ] 返回 true。  |

3. 布尔运算符

   **布尔运算符的结果不能被`echo`直接输出，只能作为条件使用**

   ```bash
   [ !false ] && echo "true" || echo "false"
   ```

   假定变量 a 为 10，变量 b 为 20：

   | 运算符 | 说明                                                | 举例                                     |
   | :----- | :-------------------------------------------------- | :--------------------------------------- |
   | !      | 非运算，表达式为 true 则返回 false，否则返回 true。 | [ ! false ] 返回 true。                  |
   | -o     | 或运算，有一个表达式为 true 则返回 true。           | [ $a -lt 20 -o $b -gt 100 ] 返回 true。  |
   | -a     | 与运算，两个表达式都为 true 才返回 true。           | [ $a -lt 20 -a $b -gt 100 ] 返回 false。 |

4. 逻辑运算符

   **逻辑运算符的结果不能被`echo`直接输出，只能作为条件使用**

   假定变量 a 为 10，变量 b 为 20:

   | 运算符 | 说明       | 举例                                     |
   | :----- | :--------- | :--------------------------------------- |
   | &&     | 逻辑的 AND | [[$a -lt 100 && $b -gt 100]] 返回 false  |
   | \|\|   | 逻辑的 OR  | [[$a -lt 100 \|\| $b -gt 100]] 返回 true |

5. 字符串运算符

   **字符串运算符的结果不能被`echo`直接输出，只能作为条件使用**

   假定变量 a 为 "abc"，变量 b 为 "efg"：

   | 运算符 | 说明                                       | 举例                     |
   | :----- | :----------------------------------------- | :----------------------- |
   | =      | 检测两个字符串是否相等，相等返回 true。    | [ $a = $b ] 返回 false。 |
   | !=     | 检测两个字符串是否相等，不相等返回 true。  | [ $a != $b ] 返回 true。 |
   | -z     | 检测字符串长度是否为 0，为 0 返回 true。   | [ -z $a ] 返回 false。   |
   | -n     | 检测字符串长度是否为 0，不为 0 返回 true。 | [ -n $a ] 返回 true。    |
   | str    | 检测字符串是否为空，不为空返回 true。      | [ $a ] 返回 true。       |

6. 文件测试运算符

   **文件测试运算符的结果不能被`echo`直接输出，只能作为条件使用**

   ```bash
   #!/bin/bash
   file="/lin/test.sh"
   if [ -r $file ]
   then
   	echo "文件可读"
   else
   	echo "文件不可读"
   fi
   ```

   `$file`为`file="/lin/test.sh"`

   | 操作符  | 说明                                                                        | 举例                      |
   | :------ | :-------------------------------------------------------------------------- | :------------------------ |
   | -b file | 检测文件是否是块设备文件，如果是，则返回 true。                             | [ -b $file ] 返回 false。 |
   | -c file | 检测文件是否是字符设备文件，如果是，则返回 true。                           | [ -c $file ] 返回 false。 |
   | -d file | 检测文件是否是目录，如果是，则返回 true。                                   | [ -d $file ] 返回 false。 |
   | -f file | 检测文件是否是普通文件（既不是目录，也不是设备文件），如果是，则返回 true。 | [ -f $file ] 返回 true。  |
   | -g file | 检测文件是否设置了 SGID 位，如果是，则返回 true。                           | [ -g $file ] 返回 false。 |
   | -k file | 检测文件是否设置了粘着位(Sticky Bit)，如果是，则返回 true。                 | [ -k $file ] 返回 false。 |
   | -p file | 检测文件是否是有名管道，如果是，则返回 true。                               | [ -p $file ] 返回 false。 |
   | -u file | 检测文件是否设置了 SUID 位，如果是，则返回 true。                           | [ -u $file ] 返回 false。 |
   | -r file | 检测文件是否可读，如果是，则返回 true。                                     | [ -r $file ] 返回 true。  |
   | -w file | 检测文件是否可写，如果是，则返回 true。                                     | [ -w $file ] 返回 true。  |
   | -x file | 检测文件是否可执行，如果是，则返回 true。                                   | [ -x $file ] 返回 true。  |
   | -s file | 检测文件是否为空（文件大小是否大于 0），不为空返回 true。                   | [ -s $file ] 返回 true。  |
   | -e file | 检测文件（包括目录）是否存在，如果是，则返回 true。                         | [ -e $file ] 返回 true。  |

## 5、 echo 命令

1. 显示普通字符串

   ```bash
   echo "It is a test"

   # 或者
   echo It is a test
   ```

2. 显示转义字符串

   ```bash
    echo "\"It is a test\""  #  "It is a test"
   ```

3. 显示变量

   ```bash
   name="张三"
   echo "$name It is a test"
   ```

4. 显示换行

   ```bash
   echo -e "OK!\n" # -e 开启转义
   echo "It it a test"

   # 结果
   OK!

   It it a test
   ```

5. 显示不换行

   ```bash
   echo -e "OK! \c" # -e 开启转义 \c 不换行
   echo "It is a test"

   # 结果
   OK! It is a test
   ```

6. 显示结果定向至文件

   ```bash
   echo "It is a test" > myfile
   ```

7. 原样输出字符串，不进行转义或取变量（用单引号）

   ```bash
   echo '$name\"'

   # 结果
   $name\"
   ```

8. 显示命令执行的结果

   ```bash
   echo `date`

   # 结果
   Sat Dec 9 14:41:48 CST 2024
   ```

## 6、test

Shell 中的 test 命令用于检查某个条件是否成立，它可以进行数值、字符和文件三个方面的测试。

```bash
# 数值测试
num1=100
num2=100
if test $[num1] -eq $[num2]
then
    echo '两个数相等！'
else
    echo '两个数不相等！'
fi

# 字符串测试
if test num1=num2
then
    echo '两个字符串相等!'
else
    echo '两个字符串不相等!'
fi

# 文件测试
cd /bin
if test -e ./bash
then
    echo '文件已存在!'
else
    echo '文件不存在!'
fi
```

## 7、流程控制

### if 语句

- if

  ```bash
  if 条件
  then
  	# 条件为真执行的代码
  fi
  ```

- if else

  ```bash
  if 条件
  then
  	# 条件为真执行的代码
  else
  	# 条件为假执行的代码
  fi
  ```

- if else-if else

  ```bash
  if 条件1
  then
  	# 条件1成立执行的代码
  elif 条件2
  then
  	# 条件2成立执行的代码
  else
  	条件
  ```

示例：

```bash
if [ ! true ]
then
        echo "条件1成立"
elif [ ! true ]
then
        echo "条件2成立"
else
        echo "条件都不成立"
fi
```

### for 循环

语法

```bash
for item in item1 item2 ... itemN
do
	# 循环执行这里的代码，次数为 in 后面的 item 个数
done
```

示例

```bash
for item in 1 2 3
do
        echo $item # $item 为 in 后的每一项
done
```

### while 循环

语法

```bash
while 条件
do
	# 条件为真则执行这里的代码
done
```

示例

`(())`内允许进行算数运算

```bash
int=1
while (( $int<=5 ))
do
        echo $int
        ((int++))
done
```

### until 循环

与 while 循环刚好相反，只有条件为假的时候才进入循环

语法

```bash
until 条件
do
	# 条件为假则执行这里的代码
done
```

### case 选择

语法

```bash
case 值 in
	值1)  # 如果 值 == 值1 则执行这里的代码
	;;
	值2) # 如果 值 == 值2 则执行这里的代码
	;;
esac
```

示例

```bash
case "哈哈" in
    "哈哈")  echo '匹配了哈哈'
    ;;
    "嘿嘿")  echo '匹配和嘿嘿'
    ;;
esac
# 最终输出了 匹配了哈哈
```

### break 跳出所有循环

### continue 跳出当前循环

## 8、函数

语法

```bash
[ function ] funname [()]{
    action;
    [return int;]
}
```

示例

* 带有 function 关键字的函数

  ```bash
  function fun(){
          echo "我是函数fun运行的结果"
  }
  fun
  ```

  

* 忽略 function 关键字函数，并且使用了传递的参数

  ```bash
  fun1(){
          echo "我是文件名：$0"
          echo "我是函数的第一个参数：$1" 
  }
  
  # 运行 fun1 函数并且传递第一个参数 
  fun1 "哈哈"
  ```

* 带有返回值的函数

  函数返回值在调用该函数后通过 $? 来获得。

  ```bash
  funReturn(){
          return $((1 + 2))
  }
  funReturn
  
  # 函数返回值在调用该函数后通过 $? 来获得。
  echo "funReturn的函数返回值是：$? "
  ```

特殊字符用来处理参数

| 参数处理 | 说明                                                         |
| :------- | :----------------------------------------------------------- |
| $#       | 传递到脚本的参数个数                                         |
| $*       | 以一个单字符串显示所有向脚本传递的参数                       |
| $$       | 脚本运行的当前进程ID号                                       |
| $!       | 后台运行的最后一个进程的ID号                                 |
| $@       | 与$*相同，但是使用时加引号，并在引号中返回每个参数。         |
| $-       | 显示Shell使用的当前选项，与set命令功能相同。                 |
| $?       | 显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。 |

## 9、输入/输出重定向

| 命令            | 说明                                               |
| :-------------- | :------------------------------------------------- |
| command > file  | 将输出重定向到 file。                              |
| command < file  | 将输入重定向到 file。                              |
| command >> file | 将输出以追加的方式重定向到 file。                  |
| n > file        | 将文件描述符为 n 的文件重定向到 file。             |
| n >> file       | 将文件描述符为 n 的文件以追加的方式重定向到 file。 |
| n >& m          | 将输出文件 m 和 n 合并。                           |
| n <& m          | 将输入文件 m 和 n 合并。                           |
| << tag          | 将开始标记 tag 和结束标记 tag 之间的内容作为输入。 |

* 输出重定向

  读取`test.txt`中的内容，追加到`lin.txt`的内容里面

  ```bash
  cat test.txt >> lin.txt
  ```

* 输入重定向

  ```bash
  # input.txt的内容
  Hello
  World
  Shell
  Programming
  
  # 执行命令，条命令会搜索input.txt文件中包含字符串"World"的行，并将结果输出到终端
  grep "World" < input.txt
  
  ```

## 10、文件包含（文件导入）

`test.sh`文件内容

```bash
#!/bin/bash
host="ldlang.com"
```

`test1.sh`文件内容

```bash
#!/bin/bash

#使用 . 号来引用test.sh 文件
# . ./test.sh

# 或者使用 source 来导入
source ./test.sh

# 使用 test.sh 中 host 变量
echo "host地址为：$host"
```



  