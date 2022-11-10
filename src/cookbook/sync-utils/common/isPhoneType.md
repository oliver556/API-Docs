---
title: isPhoneType
icon: script
order: 3
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 判断是什么类型手机
```js
CommonHelper.isPhoneType();
```
:::

## 版本

`v4.3.1+`

## 参数

- `kernel_desc`（String）：浏览器内核描述文本
- `versions_desc`（String）：浏览器描述文本

## 返回

-（String）：返回手机类型（Android | iPhone | iPad | Windows Phone）

## 例子

```js
VerifyHelper.isPhoneType();
// => iPhone
```
