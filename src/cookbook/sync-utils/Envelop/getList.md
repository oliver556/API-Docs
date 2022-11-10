---
title: getList
icon: script
order: 12
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 获取 DataSet
```js
EnvelopHelper.getList (array, entity, datasetName, nodeName);
```
:::

## 版本

`v4.3.1+`

## 参数

- `array` （Array）：数组
- `entity`（Object）：实体对象
- `datasetName`（String）：dataset 节点名
- `nodeName`（String）：节点名

## 返回

-（Array）：获取 array

## 例子

```js
EnvelopHelper.getList(array, envelop2.getBody(), 'dataset');
EnvelopHelper.getList(array, envelop2.getBody(), 'dataset', 'test');
```
