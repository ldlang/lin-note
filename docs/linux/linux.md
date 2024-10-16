---
sidebar: auto
---

# linux 常用命令

## 1、磁盘管理（文件目录类）

### pwd

目前所在的工作目录的绝对路径名称

```bash
# pwd
/root/test           #输出结果
```

### cd

切换目录

| 参数                      | 功能                     |
| ------------------------- | ------------------------ |
| cd 绝对路径，如`cd /etc`  | 切换到指定目录           |
| cd 相对路径，如`cd ./etc` | 切换到指定目录           |
| cd ~ 或者 cd              | 切换到家目录             |
| cd -                      | 回到上一次所在的目录     |
| cd ..                     | 返回当前目录的上一级目录 |

### ls

目录查看

```bash
ls [-alrtAFR] [name...]
```

参数

- -a：显示所有文件及目录 (ls 内定将文件名或目录名称开头为"."的视为隐藏档，不会列出)
- -l：除文件名称外，亦将文件型态、权限、拥有者、文件大小等资讯详细列出
- -r：将文件以相反次序显示(原定依英文字母次序)
- -t：将文件依建立时间之先后次序列出
- -A：同 -a ，但不列出 "." (目前目录) 及 ".." (父目录)
- -F：在列出的文件名称后加一符号；例如可执行档则加 "\*", 目录则加 "/"
- -R：若目录下有文件，则以下之文件亦皆依序列出

例：

1. 列出`/lin`下的所有目录

   ```bash
   # 可以在任何目录下执行
   ls -al /lin
   ```

2. 列出`/lin`下所有`test`开头的文件

   ```bash
   ls -al test*
   ```

### mkdir

创建一个空目录

```bash
mkdir [-mp] 目录名称
```

参数：

- -m：配置文件的权限。
- -p：帮助你直接将所需要的目录(包含上一级目录)递归创建起来！

例：

1. 创建一个空的`lin`文件夹

   ```bash
   mkdir lin
   ```

2. 创建多层目录

   ```bash
   mkdir -p lin/lin/lin
   ```

3. 创建 777 权限的文件夹

   ```bash
   mkdir -m 777 lin
   ```

### touch

创建空文件

```bash
touch 文件名
```

例：

1. 创建一个`lin.txt`文件

   ```bash
   touch lin.txt
   ```

### rmdir

删除**空**目录

```bash
rmdir [-p] 目录名称
```

参数：

- p：连同上一级『空的』目录也一起删除

例：

1. 删除空的`lin`目录

   ```bash
   rmdir lin
   ```

2. 删除多层级目录

   ```bash
   rmdir -p lin/lin/lin
   ```

### rm

删除一个文件或者目录

```bash
rm [-ifr] 目录名称
```

参数：

- -i：删除前逐一询问确认。
- -f：即使原档案属性设为唯读，亦直接删除，无需逐一确认。
- -r：将目录及以下之档案亦逐一删除。

例：

1. 删除`lin.sh`文件，并且不需要确认

   ```bash
   rm -f lin.sh
   ```

2. 删除`lin`文件夹及以下的所有文件

   ```bash
   rm -rf lin
   ```

3. 删除当前目录下面的所有文件

   ```bash
   rm -rf *
   ```

### mv

移动文件与目录，或修改名称

```bash
mv [-if] 源文件 目标文件
```

参数：

- -i：若指定目录已有同名文件，则先询问是否覆盖旧文件;
- -f：在 mv 操作要覆盖某已有的目标文件时不给任何指示;

| 命令格式         | 运行结果                                                       |
| :--------------- | :------------------------------------------------------------- |
| mv 文件名 文件名 | 将源文件名改为目标文件名                                       |
| mv 文件名 目录名 | 将文件移动到目标目录                                           |
| mv 目录名 目录名 | 目标目录已存在，将源目录 移动到目标目录；目标 目录不存在则改名 |
| mv 目录名 文件名 | 出错                                                           |

例：

1. 将文件`lin.txt`改为`deep.txt`

   ```bash
   mv lin.txt deep.txt
   ```

2. 将文件夹`lin`移动到`deep`下面

   ```bash
   mv ./lin ./deep
   ```

3. 将文件夹`lin`重命名为`lll`

   ```bash
   mv ./lin ./lll
   ```

### cp

复制文件或目录

```bash
cp [-adfilprsu] 来源档(source) 目标档(destination)
cp [-adfilprsu] source1 source2 source3 .... directory
```

参数：

- -a：相当於 -pdr 的意思，至於 pdr 请参考下列说明；(常用)
- -d：若来源档为连结档的属性(link file)，则复制连结档属性而非文件本身；
- -f：为强制(force)的意思，若目标文件已经存在且无法开启，则移除后再尝试一次；
- -i：若目标档(destination)已经存在时，在覆盖时会先询问动作的进行(常用)
- -l：进行硬式连结(hard link)的连结档创建，而非复制文件本身；
- -p：连同文件的属性一起复制过去，而非使用默认属性(备份常用)；
- -r：递归持续复制，用於目录的复制行为；(常用)
- -s：复制成为符号连结档 (symbolic link)，亦即『捷径』文件；
- -u：若 destination 比 source 旧才升级 destination ！

例：

1. 复制文件`lin.txt`到`deep`文件夹下面

   ```bash
   cp lin.txt ./deep
   ```

### cat

查看文件内容，一般查看一屏能显示完的文件

```bash
cat [-AbeEnstTuv] [--help] [--version] 文件名
```

参数：

- -n：由 1 开始对所有输出的行数编号
- -b：和 -n 相似，只不过对于空白行不编号
- -s：当遇到有连续两行以上的空白行，就代换为一行的空白行

示例：

1. 查看`lin.txt`的内容

   ```bash
   cat lin.txt
   ```

2. 将`lin.txt`的内容输入到`deep.txt`中

   ```bash
   cat lin.txt > deep.txt
   ```

3. 清空`test.sh`里面的内容

   ```bash
   cat /dev/null > test.sh
   ```

### more

显示文件内容，过会以一页一页的形式显示，更方便使用者逐页阅读，而最基本的指令就是按空白键（space）就往下一页显示，按 b 键就会往回（back）一页显示，而且还有搜寻字串的功能（与 vi 相似），使用中的说明文件，请按 h 。

```bash
more 文件名
```

操作：

- Enter 向下 n 行，需要定义。默认为 1 行
- Ctrl+F 向下滚动一屏
- 空格键 向下滚动一屏
- Ctrl+B 返回上一屏
- = 输出当前行的行号
- ：f 输出文件名和当前行的行号
- V 调用 vi 编辑器
- !命令 调用 Shell，并执行命令
- q 退出 more

### less

less 与 more 类似，但使用 less 可以随意浏览文件，而 more 仅能向前移动，却不能向后移动，而且 less 在查看之前不会加载整个文件。

```bash
less [option] 文件名
```

参数：

- -b 设置缓冲区的大小
- -e 当文件显示结束后，自动离开
- -f 强迫打开特殊文件，例如外围设备代号、目录和二进制文件
- -g 只标志最后搜索的关键词
- -i 忽略搜索时的大小写
- -m 显示类似 more 命令的百分比
- -N 显示每行的行号
- -o 将 less 输出的内容在指定文件中保存起来
- -Q 不使用警告音
- -s 显示连续空行为一行
- -S 行过长时间将超出部分舍弃
- -x 将"tab"键显示为规定的数字空格
- /字符串：向下搜索"字符串"的功能
- ?字符串：向上搜索"字符串"的功能
- n：重复前一个搜索（与 / 或 ? 有关）
- N：反向重复前一个搜索（与 / 或 ? 有关）
- b 向后翻一页
- d 向后翻半页
- h 显示帮助界面
- Q 退出 less 命令
- u 向前滚动半页
- y 向前滚动一行
- 空格键 滚动一行
- 回车键 滚动一页
- [pagedown]： 向下翻动一页
- [pageup]： 向上翻动一页

### ln

软链接，在不同目录下面要用到相同的文件，就可以使用软链接，只需要件文件放在一个地方，在任何使用这个文件的地方进行软链接，则都能进行使用，任何一个地方的这个文件被更改，那么其他地方的这个文件也会被更改。因此可以所需文件占用磁盘的空间。

```bash
 ln [参数] [源文件或目录] [目标文件或目录]
```

示例

1. 将`test.txt`软链接到`lin`文件下

   ```bash
   ln test.txt lin/
   ```

2. 将`test.txt`软链接到`lin`文件下并重命名为`lll.txt`

   ```bash
   ln test.txt lin/lll.txt
   ```

3. 删除软链接

   ```bash
   rm -f lll.txt
   ```

### history

查看历史命令

```bash
history
```

删除历史命令

```bash
history -c
```

## 2、用户管理命令

### useradd

添加用户，建立用户账号。

```bash
useradd [-mMnr][-c <备注>][-d <登入目录>][-e <有效期限>][-f <缓冲天数>][-g <群组>][-G <群组>][-s <shell>][-u <uid>][用户帐号]
```

或者

```bash
useradd -D [-b][-e <有效期限>][-f <缓冲天数>][-g <群组>][-G <群组>][-s <shell>]
```

参数：

- -c：加上备注文字。备注文字会保存在 passwd 的备注栏位中。
- -d：指定用户登入时的启始目录。
- -D：变更预设值．
- -e：指定帐号的有效期限。
- -f：指定在密码过期后多少天即关闭该帐号。
- -g：指定用户所属的群组。
- -G：指定用户所属的附加群组。
- -m：自动建立用户的登入目录。
- -M：不要自动建立用户的登入目录。
- -n：取消建立以用户名称为名的群组．
- -r：建立系统帐号。
- -s：指定用户登入后所使用的 shell。
- -u：指定用户 ID。

例：

1. 添加一个`lin`的用户

   ```bash
   useradd lin
   ```

2. 添加一个`lin`的用户，并且指定为`root`的用户组

   ```bash
   useradd -g root lin
   ```

3. 创建一个`lin`的系统用户

   ```bash
   useradd -r lin
   ```

4. 创建一个`lin`的用户并指定`ID`

   ```bash
   useradd lin -u 555
   ```

### passwd

设置用户密码

```bash
passwd [-k] [-l] [-u [-f]] [-d] [-S] [username]
```

参数：

- -d 删除密码
- -f 强制执行
- -k 更新只能发送在过期之后
- -l 停止账号使用
- -S 显示密码信息
- -u 启用已被停止的账户
- -x 设置密码的有效期
- -g 修改群组密码
- -i 过期后停止用户账号

例：

1. 设置`lin`用户的密码，如果没有设置过密码就是新加密码，如果设置过就是修改密码。

   ```bash
   passwd lin
   ```

2. 删除`lin`用户的密码

   ```bash
   passwd -d lin
   ```

3. 显示`lin`用户的密码信息

   ```bash
   passwd -S lin
   ```

### id

显示用户的 ID，以及所属群组的 ID。

```bash
id [-gGnru][--help][--version][用户名称]
```

参数

- -g：显示用户所属群组的 ID。
- -G：显示用户所属附加群组的 ID。
- -n：显示用户，所属群组或附加群组的名称。
- -r：显示实际 ID。
- -u：显示用户 ID。
- -help：显示帮助。
- -version：显示版本信息。

例：

1. 查看`lin`用户是否存在，存在则显示用户信息

   ```bash
   id lin
   ```

2. 显示当前用户信息

   ```bash
   id
   ```

> 查看创建了那些用户：cat /etc/passwd

### su

切换登录的用户

```bash
su [-fmp] [-c command] [-s shell] [--help] [--version] [-] [USER [ARG]]
```

参数：

- -f 或 --fast 不必读启动档（如 csh.cshrc 等），仅用于 csh 或 tcsh
- -m -p 或 --preserve-environment 执行 su 时不改变环境变数
- -c command 或 --command=command 变更为帐号为 USER 的使用者并执行指令（command）后再变回原来使用者
- -s shell 或 --shell=shell 指定要执行的 shell （bash csh tcsh 等），预设值为 /etc/passwd 内的该使用者（USER） shell
- --help 显示说明文件
- --version 显示版本资讯
- \- -l 或 --login 这个参数加了之后，就好像是重新 login 为该使用者一样，大部份环境变数（HOME SHELL USER 等等）都是以该使用者（USER）为主，并且工作目录也会改变，如果没有指定 USER ，内定是 root
- USER 欲变更的使用者帐号
- ARG 传入新的 shell 参数

例：

1. 切换至`lin`用户

   ```bash
   su lin
   ```

2. 切换账号为`lin`，并改变工作目录至`lin`的家目录

   ```bash
   su - lin
   ```

### userdel

删除用户

```bash
userdel [-r][用户帐号]
```

参数：

- -r：删除用户登入目录以及目录中所有文件。

例：

1. 删除`lin`用户

   ```bash
   userdel lin
   ```

2. 删除`lin`用户及该用户的所有文件

   ```bash
   userdel -r lin
   ```

### usermod

修改用户信息

```bash
usermod [-LU][-c <备注>][-d <登入目录>][-e <有效期限>][-f <缓冲天数>][-g <群组>][-G <群组>][-l <帐号名称>][-s <shell>][-u <uid>][用户帐号]
```

参数：

- -c：修改用户帐号的备注文字。
- -d：修改用户登入时的目录。
- -e：修改帐号的有效期限。
- -f：修改在密码过期后多少天即关闭该帐号。
- -g：修改用户所属的群组。
- -G：修改用户所属的附加群组。
- -l：修改用户帐号名称。
- -L：锁定用户密码，使密码无效。
- -s：修改用户登入后所使用的 shell。
- -u：修改用户 ID。
- -U：解除密码锁定。

例：

1. 修改`lin`用户的 uid

   ```bash
   usermod -u 777 lin
   ```

2. 修改`lin`用户名称为`deep`

   ```bash
   user -l lin deep
   ```

### sudo

此命令可以让非 root 的用户运行只有 root 才有权限执行的命令。

参考：[Linux 基本功系列之 sudo 命令](https://blog.csdn.net/m0_60259116/article/details/135170503?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_utm_term~default-0-135170503-blog-138045148.235^v43^control&spm=1001.2101.3001.4242.1&utm_relevant_index=3)

### groupadd

新增组

```bash
groupadd [option] 组名
```

参数：

- -f：如果组已经存在则成功退出，并且如果 GID 已经存在则取消 -g
- -g：为新组使用 GID
- -h：显示此帮助信息并推出
- -k：不使用 /etc/login.defs 中的默认值
- -o：允许创建有重复 GID 的组
- -p：为新组使用此加密过的密码
- -r：创建一个系统账户
- -R：chroot 到的目录

例：

1. 创建一个`lin`组

   ```bash
   groupadd lin
   ```

2. 指定`lin`租的 id

   ```bash
   groupadd -g 500 lin
   ```

### groupdel

删除组名

```bash
groupdel [option] [群组名称]
```

### groupmod

修改组名

```bash
groupmod [option] 新组名 老组名
```

参数：

- -g：设置欲使用的群组识别码。
- -o：重复使用群组识别码。
- -n：设置欲使用的群组名称。
