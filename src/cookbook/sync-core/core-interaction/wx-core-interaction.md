---
title: WeChat 核心交互
icon: script
order: 2
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::info 说明
用于服务 Envelop 报文交互体系，配合前后端及 `axios` 使用的交互工具类
:::

## 一. 引入

```js
import { Envelop, wxBaseController } from '@syncsoft/sync-core';
```

## 二. Api

### 1. invokerGet(mapping, methodname, envelop)

> Get 请求方法

```js
/**
 * @Description: Get 请求方法
 * @param: { String } → 请求的路径
 * @param: { String } → 请求的方法名称
 * @param: { Envelop } → Envelop 对象值
 *
 * @returns: { Envelop } → Envelop
 */
let _envelop = new Envelop();
vueBaseController.invokerGet('xxx', 'xxx', _envelop);
```

### 2. invokerPost(mapping, methodname, envelop)

> Post 请求方法

```js
/**
 * @Description: Post 请求方法
 * @param: { String } → 请求的路径
 * @param: { String } → 请求的方法名称
 * @param: { Envelop } → Envelop 对象值
 *
 * @returns: { Envelop } → Envelop
 */
let _envelop = new Envelop();
vueBaseController.invokerPost('xxx', 'xxx', _envelop);
```

### 3. invokerStream(mapping, methodname, envelop, options)

> 文件流下载方法(下载图片，页面上直接展示图片)

```js
/**
 * @Description: 文件流下载方法(下载图片，页面上直接展示图片)
 * @param: { String } → 请求的路径
 * @param: { String } → 请求的方法名称
 * @param: { Envelop } → Envelop 对象值
 * @param: { Object } → 文件值
 *
 * @returns: 无
 */
let _envelop = new Envelop();
vueBaseController.invokerStream('xxx', 'xxx', _envelop, 'xxx');
```
