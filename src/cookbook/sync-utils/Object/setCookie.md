---
title: setCookie
icon: script
order: 1
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 写入 cookies
```js
ObjectHelper.setCookie(name, value, time);
```
:::

## 版本

`v4.3.1+`

## 参数

- `name` （String）：写入的 cookies 名字
- `value`（String）：写入的 cookies 值
- `time`（String）：写入的 cookies 时间

## 返回

-（String）：无

## 例子

```js
ObjectHelper.setCookie('key', '1', 'h12')
// => 成功
```
