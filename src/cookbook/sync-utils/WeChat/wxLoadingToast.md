---
title: wxLoadingToast
icon: script
order: 2
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 显示等待图标，消息提示框
```js
WxHelper.wxLoadingToast(title, time);
```
:::

## 版本

`v4.3.1+`

## 参数

- `title`（String）：提示的内容
- `time`（String）：弹窗显示的时长

## 返回

无

## 例子

```js
WxHelper.wxLoadingToast('标题', 3);
```
