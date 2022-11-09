---
title: Encrypt 类
icon: script
order: 5
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

## 一. 引入

```js
import { Encrypt } from '@syncsoft/sync-core';
```

## 二. Api

### 1. getSE(String)

> 简单加密

```js
/**
 * @Description: 简单加密
 *
 * @param: { String } → 公钥
 *
 * @return: { String } → 加密后的数据
 */
Encrypt.getSE('xxx');
```

### 2. getOE(String)

> 标准加密

```js
/**
 * @Description: 标准加密
 *
 * @param: { String } → 公钥
 *
 * @return: { String } → 加密后的数据
 */
Encrypt.getSE('xxx');
```
