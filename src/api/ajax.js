/*
ajax请求函数模块
返回值: promise对象(异步返回的数据是: response.data)
 */
import axios from 'axios'
// ajax请求函数模块,m默认get请求多一些
export default function ajax (url, data={}, type='GET') {

  //高阶函数：接收函数的函数
  return new Promise(function (resolve, reject) {

    // 1，执行异步ajax请求
    let promise
    if (type === 'GET') {

      //,2，准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }

      //,3 发送get请求
      promise = axios.get(url)
    } else {
      // 4，发送post请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)
    }).catch(function (error) {
      //失败了调用reject()
      reject(error)
    })
  })
}

/*
const response = await ajax()
const result = response.data

const resule = await ajax()
 */

