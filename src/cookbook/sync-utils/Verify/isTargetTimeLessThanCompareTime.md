---
title: isTargetTimeLessThanCompareTime
icon: script
order: 20
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 查询日期的比较
```js
VerifyHelper.isTargetTimeLessThanCompareTime(targetTime, compareTime, type = 'ymd');
```
:::

## 版本

`v4.3.1+`

## 参数

- `targetTime` （String）：目标时间
- `compareTime`（String）：比较时间
- `type`（String）：ymd: 年月日 / hmd: 年月日时分秒

## 返回

-（Boolean）：返回真或假

## 例子

```js
VerifyHelper.isTargetTimeLessThanCompareTime('2014-05-06', '2014-06-06');
// => true
```
