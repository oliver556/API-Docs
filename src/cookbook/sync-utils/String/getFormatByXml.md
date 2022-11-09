---
title: getFormatByXml
icon: script
order: 6
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---

:::tip xml 格式化工具
```js
StringHelper.getFormatByXml(value);
```
:::

## 版本

`v4.3.1+`

## 参数

- `str`（String）：字符串

## 返回

-（String）：格式化后的字符串

## 例子

```xml
StringHelper.getFormatByXml('<?xml version="1.0" encoding="utf-8"?>n<envelope><header><authen><hardware_address>192.168.18.63</hardware_address><sequence>c4ca4238a0b923820dcc509a6f75849b</sequence><timestamp>20170928153121100</timestamp></authen></header><body/></envelope></xml>')
// => 
<?xml version="1.0" encoding="utf-8"?>
<envelope>
<header>
<authen>
<hardware_address>192.168.18.63</hardware_address>
<sequence>c4ca4238a0b923820dcc509a6f75849b</sequence>
<timestamp>20170928153121100</timestamp>
</authen>
</header>
<body/>
</envelope>
```
