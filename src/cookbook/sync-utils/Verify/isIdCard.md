---
title: isIdCard
icon: script
order: 21
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 身份证校验
```js
VerifyHelper.isIdCard(id, type = 1);
```
:::

## 版本

`v4.3.1+`

## 参数

- `id` （String）：身份证号ID
- `type`（String）：1-安全等级1 ，2-安全等级2

## 返回

-（Boolean）：返回真或假

## 例子

```js
VerifyHelper.isIdCard('35058219921129505X');
// => true
```
