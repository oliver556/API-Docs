---
title: getLocalStorage
icon: script
order: 10
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 获取 local 缓存
```js
EnvelopHelper.getLocalStorage(key);
```
:::

## 版本

`v4.3.1+`

## 参数

- `key` （String）：键名

## 返回

- （Envelop）：返回对应键名的键值

## 例子

```js
EnvelopHelper.getLocalStorage('key');
// => 返回 key 对应的键名
```
