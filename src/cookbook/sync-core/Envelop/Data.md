---
title: Data 类
icon: script
order: 2
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::info 说明
`Data` 类主要代表一个单笔的容器集合，可以解为数据库中的 1 条记录。（对应 JS 中的 Object）
:::

## 一. 实例化

```js
import { Data } from '@syncsoft/sync-core';

let _data = new Data();
```

## 二. Api

### 1. getStringItem(String)

> 根据属性名，获取改节点 String 结果值

```js
/**
 * @Description: 根据属性名，获取改节点 String 结果值
 *
 * @param: { String } → 属性名称
 *
 * @return: { String } → 结果值
 */
_data.getStringItem('xxx');
```

### 2. getIntegerItem(String)

> 根据属性名称，获得该节点的 Integer 结果值

```js
/**
 * @Description: 根据属性名称，获得该节点的 Integer 结果值
 *
 * @param: { String } → 属性名称
 *
 * @return: { Interger } → 结果值
 */
_data.getIntegerItem('xxx');
```

### 3. getInteger2Item(String)

> 根据属性名称，获得该节点的 Int 结果值

```js
/**
 * @Description: 根据属性名称，获得该节点的 Integer 结果值
 *
 * @param: { String } → 属性名称
 *
 * @return: { Integer } → 结果值
 */
_data.getInteger2Item('xxx');
```

### 4. getLongItem(String)

> 根据属性名称，获得该节点的 Long 结果值

```js
/**
 * @Description: 根据属性名称，获得该节点的 Long 结果值
 *
 * 由于 JS 中没有 Long 类型，所以暂返回 Number 类型
 *
 * @param: { String } → 属性名称
 *
 * @return: { Number } → 结果值
 */
_data.getLongItem('xxx');
```

### 5. getLong2Item(String)

> 根据属性名称，获得该节点的 Long 结果值

```js
/**
 * @Description: 根据属性名称，获得该节点的 Long 结果值
 * 
 * 由于 JS 中没有 Long 类型，所以暂返回 Number 类型
 *
 * @param: { String } → 属性名称
 *
 * @return: { Number } → 结果值
 */
_data.getLong2Item('xxx');
```

### 6. getBigDecimal(String)

> 根据属性名称，获取该节点 BigDecimal 结果值

```js
/**
 * @Description: 根据属性名称，获得该节点的 Long 结果值
 *
 * 由于 JS 中没有 BigDecimal 类型，所以暂返回 Number 类型
 *
 * @param: { String } → 属性名称
 *
 * @return: { Number } → BigDecimal 结果值
 */
_data.getBigDecimal('xxx');
```

### 7. getDataSet(String)

> 根据属性名称，获取该节点 DataSet 对象

```js
/**
 * @Description: 根据属性名称，获取该节点 DataSet 对象
 *
 * @param: { String } → 属性名称
 *
 * @return: { null || DataSet } → DataSet 结果值
 */
_data.getDataSet('xxx');
```

### 8. setStringItem(String, String)

> 根据属性名称，设置 String 值到该节点，有则替换

```js
/**
 * @Description: 根据属性名称，设置 String 值到该节点，有则替换
 *
 * @param: { String } → 属性名称
 * @param: { String } → 属性值
 *
 * @return: 无
 */
_data.setStringItem('xxx', 'xxx');
```

### 9. setIntegerItem(String, Integer)

> 根据属性名称，设置 Integer  值到该节点，有则替换

```js
/**
 * @Description: 根据属性名称，设置 Integer 值到该节点，有则替换
 *
 * 由于 JS 中没有 Integer 类型，所以入参二传 Number 类型
 *
 * @param: { String } → 属性名称
 * @param: { Number } → 属性值
 *
 * @return: 无
 */
_data.setIntegerItem('xxx', xxx);
```

### 10. setInteger2Item(String, int)

> 根据属性名称，设置 int 值到该节点，有则替换

```js
/**
 * @Description: 根据属性名称，设置 int 值到该节点，有则替换
 *
 * 由于 JS 中没有 int 类型，所以入参二传 Number 类型
 *
 * @param: { String } → 属性名称
 * @param: { Number } → 属性值
 *
 * @return: 无
 */
_data.setInteger2Item('xxx', xxx);
```

### 11. setLongItem(String, Long)

> 根据属性名称，设置 Long 值到该节点，有则替换

```js
/**
 * @Description: 根据属性名称，设置 Long 值到该节点，有则替换
 *
 * 由于 JS 中没有 Long 类型，所以入参二传 String 类型
 *
 * @param: { String } → 属性名称
 * @param: { String } → 属性值
 *
 * @return: 无
 */
_data.setLongItem('xxx', 'xxx');
```

### 12. setLong2Item(String, long)

> 根据属性名称，设置 long 值到该节点，有则替换

```js
/**
 * @Description: 根据属性名称，设置 long 值到该节点，有则替换
 *
 * 由于 JS 中没有 long 类型，所以入参二传 String 类型
 *
 * @param: { String } → 属性名称
 * @param: { String } → 属性值
 *
 * @return: 无
 */
_data.setLong2Item('xxx', 'xxx');
```

### 13. setBigDecimalItem(String, BigDecimal)

> 根据属性名称，设置 BigDecimal 值到该节点，有则替换

```js
/**
 * @Description: 根据属性名称，设置 BigDecimal 值到该节点，有则替换
 *
 * 由于 JS 中没有 BigDecimal 类型，所以入参二传 String 类型
 *
 * @param: { String } → 属性名称
 * @param: { String } → 属性值
 *
 * @return: 无
 */
_data.setBigDecimalItem('xxx', 'xxx');
```

### 14. setDataSet(String, DataSet)

> 根据属性名称，设置 DataSet 对象到该节点，有则替换

```js
/**
 * @Description: 根据属性名称，设置 DataSet 值到该节点，有则替换
 *
 * @param: { String } → 属性名称
 * @param: { DataSet } → 属性值
 *
 * @return: 无
 */
_data.setDataSet('xxx', 'xxx');
```
