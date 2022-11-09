---
title: setDefaultForEmpty
icon: script
order: 5
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 空字符串转成 `-`
```js
StringHelper.setDefaultForEmpty(value, formatSymbol);
```
:::

## 版本

`v4.3.1+`

## 参数

- `value` （String）：要转换判断的值
- `formatSymbol`（String）：替换的文本值

## 返回

-（String）：格式化后的值

## 例子

```js
StringHelper.setDefaultForEmpty('', '-')
// => '-'
```
