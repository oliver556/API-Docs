---
title: Envelop 类
icon: script
order: 4
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::info 说明
Envelop 类主要表示一个完整的交易报文。
:::

## 一. 实例化

```js
import { Envelop } from '@syncsoft/sync-core';

let _envelop = new Envelop();
```

## 二. Api

### 1. getBody()

> 从报文中获得报文体对象

```js
/**
 * @Description: 从报文中获得报文体对象
 *
 * @return: { Envelop } → EnvelopBody 报文体
 */
_envelop.getBody();
```

### 2. getHeader()

> 从报文中获得报文头对象

```js
/**
 * @Description: 从报文中获得报文体对象
 *
 * @return: { Envelop } → EnvelopHead 报文体
 */
_envelop.getHeader();
```

### 3. setBody(EnvelopBody)

> 将身体报文添加到 Envelop 实体中，作为完整报文的身体部分

```js
/**
 * @Description: 将身体报文添加到 Envelop 实体中，作为完整报文的身体部分
 *
 * @return: { EnvelopBody } → body 报文对象
 */
_envelop.setBody('xxx');
```

### 4. setHeader(EnvelopHead)

> 将身体报文添加到 Envelop 实体中，作为完整报文的身体部分

```js
/**
 * @Description: 将身体报文添加到 Envelop 实体中，作为完整报文的身体部分
 *
 * @return: { EnvelopHead } → header 报文对象
 */
_envelop.setHeader('xxx');
```
