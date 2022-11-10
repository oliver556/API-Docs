---
title: putList
icon: script
order: 13
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 设置 DataSet
```js
EnvelopHelper.putList (array, entity, datasetName, nodeName);
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

-（Envelop）：envelop

## 例子

```js
EnvelopHelper.putList(array, envelop2.getBody(), 'dataset');
EnvelopHelper.putList(array, envelop2.getBody(), 'dataset', 'test');
```
