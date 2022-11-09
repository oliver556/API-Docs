---
title: getDetailInfoByIdCard
icon: script
order: 4
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 根据身份证号码获取出生日期,性别,年龄
```js
StringHelper.getDetailInfoByIdCard(idCard)
```
:::

## 版本

`v4.3.1+`

## 参数

- `idCard`（String）：15/18位书身份证字符串

## 返回

-（Object）：相对应的出生日期，性别，年龄

## 例子

```js
StringHelper.getDetailInfoByIdCard('35058219921129505X');
// => 
{
  birthDate: '1992-11-29',
  sex: 'male',
  age: '28'
}
```
