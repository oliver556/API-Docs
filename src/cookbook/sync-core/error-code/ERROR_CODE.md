---
title: 核心模块错误码
icon: script
order: 1
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::info 说明
系统支撑错误码前缀统一为 `frame-0`
:::

## 一. 引入

```js
import { ERROR_CODE, getErrorInfo } from '@syncsoft/sync-core';
```

## 二. 使用

```js
/**
 * @Description: 错误码基础格式
 * 
 * 错误码基础前缀 + '4位流水号' + 错误码基础分隔符号 + '错误提示信息';
 *
 * @param: { String } → 错误码
 *
 * @return: 
 * {
 *   code: 'xxx',
 *   message: 'xxx'
 * }
 */
getErrorInfo(ERROR_CODE.ENVELOP_IS_EMPTY);
```

## 三. 错误码常量

```js
NO_LICENSE: {
  CODE: '9999',
  MESSAGE: 'license校验失败！'
}

SYSTEM_API_ERROR: {
  CODE: '0023',
  MESSAGE: '系统接口异常！'
},
  
NETWORK_TIMEOUT: {
  CODE: '0022',
  MESSAGE: '系统接口请求超时！'
},
    
NETWORK_ERROR: {
  CODE: '0021',
  MESSAGE: '后端接口连接异常！'
},
      
IS_NO_FILES: {
  CODE: '0020',
  MESSAGE: '您所需要下载的文件不存在！'
},

IS_NO_LOGIN: {
  CODE: '0019',
  MESSAGE: '登录失效，请重新登录！'
},

SIMPLE_ENCRYPT_IS_EMPTY: {
  CODE: '0018',
  MESSAGE: '加签参数为空，请检查是否传入参数！'
},

ENVELOP_IS_HEADER_EMPTY: {
  CODE: '0017',
  MESSAGE: '后端返回报文header为空，请联系管理员！'
},

ENVELOP_IS_BODY_EMPTY: {
  CODE: '0016',
  MESSAGE: '后端返回报文body为空，请联系管理员！'
},

NETWORK_505: {
  CODE: '0015',
  MESSAGE: '505：http版本不支持该请求'
},

NETWORK_504: {
  CODE: '0014',
  MESSAGE: '504：网络超时'
},


NETWORK_503: {
  CODE: '0013',
  MESSAGE: '503：服务不可用'
},


NETWORK_502: {
  CODE: '0013',
  MESSAGE: '502：网络错误-无效网关'
},

NETWORK_501: {
  CODE: '0012',
  MESSAGE: '501：网络未实现'
},

NETWORK_500: {
  CODE: '0011',
  MESSAGE: '500：服务器错误'
},

NETWORK_408: {
  CODE: '0010',
  MESSAGE: '408：请求超时'
},

 
NETWORK_405: {
  CODE: '0009',
  MESSAGE: '405：请求方法未允许'
},

NETWORK_404: {
  CODE: '0008',
  MESSAGE: '404：请求错误，未找到该资源'
},

NETWORK_403: {
  CODE: '0007',
  MESSAGE: '403：服务器拒绝请求'
},

 NETWORK_401: {
   CODE: '0006',
   MESSAGE: '401：未授权，请重新登录'
 },

NETWORK_400: {
  CODE: '0005',
  MESSAGE: '400：错误请求'
},

ENVELOP_IS_EMPTY: {
  CODE: '0004',
  MESSAGE: '后端返回报文为空，请联系管理员！'
},

SIGN_NO_FOUND_END: {
  CODE: '0003',
  MESSAGE: '签名认证没有结尾，请联系管理员！'
},

SIGN_NO_FOUND: {
  CODE: '0002',
  MESSAGE: '没有签名认证，请联系管理员！'
},


SIGN_DIFFERENT: {
  CODE: '0001',
  MESSAGE: '前后端签名不一致，请联系管理员！'
},

NO_DIFFERENT: {
  CODE: '0000',
  MESSAGE: '请后端交互报文模式正常！'
}
```
