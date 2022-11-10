---
title: isSymbol
icon: script
order: 14
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 是否 Symbol 函数
```js
VerifyHelper.isSymbol(val);
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
VerifyHelper.isSymbol(new Symbol());
// => true
```
