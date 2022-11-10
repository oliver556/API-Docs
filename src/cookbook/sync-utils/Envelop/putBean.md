---
title: putBean
icon: script
order: 15
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 设置 Data
```js
EnvelopHelper.putBean (form, entity, nodeName);
```
:::

## 版本

`v4.3.1+`

## 参数

- `form` （Form）：表单
- `entity`（Object）：实体对象
- `nodeName`（String）：节点名

## 返回

-（Envelop）：envelop

## 例子

```js
EnvelopHelper.putBean(form, envelop3.getBody());
EnvelopHelper.putBean(form, envelop3.getBody(), 'test');
```
