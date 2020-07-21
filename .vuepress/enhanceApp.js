/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2020-07-16 12:15:36
 * @LastEditors: MrSong
 * @LastEditTime: 2020-07-18 10:15:38
 */ 
import { checkAuth } from './login/helper'
import Login from './login/Login'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import request from './utils/request'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Element);
  Vue.prototype.$http = request;
  Vue.mixin({
    mounted() {
      const doCheck = () => {
        if (!checkAuth()) {
          return;
          this.$dlg.modal(Login, {
            width: 375,
            height: 350,
            title: '用户登陆',
            singletonKey: 'employee-login',
            maxButton: false,
            closeButton: false,
            callback: data => {
              if (data === true) {
                // do some stuff after login
              }
            }
          })
        }
      }
      if (this.$dlg) {
        doCheck()
      } else {
        import('v-dialogs').then(resp => {
          Vue.use(resp.default)
          this.$nextTick(() => {
            doCheck()
          })
        })
      }
    }
  })
}