---
title: strMapToJson
icon: script
order: 3
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip Map 实体转 Json
```js
EnvelopHelper.strMapToJson(strMap);
```
:::

## 版本

`v4.3.1+`

## 参数

- `strMap` （Array）：要转换的 Map 实体

## 返回

-（Array）：转换后的 JSON

## 例子

```js
EnvelopHelper.strMapToJson([{key: 'success', value: 'true'}, {key: 'message', value: '成功'}]);
// => 
{
  success: 'true',
    message: '成功'
}
```
