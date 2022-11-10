---
title: getBean
icon: script
order: 14
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 获取 Data
```js
EnvelopHelper.getBean (form, entity, nodeName);
```
:::

## 版本

`v4.3.1+`

## 参数

- `form` （Form）：表单
- `entity`（Object）：实体对象
- `nodeName`（String）：节点名

## 返回

-（Object）：form

## 例子

```js
EnvelopHelper.getBean(form, envelop.getBody());
EnvelopHelper.getBean(form, envelop.getBody(), 'test');
```
