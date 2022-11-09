---
title: getSexByIdCard
icon: script
order: 2
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 根据身份证号码判断是男是女
```js
StringHelper.getSexByIdCard(idCard);
```
:::

## 版本

`v4.3.1+`

## 参数

- `idCard`（String）：15/18位书身份证字符串

## 返回

-（String）：female → 女，male → 男

## 例子

```js
StringHelper.getSexByIdCard('35058219921129505X');
// => male
```
