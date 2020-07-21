---
sidebar: true
footer: MIT Licensed | Copyright © 2020-present MrSong
---
## CSS特效

按钮边款特效

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>css hover</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .container {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #000;
    }

    a {
      position: relative;
      width: 100px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      margin: 45px;
      text-decoration: none;
      color: aqua;
      font-size: 20px;
      padding: 0 20px;
      text-transform: uppercase;
      transition: 0.5s;
      overflow: hidden;
      -webkit-box-reflect: below 1px linear-gradient(transparent, #1113);
    }

    a::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      border-top: 2px solid aqua;
      border-left: 2px solid aqua;
      transition: 0.5s;
      transition-delay: 0.5s;
    }

    a::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 20px;
      height: 20px;
      border-bottom: 2px solid aqua;
      border-right: 2px solid aqua;
      transition: 0.5s;
      transition-delay: 0.5s;
    }

    a:hover::before,
    a:hover::after {
      width: 100%;
      height: 100%;
      transition-delay: 0s;
    }

    a:hover {
      background-color: aqua;
      color: #000;
      box-shadow: 0 0 50px #21ebff;
      transition-delay: 0.3s;
    }

    a:nth-child(1) {
      filter: hue-rotate(150deg);
    }

    a:nth-child(3) {
      filter: hue-rotate(270deg);
    }

    a:nth-child(4) {
      filter: hue-rotate(400deg);
    }

    a:nth-child(5) {
      filter: hue-rotate(70deg);
    }
  </style>
</head>

<body>
  <div class="container">
    <a href="#">button1</a>
    <a href="#">button2</a>
    <a href="#">button3</a>
    <a href="#">button4</a>
    <a href="#">button5</a>
  </div>
</body>

</html>
```

## 效果展示

图片

<template>
  <div>
    <img :src="$site.base+'images/pig.png'" alt="">
  </div>
</template>
<style lang="scss">
</style>
