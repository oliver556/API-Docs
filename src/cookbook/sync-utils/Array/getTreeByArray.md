---
title: getTreeByArray
icon: script
order: 2
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

# 数组类


:::tip 数组转 tree
```js
ArrayHelper.getTreeByArray(list = [], nodeName, onlyChild);
```
:::

## 版本

`v4.3.1+`

## 参数

- `list` （Array）：原数组
- `nodeName` （Object）：父节点 id 对应的字段和子节点 id 对应的字段的合集
- `onlyChild`（Boolean）：是否增加 `disabled = true`



## 返回

-（Object）：返回符合条件的对象

## 例子

```js
ArrayHelper.getItemDetailByKey('key', '1', [{key: '1', value: '面包'}, {key: '2', value: '奶茶'}])
// => {key: '1', value: '面包'}
```
