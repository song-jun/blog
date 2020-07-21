/*
封装全局localStorage调用方法
*/

function setItem(key, value, time = (24 * 60 * 60 * 1000)) {
  var curTime = new Date().getTime() + time
  localStorage.setItem(key, JSON.stringify({ data: value, time: curTime }))
}

function removeItem(key) {
  localStorage.removeItem(key)
}

function getItem(key) {
  var data = localStorage.getItem(key)
  if (data) {
    var dataObj = JSON.parse(data)
    if (new Date().getTime() > dataObj.time) {
      console.log('信息已过期')
      localStorage.removeItem(key)
      return null
    } else {
      var dataObjDatatoJson
      if (typeof dataObj.data === 'string') {
        try {
          dataObjDatatoJson = JSON.parse(dataObj.data)
        } catch (e) {
          dataObjDatatoJson = dataObj.data
        }
      } else {
        dataObjDatatoJson = dataObj.data
      }
      return dataObjDatatoJson
    }
  } else {
    return null
  }
}

export default {
  setItem,
  getItem,
  removeItem
}
