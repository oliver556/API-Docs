---
title: nrm 配置
icon: card
order: 4
category:
---

:::info 何为 nrm
[nrm](https://github.com/Pana/nrm)（NPM registry manager）是 npm 的镜像源管理工具，使用它可以快速切换 npm 源。
:::

## nrm 安装

### 1. 全局安装

```bash
$ npm i -g nrm
```

### 2. 查看版本

```bash
$ nrm -V

# or

$ nrm --version
```

### 3. 查看所有源

> 其中 `*` 号表示当前使用的源。  
> 或者通过 `nrm current` 命令查看当前源的名称。

```shell
➜  ~ nrm ls
* npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```

### 4. 切换源

其中 `<registry>` 就是上面命令所列出来的名称。

相比上面的命令，是不是方便好记多了。

```bash
$ nrm use <registry>
# 例如 nrm use taobao
```

> 注意切换源之后，我们安装依赖仍使用 `npm i <name>` 的方式来进行安装。

### 5. 添加源

适用于企业内部定制的私有源，`<registry>` 表示源名称，`<url>` 表示源地址。

```shell
$ nrm add <registry> <url>
```

### 6. 删除源

```shell
$ nrm del <registry>
```

### 7. 测试源的响应时间

```shell
$ nrm test <registry>
```

## npm 使用帮助

```shell
# 1. 切换源
$ nrm use sync

# 2. 登录
$ npm login

# 3. 登出
$ npm logout

# 4. 查看当前用户
$ npm who am i
```

## nrm 实操

- 执行命令查看可选源：`nrm ls`

- 切换到淘宝源： `nrm use taobao`

- 添加指定源： `nrm add sync http://npm.syncsoft.com:4874/`

- 删除指定源： `nrm del my`

## 附

- 公司私有源：`http://npm.syncsoft.com:4874/`
