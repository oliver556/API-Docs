---
title: isError
icon: script
order: 13
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 是否错误对象
```js
VerifyHelper.isError(val);
```
:::

## 版本

`v4.3.1+`

## 参数

- `val` （String）：需要判断的内容

## 返回

-（Boolean）：返回真或假

## 例子

```js
VerifyHelper.isError(new Error());
// => true
```
