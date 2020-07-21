## 联系方式

- QQ方式
<!-- ![QQ方式](images/QQ.png) -->

<template>
<div class='img-q'>
  <img :src="$site.base+'images/QQ.png'" alt="">
</div>
</template>

## 赞赏

- 亲的赞赏，犹如滔滔江水，连绵不绝！

<template>
  <div class='img-box'>
    <img :src="$site.base+'images/zfb.jpg'" alt="">
    <img :src="$site.base+'images/zs.jpg'" alt="">
    <img :src="$site.base+'images/wx.jpg'" alt="">
  </div>
</template>

<style lang="scss" scoped>
.img-q {
  img {
    height: 400px;
  }
}

.img-box {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 240px;
    margin: 0 20px;
    border: 1px solid #ddd;
  }
}

@media screen and (min-width: 320px) and (max-width:768px) {
  .img-q {
    img {
      width: 100%;
      height: auto;
    }
  }

  .img-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 100%;
      margin: 20px 0;
      border: 1px solid #ddd;
    }
  }
}
</style>
