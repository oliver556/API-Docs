---
title: isMsgEmptyFromBackEnd
icon: script
order: 5
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip 返回报文是否为空判断
```js
EnvelopHelper.isMsgEmptyFromBackEnd(str);
```
:::

## 版本

`v4.3.1+`

## 参数

- `str` （String）：传入的值为返回的报文头部 message 字段

## 返回

-（String）：返回规范的错误报文格式

## 例子

```js
EnvelopHelper.isMsgEmptyFromBackEnd('');
// => 
{
  CODE: '0004',
    MESSAGE: '后端返回报文为空，请联系管理员！'
}
```
