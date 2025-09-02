---
sidebar: auto
---

# git 常用技巧

## 1、 还原推到远端的 merge

- -m 1：指定保留合并前的主分支（通常是当前分支）的父提交（Git 中合并提交有多个父提交，-m 1 表示第一个父提交）。

```bash
# 产生一个新的commit
git revert -m 1 <merge的hash值>

# 推送到远端
git push
```

## 2、 同时推送两个远程仓库

1.  在原有的仓库上再添加一个远程地址

    ```bash
    git remote set-url --add origin 远端地址
    ```

2.  查看远端地址，要有两个 push 地址
    ![push地址](/git/git-push.png)]

3.  推送代码，正常使用 push 就可以同时推送两个远端了
    ```bash
    git push
    ```

## 3、 git 无法推送

1.  打开代理软件
2.  在电脑上看代理的地址
3.  配置 git 的代理地址，保持和电脑上的代理地址和端口号一致

```bash
# 设置全局的代理
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890

# 设置单个项目的代理
git config --local http.proxy http://127.0.0.1:7890
git config --local https.proxy http://127.0.0.1:7890
```

4.  重新推送代码
5.  取消代理

```bash
# 取消全局代理
git config --global --unset http.proxy
git config --global --unset https.proxy

# 取消单个项目的代理
git config --local --unset http.proxy
git config --local --unset https.proxy
```

## 4、merge 但未推送远端，需要撤销

1. merge 产生了冲突

```bash
# 放弃 merge
git merge --abort
```

2. 成功合并需要撤销

```bash
# 撤销 merge，也就是撤销这个commit，并将文件放置在工作区
git reset --soft HEAD^

# 撤销 merge，也就是撤销这个commit，并且丢弃文件
git reset --hard HEAD^
```

## 5、查看用户设置

1. 查看所有配置（全局 + 本地）

```bash
git config --list
```

2. 查看全局配置

```bash
git config --global --list
```

3. 查看本地仓库配置

```bash
git config --local --list
```
