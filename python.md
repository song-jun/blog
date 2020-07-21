## python操作

链接mysql

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