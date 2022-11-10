---
title: getBrowserInfo
icon: script
order: 2
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 获取浏览器的版本与类型
```js
CommonHelper.getBrowserInfo(kernel_desc, versions_desc);
```
:::

## 版本

`v4.3.1+`

## 参数

- `kernel_desc`（String）：浏览器内核描述文本
- `versions_desc`（String）：浏览器描述文本

## 返回

-（Object）：返回的浏览器信息

## 例子

```js
VerifyHelper.getBrowserInfo();
// => 
{
  full_versions: "84.0.4147.135"
  message: "当前浏览器内核：Chrome，版本号：84.0.4147.135"
  type: "Chrome"
  versions: 84
}
```
