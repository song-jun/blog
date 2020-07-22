## 初始化git流程

```sh
git init
```  

## 添加文件

```sh
git add .  
# 添加文件,git add 文件路径(单个文件方式)
```

## 提交注释

```sh
git commit -m "sk"
```

## 设置远程主机

```sh
git remote add origin https://git.coding.net/QQ15994206180/WordPress.git
```

## 推送到远程主机

```sh
git push -u origin master
# 推送到远程主机,如果出现![rejected],说明初次使用git仓库,远程仓库与本地仓库不一致,需拉一下,使用命令git pull --rebase origin master,在推送就OK了.下次直接使用git push就OK了.
```

## 本地仓库关联远程分支

```sh
$ git branch --set-upstream-to=origin/master master
# 本地仓库关联远程分支（就可以直接使用Git pull,Git push等指令）
```

## 修改远程地址

```sh
git remote set-url origin https://e.coding.net/QQ15994206180/blog.git
```

## 分支匹配

```sh
git config --global push.default matching
```

## git全局name,email修改

```sh
git credential-manager uninstall
```

## git 编辑模式退出

```sh
":wq+enter键"
```

## 撤回操作

```sh
git reset
# 撤回git add .操作
```

## 撤销本地版本修改

```sh
git checkout .
```

## 创建分支

```sh
git branch sk
```

## 切换分支

```sh
git checkout sk

git checkout -b sk
# 创建sk分支,并切换到sk分支
```

## 记住用户名和密码

```sh
# GIT之https或http方式设置记住用户名和密码的方法

# 设置记住密码（默认15分钟）：
git config --global credential.helper cache

# 如果想自己设置时间，可以这样做：
git config credential.helper 'cache --timeout=3600'
# 这样就设置一个小时之后失效

# 长期存储密码：
git config --global credential.helper store

# 增加远程地址的时候带上密码也是可以的。(推荐)
http://yourname:password@git.oschina.net/name/project.git
# 补充：使用客户端也可以存储密码的。

# 如果你正在使用ssh而且想体验https带来的高速，那么你可以这样做： 切换到项目目录下 ：
cd projectfile/
# 移除远程ssh方式的仓库地址
git remote rm origin

# 增加https远程仓库地址
git remote add origin https://yourname:password@git.oschina.net/name/project.git
```

## 查看操作

```sh
# 没提交之前，查看更改内容
git diff
# 查看所有

git diff 文件名
# 单个文件

# 查看提交记录

git log git log <file> 
# 查看该文件每次提交记录

git log -p <file>
# 查看每次详细修改内容的diff

git log -p -2 
# 查看最近两次详细修改内容的diff

git log --stat 
# 查看提交统计信息
```

git push origin master和git push有什么区别？

- master是主分支，还可以建一些其他的分支用于开发。
- git push origin master的意思就是上传本地当前分支代码到master分支。git push是上传本地所有分支代码到远程对应的分支上。