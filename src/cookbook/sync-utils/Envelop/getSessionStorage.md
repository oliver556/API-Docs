---
title: getSessionStorage
icon: script
order: 7
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 获取 session 缓存
```js
EnvelopHelper.getSessionStorage(key);
```
:::

## 版本

`v4.3.1+`

## 参数

- `key` （String）：键名

## 返回

-（Envelop）：返回对应键名的键值

## 例子

```js
EnvelopHelper.setSessionStorage('key');
// => 返回 key 对应的键名
```
