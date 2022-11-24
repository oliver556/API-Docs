---
title: 环境配置
icon: card
order: 3
category:
---

:::tip 推荐
- `node` 使用 `v12.18.2`

- `vue/cli` 使用 `v4.4.6`
:::


## Vue-cli

```shell
# 卸载 2.x版本的vue cli
$ npm uninstall vue-cli -g

# 卸载 3.x版本的vue cli
$ npm uninstall @vue/cli -g

# 安装 4.4.6 vue cli 脚手架
$ npm install -g @vue/cli@4.4.6
```

## Node Mac

### 卸载

①：官方安装包

- 删除 `/usr/local/lib` 下的任意 `node` 和 `node_modules` 的文件或目录
- 删除 `/usr/local/include` 下的任意 `node` 和 `node_modules` 的文件或目录
- 删除 Home 目录下的任意 `node` 和 `node_modules` 的文件或目录
- 删除 `/usr/local/bin` 下的任意 `node` 的可执行文件

可用以下命令代替以上操作：

```shell
sudo rm -rf /opt/local/bin/node /opt/local/include/node /opt/local/lib/node_modules
sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node.1 /usr/local/lib/dtrace/node.d
```

> 官网 apk 安装包的

```shell
sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}
```

```shell
sudo rm -rf ~/.npm
sudo rm -rf ~/node_modules
sudo rm -rf ~/.node-gyp
sudo rm /usr/local/bin/node
sudo rm /usr/local/bin/npm
sudo rm /usr/local/lib/dtrace/node.d
```

以上三种任选其一，应该都可以。测试 `nvm`、`node`、`npm` 三个命令是否还在

②：homebrew

```shell
brew uninstall node
```

③：nvm

如有手动安装 nvm 可以通过以下命令删除

```shell
rm -rf ~/.nvm
rm -rf ~/.npm
rm -rf ~/.bower
```

### 安装

①：官方安装包

> [英文官网](https://nodejs.org/en/)  
> [中文官网](http://nodejs.cn/)
> 
> **不推荐，手动安装版本控制坑太大**

②：Homebrew

1. 安装 `nvm` ，用 `nvm`  控制 Node.js 的版本

```shell
brew install nvm
```

2. 安装完成后，在 `~/.bash_profile`  中添加以下内容，就可以在 `bash` 里面用 `nvm` 命令

```shell
# Node.js
source $(brew --prefix nvm)/nvm.sh
```

3. 更新 `.bash_profile` 的缓存，使修改生效

```shell
source ~/.bash_profile
```

4. 通过 `nvm` 安装 Node.js

```shell
nvm install node
```

5. 安装完成后，查看是否安装成功

```shell
$ nvm --version
0.34.0
$ nvm list

								v12.0.0
node -> stable (-> v12.0.0) (default)
stable -> 12.0 (-> v12.0.0) (default)
iojs -> N/A (default)
unstable -> N/A (default)
lts/* -> lts/dubnium (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.16.0 (-> N/A)
lts/dubnium -> v10.15.3 (-> N/A)
$ node -v
v12.0.0
$ npm -v
6.9.0
```

6. 安装 `cnpm` ， [淘宝 NPM 镜像](https://npmmirror.com/)（方便网速不行的地区）

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## Node Windows

### 卸载

```shell
# 卸载当前系统中安装的node

# 找到相关内容并删除掉
1. C:\Program Files (x86)\nodejs
2. C:\Program Files\nodejs
3. C:\Users\{User}\AppData\Roaming\npm （或 %appdata%\npm）
4. C:User\{User}\AppData\Roaming\npm-cache（或%appdata%\npm-cache）

# 检查
5. 检查 %PATH% 环境变量以确保没有引用 Node.js 或 npm 存在

# 重启（如果无生效的情况下，请选择重启）
6. 重启电脑
```

### 安装

- [《Node 历史版本下载》「官方版」](https://nodejs.org/en/download/releases/)
- [《node_v12.18.2下载直达》](https://nodejs.org/download/release/v12.18.2/node-v12.18.2-x64.msi)
- 
- [《Node 历史版本下载 淘宝镜像版》](https://npm.taobao.org/mirrors/node)
- [《node_12.18.2下载直达》](https://npm.taobao.org/mirrors/node/v12.18.2/node-v12.18.2-x86.msi)
