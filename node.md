## nodeJs 爬虫

cheerio

```js
const https = require('https')
// const http = require('http') /* 方式二时使用*/
const fs = require('fs')
const cheerio = require('cheerio')
const request = require('request')
const path = require('path');

const imgDir = path.join(__dirname, 'img');

let url = 'https://www.xxxxxx.com/'

https.get(url, (res)=>{
    // 安全判断
    const {statusCode} = res
    const contentType = res.headers['content-type']
    console.log(statusCode, contentType)

    let err = null
    if (statusCode !== 200) {
        err = new Error('请求状态错误')
    } else if (!/^text\/html/.test(contentType)) {
        err = new Error('请求类型错误')
    }

    if (err) {
        console.log(err)
        res.resume() //重置缓存
        return false
    }

    let resData = ''
    res.on('data', (data)=>{
        resData += data.toString('utf8')
    })
    res.on('end', ()=>{
        //将请求数据保存在本地
        let $ = cheerio.load(resData)
        $('img').each((index, el) => {
            let imgUrl = $(el).attr('src')
            // console.log($(el).attr('src'))
            if (imgUrl) {
                let filename = imgUrl.split('/').pop()
                /* 方式一*/
                request('http:'+imgUrl).pipe(fs.createWriteStream(imgDir + '/' + filename));
                /* 方式二*/
                // var req = http.get('http:'+imgUrl, function (res) {
                //     var imgData = "";
                //     res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
                //     res.on("data", function (chunk) {
                //       imgData += chunk;
                //     });
                //     res.on("end", function () {
                //      let filename = imgUrl.split('/').pop()
                //       fs.writeFile(imgDir + '/' + filename, imgData, "binary", function (err) {
                //         if (err) {
                //           console.log("保存失败");
                //         }
                //         console.log("保存成功");
                //       });
                //     });
                //     res.on("error", function (err) {
                //       console.log("请求失败");
                //     });
                //   });
            }
            
        });
        console.log('数据传输完毕')
    })
}).on('error', (err)=>{
    console.log('请求错误')
})
```