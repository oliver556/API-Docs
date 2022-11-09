---
title: getBirthByIdCard
icon: script
order: 1
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 根据身份证号码获取出生日期
```js
StringHelper.getBirthByIdCard(idCard);
```
:::

## 版本

`v4.3.1+`

## 参数

- `idCard`（String）：15/18位书身份证字符串

## 返回

-（String）：身份证日期字符串（格式：yyyy-MM-dd）

## 例子

```js
StringHelper.getBirthByIdCard('35058219921129505X');
// => 2020-11-29
```
