/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2020-07-16 12:15:36
 * @LastEditors: MrSong
 * @LastEditTime: 2020-07-21 15:32:16
 */
const nav = require('./navigator')
const sidebar = require('./sidebar')
console.log('log', nav);
module.exports = {
  base: '/',
  title: '君陌离的博客',
  description: '君陌离的博客',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://g.alicdn.com/de/prismplayer/2.8.8/skins/default/aliplayer-min.css' }],
    //360站长的验证代码
    ["meta", { name: "360-site-verification", content: "95d9cb542ac47e58446549ed041f7c68" }],
    ["script", { src: "/assets/js/autopush-360.js" }],
    ["script", { src: "/assets/js/autopush-baidu.js" }],
    ["script", { src: "https://vm.gtimg.cn/tencentvideo/txp/js/txplayer.js" }],
    ["script", { src: "https://g.alicdn.com/de/prismplayer/2.8.8/aliplayer-min.js" }],
  ],
  themeConfig: {
    logo: '/images/basic.png',
    displayAllHeaders: true,
    nav: nav,
    sidebarDepth: 2,
    sidebar: sidebar,
    smoothScroll: true,
    url: 'http://www.songjun520.cn/images',
  },
  markdown: {
    lineNumbers: true
  },
  plugins: {
    'copy-code': {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: 'Copy successfully and then paste it for use.', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    },
    '@vuepress/back-to-top': true,
    '@vuepress/last-updated': true,
    'vuepress-plugin-comment': {
      choosen: 'valine',
      // options选项中的所有参数，会传给Valine的配置
      options: {
        el: '#valine-vuepress-comment',
        appId: 'QFePTcjnDOa7Q2DgksgiG3fd-gzGzoHsz',
        appKey: 'AzVQ9L6jX8hklG8QTTdbRHM4'
      }
    }
  }
}