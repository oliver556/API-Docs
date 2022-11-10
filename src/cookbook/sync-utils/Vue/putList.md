---
title: routerGuard
icon: script
order: 1
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 调用内部方法，获取是否有权限
```js
VueHelper.routerGuard(to, from, next);
```
:::

## 版本

`v4.3.1+`

## 参数

- `to` （Route）：即将要进入的目标 路由对象
- `from`（Route）：当前导航正要离开的路由
- `next`（Function）：进行管道中的下一个钩子

## 返回

-（Boolean）：返回真或假（true 有权限，false 没有权限）

## 例子

```js
VueHelper.routerGuard(to, from, next);
```
