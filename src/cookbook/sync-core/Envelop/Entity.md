---
title: Entity 类
icon: script
order: 1
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

::: info 说明
`Entity` 类主要代表一个完整业务逻辑的容器集合，可以理解为单笔、多笔、一 对多、多对多业务类型的集合，其提供了用于操作这些容器的方法
:::

## 一. 实例化

```js
import { Envelop } from '@syncsoft/sync-core';

let _envelop = new Envelop();
```

## 二. Api

### 1. setNode(Data)

> 将 Data 添加如 Entity 实体默认的 default 节点中

```js
/**
 * @Description: 将 Data 添加如 Entity 实体默认的 default 节点中
 *
 * @param: { Data } → Data 对象
 *
 * @return: 无
 */
_envelop.getBody().setNode('xxx');
```

### 2. setNode(String, Data)

> 将 Data 添加到 Entity 实体中，并设置到 name 节点e

```js
/**
 * @Description: 将 Data 添加到 Entity 实体中，并设置到 name 节点
 *
 * @param: { String } → 节点名称
 * @param: { Data } → Data 属性值
 *
 * @return: 无
 */
_envelop.getBody().setNode('xxx', 'xxx');
```

### 3. setNodeItem(String, String)

> 将一个属性值，直接添加到 Entity 实体中名称为 default 的节点下

```js
/**
 * @Description: 将 Data 添加到 Entity 实体中，并设置到 name 节点
 *
 * @param: { String } → 属性名称
 * @param: { String } → 属性值
 *
 * @return: 无
 */
_envelop.getBody().setNodeItem('xxx', 'xxx');
```

### 4. setNodeItem(String, String, String)

> 将一个属性值，直接添加到 Entity 实体中特定名称的节点下

```js
/**
 * @Description: 将一个属性值，直接添加到 Entity 实体中特定名称的节点下
 *
 * @param: { String } → 节点名称
 * @param: { String } → 属性名称
 * @param: { String } → 属性值
 *
 * @return: 无
 */
_envelop.getBody().setNodeItem('xxx', 'xxx', 'xxx');
```

### 5. setNodeDataset(String, DataSet)

> 将 DataSet 直接添加到 Entity 实体中名称为 default 的节点下

```js
/**
 * @Description: 将 DataSet 直接添加到 Entity 实体中名称为 default 的节点下
 *
 * @param: { String } → 属性名称
 * @param: { DataSet } → DataSet 属性值
 *
 * @return: 无
 */
_envelop.getBody().setNodeDataset('xxx', 'xxx');
```

### 6. setNodeDataset(String, String, DataSet)

> 将 DataSet 直接添加到 Entity 实体中指定名称节点下

```js
/**
 * @Description: 将 DataSet 直接添加到 Entity 实体中名称为 default 的节点下
 *
 * @param: { String } → 节点名称
 * @param: { String } → 属性名称
 * @param: { DataSet } → DataSet 属性值
 *
 * @return: 无
 */
_envelop.getBody().setNodeDataset('xxx', 'xxx','xxx');
```

### 7. getNode()

> 获取节点名称为默认 default 的节点

```js
/**
 * @Description: 获取节点名称为默认 default 的节点
 *
 * @return: { Data } → 默认 Data 属性值
 */
_envelop.getBody().getNode();
```

### 8. getNode(String)

> 获取回特定节点名称的节点

```js
/**
 * @Description: 获取回特定节点名称的节点
 *
 * @param: { String } → 节点名称
 *
 * @return: { Data } → 特定 Data 属性值
 */
_envelop.getBody().getNode();
```

### 9. getNodeItem(String)

> 根据属性名称，从 Entity 中获取默认节点属性值

```js
/**
 * @Description: 根据属性名称，从 Entity 中获取默认节点属性值
 *
 * @param: { String } → 节点名称
 *
 * @return: { String } → 属性值
 */
_envelop.getBody().getNodeItem('xxx');
```

### 10. getNodeItem(String, String)

> 根据属性名称，从 Entity 中获取自定义节点属性值

```js
/**
 * @Description: 根据属性名称，从 Entity 中获取自定义节点属性值
 *
 * @param: { String } → 节点名称
 * @param: { String } → 属性名称
 *
 * @return: { String } → 属性值
 */
_envelop.getBody().getNodeItem('xxx', 'xxx');
```

### 11. getNodeDataSet(String)

> 根据属性名称，从 Entity 中获取节点名称为 default 下特定名称的多笔记录集合 DataSet

```js
/**
 * @Description: 根据属性名称，从 Entity 中获取节点名称为 default 下特定名称的多笔记录集合 DataSet
 *
 * @param: { String } → 节点名称
 *
 * @return: { DataSet } → DataSet 属性值
 */
_envelop.getBody().getNodeDataSet('xxx');
```

### 12. getNodeDataSet(String, String)

> 根据属性名称，从 Entity 中获取节点名称为 default 下特定名称的多笔记录集合 DataSet

```js
/**
 * @Description: 根据属性名称，从 Entity 中获取节点名称为 default 下特定名称的多笔记录集合 DataSet
 *
 * @param: { String } → 节点名称
 * @param: { String } → 属性名称
 *
 * @return: { DataSet } → DataSet 属性值
 */
_envelop.getBody().getNodeDataSet('xxx', 'xxx');
```

