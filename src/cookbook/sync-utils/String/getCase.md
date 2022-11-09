---
title: getCase
icon: script
order: 8
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 字母大小写切换
```js
StringHelper.getCase(str, type);
```
:::

## 版本

`v4.3.1+`

## 参数

- `str` （String）：需要修改的数值
- `type`（Number）：1-首字母大写  2-首页母小写  3-大小写转换 4-全部大写 5-全部小写

## 返回

-（String）：转换后的结果

## 例子

```js
StringHelper.getCase('abc', 1)
// => 'Abc'
```
