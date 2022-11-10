---
title: getFormatByTime
icon: script
order: 1
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 时间格式化
```js
DateHelper.getFormatByTime(time, formatSymbol);
```
:::

## 版本

`v4.3.1+`

## 参数

- `time` （Number | String | Date）：时间
- `formatSymbol`（String）：格式化后的字符串

## 返回

-（String）：格式化后的字符串

## 例子

```js
DateHelper.getFormatByTime('2018-1-29', '{y}/{M}/{d} {h}:{m}:{s}:{ss}')
// => 2018/01/29 00:00:00:00
```
