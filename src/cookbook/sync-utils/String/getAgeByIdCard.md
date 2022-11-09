---
title: getAgeByIdCard
icon: script
order: 3
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 根据身份证号码获取年龄
```js
StringHelper.getAgeByIdCard(idCard);
```
:::

## 版本

`v4.3.1+`

## 参数

- `idCard`（String）：15/18位书身份证字符串

## 返回

-（Number）：身份证上的年龄

## 例子

```js
StringHelper.getAgeByIdCard('35058219921129505X');
// => 28
```
