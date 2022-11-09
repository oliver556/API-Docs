---
title: 如何引用
icon: script
order: 2
sticky: true
star: true
---

# 如何使用

> `syncsoft-core` 是基于 `Envelop` 设计体系的，主要用于前后端交互。

## 引用方式

::: tip
推荐使用到哪个，单独引用哪个就好。
:::

```javascript
// core 提供的所有方法
import {
  Entity, // ------------- Entity类
  Data, // --------------- Data类
  DataSet, // ------------ DataSet类
  Envelop, // ------------ 报文体
  Encrypt, // ------------ Encrypt类 (加签/解签)
  jsonUtils, // ---------- jsonUtils类
  propUtils, // ---------- 全局属性工具
  vueBaseController, // -- Vue核心交互
  wxBaseController, // --- 微信核心交互
  ERROR_CODE, // --------- 核心错误常量
  getErrorInfo, // ------- 核心错误码基础格式
  axios
} from '@syncsoft/sync-core';
```
