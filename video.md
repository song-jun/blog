---
pageClass: custom-page-class-video
footer: MIT Licensed | Copyright © 2020-present MrSong
---

## 腾讯 video 引用

<p class='p-title'>源码展示<p>

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="viewport"
    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui" />
  <meta charset="UTF-8">
  <link href="https://cdn.bootcss.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
  <title>使用JSAPI</title>
</head>

<body>
  <div id="container"></div>
  <p style="padding:10px">
    <button type="button" class="btn btn-primary" onclick="player.play()">播放</button>
    <button type="button" class="btn btn-success" onclick="player.pause()">暂停</button>
  </p>
</body>
<!-- 使用相对协议，同时支持http和https -->
<script src='//vm.gtimg.cn/tencentvideo/txp/js/txplayer.js'></script>
<script>
  var player = new Txplayer({
    containerId: 'container',
    vid: 'l0539vqs140',
    width: '100%',
    height: screen.availHeight / 3
  });
  player.on('ready', () => {
    console.log('player ready');
  });
  player.on('volumeChange', (volume) => {
    console.log('player volumechange:', volume);
  });
  player.on('playStateChange', (state) => {
    console.log('player playStateChange:', state);
  });
</script>

</html>
```

<p class='p-show'>效果展示<p>

<div class='video-box' id="container">
  <img :src="$site.base+'images/1.png'" alt="">
</div>

## bilibili视频

<p class='p-title'>源码展示<p>

```html
<div class='video-box' style="position: relative; width: 100%;height: 400px;">
  <iframe src="//player.bilibili.com/player.html?aid=27107052&cid=46709183&page=1&as_wide=1&high_quality=1&danmaku=0"
    scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"
    style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"> </iframe>
</div>
```

<p class='p-show'>效果展示<p>

<div class='video-box video-old' style="position: relative; width: 100%;height: 400px;">
  <iframe src="//player.bilibili.com/player.html?aid=27107052&cid=46709183&page=1&as_wide=1&high_quality=1&danmaku=0"
    scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"
    style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"> </iframe>
</div>

## bilibili视频 移动端适配

<p class='p-title'>源码展示<p>

```html
<div style="position: relative; padding: 30% 45%;">
  <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
    src="https://player.bilibili.com/player.html?bvid=BV1px411b7rd&cid=22385522&page=1&as_wide=1&high_quality=1&danmaku=0"
    frameborder="no" scrolling="no" framespacing="0" allowfullscreen="true"></iframe>
</div>
```

<p class='p-show'>效果展示<p>

<div class='video-box' style="position: relative; padding: 30% 45%;">
  <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
    src="https://player.bilibili.com/player.html?bvid=BV1px411b7rd&cid=22385522&page=1&as_wide=1&high_quality=1&danmaku=0"
    frameborder="no" scrolling="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

## Aliplayer视频

<p class='p-title'>源码展示<p>

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="IE=edge" >
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
  <title>Aliplayer Functions</title>
  <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.8.8/skins/default/aliplayer-min.css" />
  <script type="text/javascript" charset="utf-8" src="https://g.alicdn.com/de/prismplayer/2.8.8/aliplayer-min.js"></script>
</head>
<body>
<div id="player-con"></div>
<script>
  var player = new Aliplayer({
    id: "player-con",
    source: "//player.alicdn.com/video/editor.mp4",
    width: "100%",
    height: "500px",
    cover: 'https://img.alicdn.com/tps/TB1EXIhOFXXXXcIaXXXXXXXXXXX-760-340.jpg',
    /* To set an album art, you must set 'autoplay' and 'preload' to 'false' */
    autoplay: false,
    preload: false,
    isLive: false
  }, function (player) {
    console.log("The player is created");
  });
</script>
</body>
</html>
```

<p class='p-show'>效果展示<p>

<template>
  <div class='video-box video-old' id="player-con">
    <img :src="$site.base+'images/4.png'" alt="">
  </div>
</template>

## H5原生video

<p class='p-title'>源码展示<p>

```html
<video x5-video-player-fullscreen="true" preload="auto" x5-video-player-type="h5" x5-video-orientation="portraint"
  width="100%" controls height="400" src="//player.alicdn.com/video/editor.mp4">
</video>
```
<p class='p-show'>效果展示<p>

<video class='video-box video-old' x5-video-player-fullscreen="true" preload="auto" x5-video-player-type="h5" x5-video-orientation="portraint"
  width="100%" controls height="400" src="//player.alicdn.com/video/editor.mp4">
</video>

<style lang="scss" scoped>
  .p-title{
    margin-top:1rem!important;
    line-height: 1.7!important;
  }
  .p-show{
    margin-bottom: 1rem;
  }
  .video-box{
    border:1px solid #ddd;
    border-radius:10px;
    overflow:hidden;
    max-width:960px;
  }
</style>

<!-- <script>
  setTimeout(() => {
    var player = new Txplayer({
      containerId: 'container',
      vid: 'l0539vqs140',
      width: '100%',
      height: screen.availHeight / 3
    });
    player.on('ready', () => {
      console.log('player ready');
    });
    player.on('volumeChange', (volume) => {
      console.log('player volumechange:', volume);
    });
    player.on('playStateChange', (state) => {
      console.log('player playStateChange:', state);
    });
    var aliplayer = new Aliplayer({
      id: "player-con",
      source: "//player.alicdn.com/video/editor.mp4",
      width: "100%",
      height: "400px",
      cover: 'https://img.alicdn.com/tps/TB1EXIhOFXXXXcIaXXXXXXXXXXX-760-340.jpg',
      autoplay: false,
      preload: false,
      isLive: false
    }, function (player) {
      console.log("The player is created");
    });
  }, 1000);
</script> -->