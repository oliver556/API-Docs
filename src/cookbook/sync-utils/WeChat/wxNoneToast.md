---
title: wxNoneToast
icon: script
order: 3
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 不显示图标，等待消息提示框
```js
WxHelper.wxNoneToast(title, time);
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
WxHelper.wxNoneToast('标题', 3);
```
