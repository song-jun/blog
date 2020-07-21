###
 # @Description: 
 # @Version: 
 # @Autor: MrSong
 # @Date: 2020-07-21 16:14:50
 # @LastEditors: MrSong
 # @LastEditTime: 2020-07-21 16:16:19
### 
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


git init
git add -A
git commit -m 'git'

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
git push -f git@github.com:song-jun/blog.git master:blog

cd -
