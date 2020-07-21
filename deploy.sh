###
 # @Description: 
 # @Version: 
 # @Autor: MrSong
 # @Date: 2020-07-16 11:40:18
 # @LastEditors: MrSong
 # @LastEditTime: 2020-07-21 16:08:05
### 
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
echo 'github.songjun520.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
# git push -f git@github.com:zhangyunchencc/zhangyunchencc.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
git push -f git@github.com:song-jun/blog.git master:gh-pages

cd -
