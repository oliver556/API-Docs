---
title: isSuccess
icon: script
order: 4
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 判断接口返回的是否有业务级的错误
```js
EnvelopHelper.isSuccess(envelop);
```
:::

## 版本

`v4.3.1+`

## 参数

- `envelop` （Envelop）：信封报文对象

## 返回

-（Boolean）：返回真或假

## 例子

```js
EnvelopHelper.isSuccess(envelop);
// => true
```
