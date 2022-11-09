---
title: jsonUtils 工具类
icon: script
order: 1
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

::: info 说明
JsonUtils  类是一个工具库，主要是提供给业务系统对 json 报文进行解包、打包所使用，一般业务系统只需要操作该工具类就可以完成 json 报文的相关操作
:::

## 一. 引入

```js
import { Envelop, jsonUtils } from '@syncsoft/sync-core';
```

## 二. Api

### 1. doRequest(String, Envelop)

> 根据提供的完整 json 报文对象，进行解析后放入到 Envelop 对象中

```js
/**
 * @Description: 根据提供的完整 json 报文对象，进行解析后放入到 Envelop 对象中
 *
 * @param: { String } → 完整的 json 报文
 * @param: { Envelop } → 存放报文内容的实体
 *
 * @return: { Envelop } → 报文体
 */
let _envelop = new Envelop();
jsonUtils.doRequest('xxx', _envelop);
```

### 2. doResponse(Envelop)

> 根据提供的完整报文对象，打包为一个完整的 json 报文

```js
/**
 * @Description: 根据提供的完整报文对象，打包为一个完整的 json 报文
 *
 * @param: { Envelop } → 存放报文内容的实体
 *
 * @return: { String } → 打包后完整的 json 报文
 */
let _envelop = new Envelop();
jsonUtils.doResponse(_envelop);
```

### 3. doErroe(String)

> 根据提供的错误信息，打包成错误信息报文

```js
/**
* @Description: 根据提供的错误信息，打包成错误信息报文
*
* @param: { Envelop } → 存放报文内容的实体
*
* @return: { String } → 打包好的错误信息报文
*
* 错误报文结构如下：↓
*
* {
*   'header': {
*     'default': {
*       'success': 'false',
*         'code': 'xxx',
*         'message': 'xxx'
*     }
*   },
*   'body': {}
* }
*/
jsonUtils.doError('xxx');
```
