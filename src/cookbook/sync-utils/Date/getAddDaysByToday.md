---
title: getAddDaysByToday
icon: script
order: 2
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 获取当前天的前 n 天
```js
DateHelper.getAddDaysByToday(days, type, dateSymbol = '-', timeSymbol = ':');
```
:::

## 版本

`v4.3.1+`

## 参数

- `days` （String）：1后一天 -1前一天
- `type`（String）：年月日（格式：hms → 时分秒格式）
- `dateSymbol`（String）：默认为 '-'，日期连接符
- `timeSymbol`（String）：默认为 ':'，时分秒连接符

## 返回

-（String）：格式化后的时间字符串

## 例子

```js
DateHelper.getAddDaysByToday(1)
// => 2020-10-20
```
