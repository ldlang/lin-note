---
sidebar: auto
---

# git

### git 初始化

1. 设置全局用户签名

   ```git
   git config --global user.name 'lindalang'
   git config --global user.email '1156614427@qq.com'
   ```

2. 查看全局配置

   ```git
   可以查看到刚刚设置的 name 和 email 还有一些其他的配置
   	git config -l
   ```

3. **git init**

   ```git
   初始化一个文件夹，将这个文件夹作为git的本地仓库，这个文件夹里面出现一个 .git 的文
   件夹时就说明初始化成功了
   ```

### git 工作机制

1. 工作机制

   ```git
   git分为工作区，暂存区和master
   	1.工作区就是我们写代码的地方
   	2.暂存区就是add之后就存在于暂存区了
   ```

2. 暂存区操作

   - **add**

     ```git
     git add test.js			只将test.js提交到暂存区
     git add rest/			将rest文件夹下面的所有文件添加到暂存区
     git add .				将所有文件提交到暂存区 等同于git add --all
     git add -A
     	这个命令会添加所有更改，包括已修改的文件（modified），已删除的文件（deleted）
      和未跟踪的文件（untracked）。它不关心当前的工作目录，即会跟踪整个git仓库的文件。

     Git版本高于2.0，git add . 的行为和 git add -A 行为一致

     注意：
     	1.add只会存储在你使用这个命令那一时刻的文件，如果你在add之后，再次修改了这个
      文件，那么还要再次使用add命令将这个文件添加到暂存区
      2.暂存区的文件你可以认为是将文件复制了一次，并且IT帮你管理了起来
     ```

   - **status 和 diff**

     ```git
     git status	查看文件的状态，如果是红色就处于工作区并且有过修改，如果是绿色那就是在暂存区

     git status -s
     	常看文件状态的简洁方式，对每个文件有两列的输出，第一列表示暂存区的状态，第二列表示工
      作区的状态??表示未跟踪的文件，A表示存在暂存区的，M表示修改过的

     git diff				查看每个文件具体的修改，一般用于查看工作区和暂存区文件的差异
     git diff --staged		比对已暂存文件与最后一次提交的文件差异
     ```

   - 删除暂存区的内容

     ```git
     git rm --cached test.js		删除暂存区指定的test.js文件
     ```

   - 同时删除暂存区和工作区的文件

     ```git
     git rm test.txt		同时删除暂存区和工作区的 test.txt 文件

     注意：如果只是简单地从工作目录中手工删除文件，那么执行以上命令只会删除暂存区的
     test.txt 文件
     ```

   - 撤销暂存区的内容

     ```git
     git reset HEAD test.txt	撤销存储在暂存区的tes.txt文件	git reset个危险的命令，慎用

     git checkout -- test.txt
     	将暂存区的文件从暂存区移除，并且还原到上一次修改的状态，也就是说，撤销了这一次的
      暂存，同时也将这个文件还原到了上一次提交时的状态，也就是说上一次commit这个文件是
      什么样子，现在也是什么样子
     ```

3. 历史区操作 **commit**

   - **commit**

     ```git
     git commit -m '备注的内容'		将暂存区的内容全部添加到历史区
     git commit
     	会进入vim模式，此时先按i键进入inster模式，此时就可以输入文字，在没有'#'的地方输
      入要提交的注释，然后在按esc，在输入 :wq 退出vim模式，此时就commit完成了
     ```

   - git commit -a -m '备注的内容'

     ```git
     add和commit 同时进行，但是有时这个选项会将不需要的文件添加到提交中，所有尽量不用
     ```

   - 撤销 commit

     ```git
     git commit --amend
     将上一次commit撤销，此时会进入vim模式，修改备注后，就可以将上一次commit的内容覆
     盖，相当于上一次的commit不存在，只有这次的commit
     ```

4. 查看历史提交

   - **log**

     ```git
     git log 			查看commit的历史记录
     git log -p -2		查看最近两次提交，每个文件的差异
     git log --start		查看每次提交的简略信息，每次提交增加了多少，删除了多少

     小技巧：
     	1.log列表特别长的时候可以按 q 退出
     	2.log列表显示不全时按 z 会继续输出列表
     ```

   - **reflog**

     ```git
     git reflog 			查看所有的历史操作
     ```

5. 忽略文件

   ```git
   添加一个 .gitignore 文件，
       # 忽略所有的 .a 文件
       *.a

       # 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
       !lib.a

       # 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
       /TODO

       # 忽略任何目录下名为 build 的文件夹
       build/

       # 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
       doc/*.txt

       # 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
       doc/**/*.pdf
   ```

### 分支

1. 分支操作

   ```git
   git branch			查看已有的分支
   git branch dev		创建一个dev的分支
   git checkout dev	切换到dev分支，此时就在dev分支上提交的代码，就和master就不在一个log上
   git merge dev		将dev分支的代码合并到master上，再次之前一定要先切换主分支上
   git branch -d dev	删除dev分支，在删除之前一定要切回主分支上
   git branch -a		查看所有的分支，绿的表示当前所处的分支，红色的就远程上的分支，白色的本地存在的

   注意：切换分支之前一定要提交代码和拉取远程的代码，完毕之后才能切换分支
   ```

2. 解决分支合并冲突

   ```git
   出现合并分支冲突的原因，在主分支上修改了一个文件，然后提交到master上，有切换到子分支上对
   同一个文件进行了修改，然后再提交到子分支上，最后切换到master上进行merge分支合并，
   此时合并就会冲突
   	具体步骤：
   		1.在master创建一个test文件，并进行commit
   		2.切换到dev分支上，对test进行修改，并进行commit，此时需要紧急切换到master进行开发
   		3.切回到master上再次对test文件进行修改，然后在commit
   		4.将dev的代码merge合并到主分支上，此时就会冲突

   解决方式：
   	1.在master分支上，打开冲突的文件，将冲突的地方进行修复
   	2.在master分支上，进行commit就可以解决冲突了
   ```

### 远程仓库

1. 连接远程仓库 remote

   ```git
   git remote add origin https://gitee.com/linda-lang/git_learn.git
   	在本地库添加远程仓库的地址，origin现在就相当于远程的URL的一个别名，并且是可以随意更改
   git	remote show				查看当前URL的别名
   git remote show	origin		查看某一个远程仓库的更多信息，比如你当前所处的分支等
   git remote rename origin pb		将别名origin修改为pb

   git remote -v		查看连接远程仓库的地址  结果https://gitee.com/linda-lang/git_learn.git
   git remote remove origin	移除连接远程仓库的地址
   ```

2. 拉取远程代码到本地但不合并到工作区

   ```git
   git fetch origin	将远程的代码拉取到本地，但不合并到工作区
   git rebase			将拉取下来的代码合并到工作区
   ```

3. 拉取远程分支的代码并合并到工作区

   ```git
   git pull		将远程代码拉取到本地
   ```

4. 克隆远程代码

   ```git
   git clone https://gitee.com/linda-lang/git_learn.git	将远程主分支仓库克隆到本地
   git clone https://gitee.com/linda-lang/git_learn.git mygit	克隆并重命名文件夹为mygit
   ```

5. 解决冲突

   ```git
   打开冲突的文件，将冲突的地方修改，删除无用的
   然后再次git add .
   		git commit -m '解决冲突'
   		git pull
   		git push
   		即可
   ```

### 打标签 tag

1. 查看标签和标签里面的内容

   ```git
   git tag								查看所有的tag
   git tag -a v1.0 -m 'tag的备注'		提交一个v1.0的tag，并添备注
   git show v1.0						显示v1.0标签信息和与之对应的提交信息
   ```

2. 推送 tag 到远程

   ```git
   git push origin	v1.0		将v1.0的tag推送到远程
   git push --tags				将所有的tag推送到远程
   ```

3. 删除标签

   ```git
   git tag -d v1.0					删除本地v1.0的tag
   git push origin --delete v1.0	删除远端的v1.0tag
   ```

### 设置命令别名

1. 设置别名

   ```git
   git config --global alias.ci commit			此时git ci就相当于git commit
   ```

### 分支操作

​ **注意：以下操作都是基于本地来做的，并没有和远程产生任何交互**

1. 分支创建与切换

   ```git
   git branch			查看所有的分支，绿色的就是你当前所处的分支
   git branch dev		创建一个dev分支，在这一时刻，将主分支的代码克隆了一份到dev上
   git	chekout	dev		切换到dev分支，并将HEAD指针移动到对应位置，如果是刚创建的分支那么和master一致
   git checkout -b dev		在创建dev分支的同时切换到dev分支上

   理解:
   	1.创建了分支，那么会从主分支上拷贝一份代码到分支上，并会有一条新的记录指针
   	2.在子分支上每次的代码提交，只会推动子分支上的指针向前移动，并不会改变主分支的指针
   	3.在主分支上提交代码，也不会改变子分支上的指针移动，他们两个都有自己独立的指针记录

   git log --oneline --decorate --graph --all		查看所有分支的指针记录
   ```

2. 分支的合并

   ```git
   git merge dev		将dev分支的代码合并到master上，前提是你正处于master上
   git merge master	将master主分支上的代码合并到dev上，前提是你处于dev上，但一般不会就这么做
   git merge -Xignore-space-change whitespace	  合并的时候忽略文件的空白区，因为空白也会导致冲突

   操作步骤:
   	1.在子分支上必须保证你的工作树干净，也就是将你的代码提交，保证工作区没有修改
   	2.切回到master分支上
   	3.执行 git merge dev 将dev分支上的代码合并到master上

   注意分支合并以后需要git push才能将本地的代码同步到远端
   ```

3. 分支的删除

   ```git
   git branch -d dev	删除dev分支，此时此分支上所有的代码都被删除了
   git branch -D dev	强行删除为未合并过得分支，dev分支

   注意：
   	1.未被合并过得分支是不能删除的
   ```

4. 分支合并时遇到冲突

   ```git
   产生的原因在主分支和子分支同时更改了同一文件，并且都进行了commit，然后进行 merge 合并，就会产生冲突
   	解决方式1：打开冲突的文件，将冲突的地方修改，删除无用的，然后依次执行以下代码即可
   		git add .
   		git commit -m '解决冲突'
   		git pull
   		git push

   	解决方式2： 放弃这次合并
   		git merge --abort
   ```

5. 分支管理

   ```git
   git branch 				查看所有的分支，绿色的就是当前所处的分支
   git branch -v			查看所有分支的同时查看所有分支最后一次提交的备注
   git branch --merged		查看已经合并过得分支
   git branch --no-merged	查看未合并的分支
   git branch -a		查看所有的分支，绿的表示当前所处的分支，红色的就远程上的分支，白色的本地存在的
   ```

   **注意：以下开始操作远程分支**

6. 远程分支的操作

   ```git
   git clone -o pb			从远端克隆代码的时候，件URL的别名设置为 pb 而不是默认的origin
   git push origin master	将master和master上的代码推送到远程
   git push origin dev 	将dev分支和dev分支上的代码推送到远程
   git push -u origin 'master'
   	为当前分支指定一个默认的主机，之后就不用每次都git push origin 'master'，
      只用git push即可

   备注:
   	1.推送到远程的代码其实被简写了，完整的写法为 git push origin dev:dev, 所以你就可以
      推送分支到远程的时候将其重名 git push origin dev:login	（将本地的dev分支推送到远
      端，并重名为login）
   ```

7. 拉取远程分支的代码

   ```git
   git fetch origin			拉取远端所有的代码，但并不合并到本地
   git merge origin/dev		将拉取到的dev远端代码合并到本地的dev上
   git checkout -b dev origin/dev	将拉取到的dev远端代码合并到本地的dev上，同时切换到dev分支上
   git pull origin master		拉取远端的代码并同时合并到本地，相当于 fetch + merge
   git pull			拉取当前分支的远端代码，如果本地你处于dev，会将远端的dev的代码拉取到本地并合并

   pull的时候要 git pull origin dev 才能拉取代码
   可以通过 git branch --set-upstream-to=origin/dev dev 然后直接git pull就可以拉取代码了
   ```

8. 克隆远程指定分支的代码

   ```git
   git clone -b dev https://gitee.com/linda-lang/git_sky.git
   	将远程dev分支上的代码克隆到本地
   ```

9. 删除远端的分支

   ```git
   git push origin --delete dev		删除远端的dev分支
   git push origin :dev				将远端的dev分支置空，等价于删除
   ```

10. 分支变基

    ```git
    简单理解一点就是将不同分支的指针都合并到主分支上，使指针树干净

    git pull --rebase  拉取远端的代码，从远程仓库获取最新的代码，并将本地的提交应用
    到远程分支的最新提交上，这个命令的优点是：当你有多条提交需要合并到远程分支时，使用
    rebase 可以保持一个线性且整洁的提交历史。这使得代码审查和协作更加容易。

    不常用且难理解，日后感兴趣在补充
    官网讲解地址：https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA
    ```

11. git pull --rebase 冲突解决方式

    ```git
    冲突的前置操作
    	git add .
    	git commit -m '提交文件'
    	git pull --rebase
    	此时就会产生rebase冲突

    冲突后，手动解决完冲突了，然后
    	git add .
    	git rebase --continue		继续之前的操作
    	git push					将代码推送到远端

    git rebase --rebase  拉取同步
    git rebase --continue 冲突解决完毕，继续rebase
    git rebase --skip
    	跳过之前的操作，无法解决冲突或者你决定跳过这个commit，此时你的文件就会被还原到上一次commit时候的状态
    git rebase --abort 放弃之前的操作，停止全部的合并操作并返回到开始之前的状态
    ```

### git 工具

1. 交互式暂存

   ```git
   git add -i		就可以出现交互式的选择界面，你可以选择那些文件需要暂存，产看某些文件的状态等
   ```

2. 贮藏与清理

   - 贮藏

     ```git
     git stash					将文件贮藏起来
     git stash push				等同于git stash
     git stash list				查看贮藏的列表

     注意：
     	1.贮藏的列表会从0开始，最新的贮藏就是第0项，
     ```

   - 清除贮藏

     ```git
     git stash drop stash@{1}	删除第一次的贮藏
     sit stash clear				清除所有贮藏
     ```

   - 获取贮藏

     ```git
     git stash apply stash@{1}	指定将1的贮藏还原到工作区，但不会清除对应的贮藏
     git stash apply				默认将贮藏区的第0项还原到工作区
     git stash pop				将最新一次的贮藏还原到工作区，并且删除对应的贮藏
     git stash pop stash@{1}		将指定的贮藏还原到工作区，并且删除对应的贮藏
     ```

3. 修改最后一次提交

   - 修改备注

     ```git
     git commit --amend		修改中最后一次提交的备注
     注意：如果代码已经推送到了远端，那么最好不要这么使用，因为你无法修改远端的备注
     ```

   - 修改代码

     ```git
     git reset HEAD^			将最后一次的提交还原到工作区，并撤销提交的历史

     此时就可以将commit的代码还原到工作区，并且可以再次修改，再提交，但是log上只会
     有这一条提交信息，而不会有被撤销的那条。
     ```

4. 切换版本

   - **--hard** 版本切换

     ```git
     git reset --hard HEAD^			版本回退，一个 ^ 代表回退一个版本,两个就是回退两个版本

     git reset --hard '版本号'		切换到指定的版本，如果是通过log查看的，那么版本版本号就是
                                    前6位，如果是通过reflog查看的那么可以直接使用，因为他就是6位

     	注意：以上操作会将你的工作区的代码也回退到你所切换的版本上
     ```

   - **--soft**

     ```git
     git reset --soft HEAD^		回退一个版本，但是不会改变工作区的代码，
     将回退的代码放到暂存区中

     作用：假如你修复了一个bug，但是不想新增一条记录就可以将代码回退到暂存区，
     将修复过到代码也提交到暂存区，将其同时commit，这样就两次提交就只会有一次
     历史记录。
     ```

   - **reset 和 revert**

     ```git
     同：reset和revert都能回退版本

     	git revert HEAD^		回退一个版本，并且产生一条新的log
     	git revert HEAD^^  回退两个版本

     异：reset是将版本的指针回退，而revert则是会产生新的一条log记录，在真实
     开发中最好使用revert，因为如果使用reset之后你的版本会远程的就不一致，此
     时只能使用-f强制推送，这样就会覆盖掉在你现在这个版本之后的代码，之后的代
     码就没了。
     ```
     
   - 撤销一个本地commit，将撤销的commit放置于工作区

     ```git
     git reset --soft HEAD^
     ```

5. 子模块

   - 需要子模块的场景

     ```git
     当你的一个工程，有一个模块想要实现复用，并且他也想被git管理起来，此时就可以使
     用submodele来管理这个模块的代码
     ```

   - 添加子模块

     ```git
     git submodule add https://gitee.com/linda-lang/add-submodule.git
     	将这个地址的git仓库添加为主工程的子仓库
     ```

   - 在主工程中改修子模块的代码并提交

     ```git
     1.在子模块目录里面打开git bash here
     2.切换到对应的分支	git checkout master
     3.拉取远程最新的代码 git pull --rebase
     4.添加要添加的内容
     5.提交代码
     ```

   - 在主工程中拉取子模块的最新代码

     ```git
     方式1：	git submodule update --remote
     方式2：	在子模块目录里面执行 git pull --rebase
     ```

   - 在主工程中执行 git submodule update

     ```git
     直接在主工程中执行 git submodule update 会将子模块的版本回退到子模块回退
     到父仓库最后一次提交时子模块的状态，代码不会是最新的状态

     1.此时可以在子模块目录里面执行
     	git checkout master
     	git pull
     	将代码更新到最新的状态

     2.在主工程中执行
     	git add 子模块的目录名
     	git commit -m '更新子模块状态'
     	git pull
     	git push
     	即可

     此时再次执行 git submodule update 就不会回退到最后一次提交时子模块的状态

     ```

   - 主工程中有子模块该怎么拉取

     ```git
     刚克隆下拉的主工程虽然有子模块的目录，但里面是空的，需要执行以下命令来更新子模块的目录

     方式一：先拉取主工程，再在主目录里执行
     	git submodule init
     	git submodule update
     	就能将子模块的代码拉取下来
     	或者
     		git submodule update --init 以上两个命令的合并

     方式二：同时拉取
     	git clone --recurse-submodules https://github.com/chaconinc/MainProject
     ```

### 合并不同项目的 commit

> 假如现在有两个项目分别为 A 和 B 项目，现在要将 A 项目的某个 commit 合并到 B 项目上

1. 先在 A 项目上 git remote -v 查看远程地址，并赋值下来，然后再去 B 项目上添加 A 项目
   的远程地址

   ```git
   假如A项目的远端地址为:
      https://gitee.com/linda-lang/vue3.git

   那么在 B 项目上执行以下命令，将A项目的远端地址添加到B项目上
      git remote add source https://gitee.com/linda-lang/vue3-case.git
   ```

2. 在 B 项目中拉取 A 项目的代码，但不合并到本地，使用`fetch`拉取，因为上面将 A 项目的远端
   地址添加到了 B 项目上，并命名为 `source`,所以可以直接拉取 A 项目的代码。此时 B 项目的本地
   就拥有了 A 项目的完整代码。

   ```git
   git pull = git fetch + git merge

   git fetch source
   ```

3. 在 A 项目中使用`git log`查看你想要合并 commit 的哈希值，然后在 B 项目中使用`cherry-pick`进行合并

   > 假如你要合并的 commit 的哈希值为 72057cfaeb87dafa041829a593ea270c9d096165

   ```git
   git cherry-pick 72057cfaeb87dafa041829a593ea270c9d096165
   如果没有冲突则可以直接 pull 再 push 到远端

   如果有冲突，解决完冲突后，执行
   git add .
   git cherry-pick --continue
   git pull --rebase
   git push
   ```

4. `cherry-pick`说明
   （**注意：** cherry-pick 也可对同一个项目的不同分支的 commit 进行操作）

   > 如果 A 项目提交了新的 commit，并且你要合并的 commit 在新提交的记录上，那么在
   > B 项目中要先执行`git fetch`拉取 A 项目的远端代码，然后再去 B 项目中执行
   > `cherry-pick`

   ```git
   git cherry-pick --continue
      使用`.git/sequencer`中的信息继续进行中的操作。可以用来在解决拣选或还原
      失败的冲突后继续执行

   git cherry-pick --skip
      跳过当前的提交，继续进行队列中其余的命令。

   git cherry-pick --quit
      忽略当前正在进行的操作。 可以用来在拣选或还原失败之后清除序列器的状态。

   git cherry-pick --abort
      取消操作并返回到预排序状态。
   ```
