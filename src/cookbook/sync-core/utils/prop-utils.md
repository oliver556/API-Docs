---
title: propUtils 工具类
icon: script
order: 1
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

## 一. 引入

```js
import { propUtils } from '@syncsoft/sync-core';
```

## 二. Api

### 1. init()

```js
/**
 * @Description: 全局初始化
 *
 * @return: 全局参数类
 */
// 声明个函数用户调用全局初始化内容
getProp () {
  return propUtils.init();
}

// 获取工程名字
this.getProp().getAppName();

// 修改工程名字
this.getProp().setAppName('xxx');

// 获取用户代理
this.getProp().getUserAgent();

// 获取加签方式
this.getProp().getEncrypt(); // 默认 none

// 修改加签方式
this.getProp().setEncrypt('xxx');

// 修改按钮权限
this.getProp().setBtnAuth('xxx');

// 修改下载请求响应超时时长
this.getProp().setFileTimeout('xxx'); // 默认 300000

// 修改请求响应超时时长
this.getProp().setTimeout('xxx'); // 默认 10000

// 获取请求数据类型
this.getProp().getDataType(); // 默认 json

// 修改请求数据类型
this.getProp().setDataType('xxx');

// 获取请求数据类型
this.getProp().getCustomNoLoginMsg();

// 设置自定义登录超时提示信息
this.getProp().setCustomNoLoginMsg('xxx'); // 默认 ''
```
