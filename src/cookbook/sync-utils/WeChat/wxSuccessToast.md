---
title: wxSuccessToast
icon: script
order: 1
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 显示成功图标，消息提示框
```js
WxHelper.wxSuccessToast(title, time);
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
WxHelper.wxSuccessToast('弹框', 3);
// => 成功
```
