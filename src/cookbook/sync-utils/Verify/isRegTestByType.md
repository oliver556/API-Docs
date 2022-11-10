---
title: isRegTestByType
icon: script
order: 1
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 文本校验
```js
VerifyHelper.isRegTestByType(val, type);
```
:::

## 版本

`v4.3.1+`

## 参数

- `val` （String）：传入值
- `type`（String）：类型

## 返回

-（Boolean）：返回真或假

## 例子

```js
VerifyHelper.isRegTestByType('123', 'isPureNumber');
// => true
```
