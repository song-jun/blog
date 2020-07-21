/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2020-05-28 18:58:21
 * @LastEditors: MrSong
 * @LastEditTime: 2020-06-12 15:18:41
 */
const hostUrl = 'http://106.52.97.93:3000';
export default {
  // 搜索
  serach() {
    return hostUrl + '/search/index';
  },
  get_note() {
    return '/get_note';
  },
  get_md_blog() {
    return '/get_md_blog';
  },
  user_visit(){
    return '/user_visit';
  },
  add_blog_comment(){
    return '/add_blog_comment';
  },
  get_blog_comment(){
    return '/get_blog_comment';
  },
  get_leaveword(){
    return '/get_leaveword';
  },
  add_leaveword(){
    return '/add_leaveword';
  }
};