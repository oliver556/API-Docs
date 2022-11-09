---
title: getTrim
icon: script
order: 7
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 去除字符串空格（默认没有传值就是1）
```js
StringHelper.getTrim(str, type = 1);
```
:::

## 版本

`v4.3.1+`

## 参数

- `str` （String）：需要修改的数值
- `type`（Number）：1-所有空格  2-前后空格  3-前空格 4-后空格

## 返回

-（String）：去除掉空格的数值

## 例子

```js
StringHelper.getTrim(' 1 2 3 ', 1)
// => '123'
```
