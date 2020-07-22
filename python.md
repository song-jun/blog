

## pip镜像下载模块

```sh
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple name
# 常用镜像
# 豆瓣：https://pypi.douban.com/simple
# 阿里：https://mirrors.aliyun.com/pypi/simple
# 清华：https://pypi.tuna.tsinghua.edu.cn/simple
# name就是要安装的包的名字
# eg:

pip install -i https://pypi.tuna.tsinghua.edu.cn/simple xgboost

# 永久修改，一劳永逸：
# Linux下，修改 ~/.pip/pip.conf (没有就创建一个文件夹及文件。文件夹要加“.”，表示是隐藏文件夹)

# 内容如下：

[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host=mirrors.aliyun.com
# windows下，直接在user目录中创建一个pip目录，如：C:\Users\xx\pip，新建文件pip.ini。内容同上。
```

## python启动本地服务

```py
python -m http.server 8123
```

## python3基础语法

[url]:https://www.runoob.com/python3/python3-tutorial.html

- [菜鸟教程][url]

- [w3school](https://www.w3school.com.cn/python/python_examples.asp)

## scrapy框架

安装

```sh
pip install scrapy
```

## python 写api接口

```py
'''
@Description: 
@Version: 
@Autor: MrSong
@Date: 2020-07-05 11:46:38
@LastEditors: MrSong
@LastEditTime: 2020-07-05 11:55:30
'''
from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/testGet', methods=["GET"])
def calculateGet():
    a = request.args.get("a", 0)
    b = request.args.get("b", 0)
    c = int(a) + int(b)
    res = {"result": c}
    return jsonify(content_type='application/json;charset=utf-8',
                   reason='success',
                   charset='utf-8',
                   status='200',
                   content=res)


@app.route('/testPost', methods=["POST"])
def calculatePost():
    params = request.form if request.form else request.json
    print(params)
    a = params.get("a", 0)
    b = params.get("b", 0)
    c = a + b
    res = {"result": c}
    return jsonify(content_type='application/json;charset=utf-8',
                   reason='success',
                   charset='utf-8',
                   status='200',
                   content=res)


if __name__ == '__main__':
    app.run(host='0.0.0.0', threaded=True, debug=False, port=8070)
```

## 链接mysql

源码展示

```python
'''
@Description: 
@Version: 
@Autor: MrSong
@Date: 2020-07-04 13:28:26
@LastEditors: MrSong
@LastEditTime: 2020-07-04 20:31:50
'''
import mysql.connector
db = mysql.connector.connect(host="ip地址",
                             user="用户名",
                             passwd="密码",
                             database="数据库")
cursor = db.cursor()
cursor.execute("SELECT * FROM test")
data = cursor.fetchall()
print(data)


# 写入数据库
def write_db(chapter, content):
    sql = "INSERT INTO test (id, time) VALUES(%(id)s, %(time)s);"
    param = {"id": chapter, "time": content}
    cursor.execute(sql, param)
    cursor.execute("SELECT * FROM test")
    data = cursor.fetchall()
    print(data)


def main():
    write_db(8811, 555554441188)


if __name__ == '__main__':
    main()
    write_db(12811, 555554442200)
    db.close()
```

## 数据导出excel表格

```py
import pymysql
import hashlib
import xlwt
import os

def op_mysql(sql: str):
    mysql_info = {
        'host': 'ip地址',
        'port': 3306,
        'password': '密码',
        'user': '用户名',
        'db': '数据库',
        'charset': 'utf8',
        'autocommit': True
    }
    result = '执行完成'
    conn = pymysql.connect(**mysql_info)
    # cur = conn.cursor(pymysql.cursors.DictCursor) #建立游标
    cur = conn.cursor()  # 建立游标
    cur.execute(sql)
    field = [t[0] for t in cur.description]  # 获取表里面的所有字段名
    print(field)
    if sql.strip().lower().startswith('select'):
        # result  = cur.fetchone()
        result = cur.fetchall()
    cur.close()
    conn.close()
    print('所有的字段', field)
    print('所有的数据', result)
    result = list(result)  # 因为返回的是元组，不能修改，所以转成list
    result.insert(0, field)  # 加入到最前面
    print(result)
    return result


def export_excel(table_name):
    sql = 'select * from %s;' % table_name
    result = op_mysql(sql)
    book = xlwt.Workbook()
    sheet = book.add_sheet('sheet')
    for row, line in enumerate(result):
        for col, t in enumerate(line):
            sheet.write(row, col, t)
    createFile("E:\pythonExport")
    book.save('%s.xls' % table_name)


# 创建文件夹
def createFile(file_path):
    if os.path.exists(file_path) is False:
        os.makedirs(file_path)
    # 切换路径至上面创建的文件夹
    os.chdir(file_path)


export_excel('test')

book = xlwt.Workbook()
sheet = book.add_sheet('sheet')
l = [
    [11, 'dsk', 'xxdfsdfsd', 0],
    [2, 'ldd', 'xxdfsdfsd', 0],
    [3, 'lsdd', 'xxdfsdfsd', 0],
    [4, 'lsd1', 'xxdfsdfsd', 0],
]

# 方法一：
# row = 0#行号
# for line in l: #外面这个循环，每循环一次，就写excel里面一行
#     # col = 0#列号   [1,'dsk','xxdfsdfsd',0]
#     col = 0
#     for t in line:#里面这个循环是控制列的，每循环一次就写一列
#         sheet.write(row,col,t)
#         col+=1
#     row+=1
#

# 方法二：
for row, line in enumerate(l):
    for col, t in enumerate(line):
        sheet.write(row, col, t)
createFile("E:\pythonExportTest")
book.save('user.xls')

```


## excel表格数据导入mysql

```py
'''
@Description: 
@Version: 
@Autor: MrSong
@Date: 2020-07-04 20:54:03
@LastEditors: MrSong
@LastEditTime: 2020-07-04 21:18:29
'''
import pymysql
# xlrd 为 python 中读取 excel 的库，支持.xls 和 .xlsx 文件
import xlrd

from builtins import int


# cur 是数据库的游标链接，path 是 excel 文件的路径
def importExcelToMysql(cur, path):

    # xlrd版本
    # 读取excel文件
    workbook = xlrd.open_workbook(path)
    sheets = workbook.sheet_names()
    worksheet = workbook.sheet_by_name(sheets[0])

    # xlrd版本
    # 将表中数据读到 sqlstr 数组中
    for i in range(1, worksheet.nrows):
        row = worksheet.row(i)

        sqlstr = []

        for j in range(0, worksheet.ncols):
            sqlstr.append(worksheet.cell_value(i, j))
        print(sqlstr)
        cur.execute(
            "insert into student(姓名, 语文, 数学, 英语) values(%s, %s, %s, %s)",
            sqlstr)


# 输出数据库中内容
def readTable(cursor):
    # 选择全部
    cursor.execute("select * from student")
    # 获得返回值，返回多条记录，若没有结果则返回()
    results = cursor.fetchall()

    for i in range(0, results.__len__()):
        for j in range(0, 4):
            print(results[i][j], end='\t')
        print('\n')


if __name__ == '__main__':
    # 和数据库建立连接
    conn = pymysql.connect('ip地址', '用户名', '密码', charset='utf8')
    # 创建游标链接
    cur = conn.cursor()

    # 新建一个database
    cur.execute("drop database if exists students")
    cur.execute("create database students")
    # 选择 students 这个数据库
    cur.execute("use students")

    # sql中的内容为创建一个名为student的表
    sql = """CREATE TABLE IF NOT EXISTS `student` (
                `姓名` VARCHAR (20),
                `语文` INT,
                `数学` INT,
                `英语` INT
              )"""
    # 如果存在student这个表则删除
    cur.execute("drop table if exists student")
    # 创建表
    cur.execute(sql)

    # 将 excel 中的数据导入 数据库中
    importExcelToMysql(cur, "../student.xls")
    readTable(cur)

    # 关闭游标链接
    cur.close()
    conn.commit()
    # 关闭数据库服务器连接，释放内存
    conn.close()
```

## 数据导出txt文档

```py
'''
@Description: 
@Version: 
@Autor: MrSong
@Date: 2020-07-04 19:42:36
@LastEditors: MrSong
@LastEditTime: 2020-07-04 20:45:17
'''
#/usr/bin/python
import os
import datetime
import time
import sys
import importlib
importlib.reload(sys)
import pymysql


def op_mysql(sql):
    t = datetime.datetime.now()
    print("begin:", t)
    if len(sys.argv) > 1:
        print(sys.argv[1])
        str_time = sys.argv[1]
    else:
        y = t.year
        m = t.month
        d = t.day
        str_time = str(y) + "-" + str(m) + "-" + str(d)
    # print(str_time.strftime('%Y-%m-%d %H:%M:%S.%f'))
    mysql_info = {
        'host': 'ip地址',
        'port': 3306,
        'password': '密码',
        'user': '用户名',
        'db': '数据库',
        'charset': 'utf8',
        'autocommit': True
    }
    result = '执行完成'
    conn = pymysql.connect(**mysql_info)
    # cur = conn.cursor(pymysql.cursors.DictCursor) #建立游标
    cur = conn.cursor()  # 建立游标
    cur.execute(sql)
    try:
        rows = cur.fetchall()
        print(rows)
        field = [t[0] for t in cur.description]
        rows = list(rows)
        rows.insert(0, field)
        with open('record.txt', 'w') as fout:
            #print >>fout, rows
            for row in rows:
                t = row[0]
                fout.write('%s,%s\n' % (t, row[1]))
        conn.close()
    except (ValueError):
        print("参数没有包含数字\n", ValueError)


if __name__ == '__main__':
    sql = "SELECT * FROM test;"
    op_mysql(sql)
```

## python下载腾讯，爱奇艺，优酷，土豆vip视频

- 敬请期待，更新中