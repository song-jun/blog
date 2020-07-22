/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2020-07-16 12:15:36
 * @LastEditors: MrSong
 * @LastEditTime: 2020-07-21 16:44:35
 */
// module.exports = {
//   '/': [
//       ['/html', 'HTML基础知识'],
//       ['/test', 'vuePress入门'],
//       ['/js', 'Js函数封装'],
//       ['/node', 'nodeJs基础'],
//       ['/liunx', 'liunx入门'],
//       ['/python', 'python入门']
//   ],
// }
module.exports = [
  ['/', 'Home'],
  // ['/html', 'HTML基础知识'],
  // ['/js', 'Js函数封装'],
  // ['/node', 'nodeJs基础'],
  // ['/liunx', 'liunx入门'],
  // ['/python', 'python入门'],
  {
    title: "HTML基础知识",
    collapsable: true,
    children: [
      ['/html', 'HTML']
    ]
  },
  {
    title: "nodeJs基础",
    collapsable: true,
    children: [
      ['/node', 'nodeJs']
    ]
  },
  {
    title: "动态数据",
    collapsable: true,
    children: [
      ['/data', '数据联动']
    ]
  },
  {
    title: "Js函数封装",
    collapsable: true,
    children: [
      ['/js', '函数封装']
    ]
  },
  {
    title: "操作指令",
    collapsable: true,
    children: [
      ['/liunx', 'Liunx Or Windows']
    ]
  },
  {
    title: "python入门",
    collapsable: true,
    children: [
      ['/python', 'python']
    ]
  },
  // {
  //     title: "VuePress",
  //     collapsable: true,
  //     children:[
  //         ['/test', 'VuePressLogin']
  //     ]
  // },
  {
    title: "git使用",
    collapsable: true,
    children: [
      ['/git', 'git命令']
    ]
  },
  {
    title: "网页端引用video",
    collapsable: true,
    children: [
      ['/video', '视频引用']
    ]
  },
  ['/sponsor', 'CONTACT'],
]