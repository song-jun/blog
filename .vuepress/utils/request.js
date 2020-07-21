/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2020-06-01 19:39:46
 * @LastEditors: MrSong
 * @LastEditTime: 2020-07-17 19:49:37
 */
import axios from 'axios'
import Qs from 'qs'

const service = axios.create({
  baseURL: 'http://106.52.97.93:3000',
  timeout: 5000,
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  transformRequest: function (params) {
    console.log('transformRequest', params);
    return Qs.stringify(params, { allowDots: true, skipNulls: true })
  },
  paramsSerializer: function (params) {
    console.log('paramsSerializer', params);
    return Qs.stringify(params, { allowDots: true, skipNulls: true })
  }
})

service.interceptors.request.use(
  config => {
    let token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response
    if (res.status === 200) {
      const data = res.data
      if (data.code === 1) {
        return Promise.resolve(data)
      } else if (data.code === 403) {
        return Promise.reject(data || 'error')
      } else if (data.code === 100003 || data.code === 100004 || data.code === 100005 || data.code === 100006) {

        return Promise.reject(data || 'error')
      } else if (data.code === 100008) {

        return Promise.reject(data || 'error')
      } else if (data.code === 100010) {
        return Promise.resolve(data)
      } else {

        return Promise.reject(data || 'error')
      }
    } else {
      return Promise.reject(res || 'error')
    }
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
