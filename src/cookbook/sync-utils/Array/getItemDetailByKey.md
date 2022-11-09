---
title: getItemDetailByKey
icon: script
order: 1
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

# 数组类


:::tip 通过 key 值查找对应的 item
```js
ArrayHelper.getItemDetailByKey(key, value, list);
```
:::

## 版本

`v4.3.1+`

## 参数

- `key` （String）：要查找的对象的键名
- `value` （String）：要查找对象的键名对应值
- `list`（Array）：原数组

## 返回

-（Object）：返回符合条件的对象

## 例子

```js
ArrayHelper.getItemDetailByKey('key', '1', [{key: '1', value: '面包'}, {key: '2', value: '奶茶'}])
// => {key: '1', value: '面包'}
```
