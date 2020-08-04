/*
 * @Description:  判断环境
 * @Version: v0.0.1
 * @Autor: syl
 * @Date: 2020-08-04 15:11:47
 * @LastEditors: syl
 * @LastEditTime: 2020-08-04 15:37:56
 */
function getEnviroment () {
  return new Promise((resolve, reject) => {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      // 判断是否在浏览器下
      if (/(appID)/i.test(navigator.userAgent)) {
        resolve('app')
      } else if (/MicroMessenger/i.test(navigator.userAgent)) {
        if (window.__wxjs_environment !== 'miniprogram' || !window.__wxjs_environment) {
          resolve('web')
        } else {
          resolve('wx')
        }
      } else {
        resolve('web')
      }
    } else if (/(Android)/i.test(navigator.userAgent)) {
      if (/(appID)/i.test(navigator.userAgent)) {
        resolve('app')
      } else if (/MicroMessenger/i.test(navigator.userAgent)) {
        function ready () {
          if (window.__wxjs_environment === 'miniprogram') {
            resolve('wx')
          } else {
            resolve('web')
          }
        }

        if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
          document.addEventListener('WeixinJSBridgeReady', ready, false)
        } else {
          ready()
        }
      } else {
        resolve('web')
      }
    } else {
      resolve('web')
    }
  })
};