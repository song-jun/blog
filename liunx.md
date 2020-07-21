
## WINDOWS cmd指令

- 列举8000端口启用情况

```bash , shell
netstat -ano|findstr -c 8000
```

- 列举所有启用的端口

```bash , shell
netstat -an
```

- 查询端口对应的程序

```bash , shell
tasklist | findstr -c:8000
```

- 关闭端口

```bash , shell
taskkill /f /pid 8000
```

- 清空终端

```bash , shell
cls
```

- 创建文件夹

```bash , shell
md test
```

- 创建文件（空白文件）

```bash , shell
type nul>my.text
```

- 复制 copy

```bash , shell
copy my.text my_1.text

copy my.text test
```

- 删除 del

```bash , shell
del my.text

del test\student.xls

del *.text  *.txt (批量删除后缀为text和txt的文件)
rd  /s  .\js\test\ 等价于rd  /s  .\js\test (删除当前目录下的js文件夹下的test文件夹及test文件夹下的所有文件)(最后的\可省略)
(等价于 rd .\js\test\/s 等价于 rd  .\js\test/s)

rd  /s  D:\test\ 等价于 rd  /s  D:\test (删除d盘里test文件夹及其下的所有文件)(最后的\可省略)
(等价于 rd  D:\test\/s 等价于 rd  D:\test/s)
```

## liunx 指令

- 创建文件

```bash , shell
touch a.js
```

- 创建文件夹

```bash , shell
mkdir so
```

- 删除文件

```bash , shell
rm -rf a.js
```

- 删除文件夹

```bash , shell
rm -rf test
```

- 复制文件

```bash , shell
# 方法一
cp a.js d.js 
# 方法二
scp a.js d.js
```

- 复制文件到文件夹

```bash , shell
# 方法一
cp -r a.js test
# 方法二
scp -r a.js test
```

- 清空终端

```bash , shell
clear
```