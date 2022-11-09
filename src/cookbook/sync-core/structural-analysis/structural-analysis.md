---
title: 报文结构分析
icon: script
order: 1
category:
  - Install
sticky: true
star: true
date: 2022-11-09
---
  
:::info
Envelop 报文结构分析。
:::

## JSON 结构

```json
{
  "header":{
    "default":{
      "execute":"query",
      "timestamp":"20220608173039116",
      "...":"..."
    }
  },
  "body":{
    "default":{
      "name1":"value1",
      "name2":"value2",
      "name3":"value3",
      "detaset1":[
        {
          "name1":"value1",
          "name2":"value2",
          "name3":"value3"
        },
        {
          "name1":"value1",
          "name2":"value2",
          "name3":"value3"
        },
        {
          "...":"..."
        }
      ],
      "...":"..."
    },
    "default2":{
      "name1":"value1",
      "name2":"value2",
      "name3":"value3",
      "detaset1":[
        {
          "name1":"value1",
          "name2":"value2",
          "name3":"value3"
        },
        {
          "name1":"value1",
          "name2":"value2",
          "name3":"value3"
        },
        {
          "...":"..."
        }
      ],
      "...":"..."
    }
  }
}
```

## XML 结构

```xml
<?xml version="1.0" encoding="utf-8"?>

<envelope>
  
  <header>
    <!-- 安全信息 -->
    <authen name="default">
      <!-- 默认节点 -->
      <data service="1000" />
      <data trans1d="c4ca9238a0b923820dcc509a6f758120" />
      <data sequence="c4ca4238a0b923820dcc509a6f75849b"/>
      <data timestamp="20220608173039116" />
      ......
    </authen>
  </header>
  
  <body>
    <!-- 业务信息 -->
    <logic name="default">
      <data name1="value1" />
      <data name2="value2" />
      <data name3="value3" />
      ......
      <dataset name="code1">
        <row name1="value1" name2="value2" name3="value3" />
        <row name1="value1" name2="value2" name3="value3" />
        ......
      </dataset>
      ......
    </logic>
    
    <logic name="value1">
      <data name1="value1" />
      <data name2="value2" />
      <data name3="value3" />
      ......
      <dataset name="code1">
        <row name1="value1" name2="value2" name3="value3" />
        <row name1="value1" name2="value2" name3="value3" />
      </dataset>
      ......
    </logic>
  </body>
  
</envelope>
```
