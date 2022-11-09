---
title: DataSet 类
icon: script
order: 3
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

> DataSet 类主要用于操作某张表的记录，可以理解为数据库中的某一张表。（对应 JS 中的 Array）

## 一. 实例化

```js
import { DataSet } from '@syncsoft/sync-core';

let _dataset = new DataSet();
```

### 1. setRow(Data)

> 将某个 Data 对象，附加到 DataSet 内，可以理解为在 DataSet 中附加一行

```js
/**
 * @Description: 添加某个 Data 对象到 DataSet 中
 *
 * @param: { Data } → Data 实例
 *
 * @return: { Boolean } → 结果值
 */
_dataset.setRow('xxx');
```

### 2. getRow(int)

> 获得 DataSet 中，索引位置为 int 的那一行

```js
/**
 * @Description: 获得 DataSet 中，索引位置为 int 的那一行
 *
 * @param: { Int } → 行位置，数组下标
 *
 * @return: { Data } → Data 实例数据
 */
_dataset.getRow('xxx');
```

