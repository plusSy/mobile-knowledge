## H5判断运行环境的方法

### window
```js
window.navigator // 对 Navigator 对象的只读引用

window.__wxjs_environment === 'miniprogram'  // 是否是微信小程序环境
```


### navigator.userAgent

```js
/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)  // 是否是从ios系统发出

/(Android)/i.test(navigator.userAgent) // 是否是从 android 系统发出

/MicroMessenger/i.test(navigator.userAgent) // 是否是 从微信内置浏览器 发出
```