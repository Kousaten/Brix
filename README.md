<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Brix Logo" src="assets/Brix.png">

# Brix

[![KousatenDev](https://img.shields.io/badge/Development-Kousaten-00bfff?style=flat-square)](https://github.com/kousaten)

[![QQGroup](https://img.shields.io/badge/QQGroup-698353248-f28258?style=flat-square)](https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=monline_4_dg&wd=%E7%9F%A5%E9%81%93%E7%BE%A4%E5%8F%B7%E6%80%8E%E4%B9%88%E5%8A%A0%E5%85%A5qq%E7%BE%A4&oq=%25E9%25A2%259C%25E8%2589%25B2%25E4%25BB%25A3%25E7%25A0%2581&rsv_pq=8c4a645200028faa&rsv_t=20e9%2F5gduFOE5yCsOQR20aVWEthO5RkUtczlS30RHTZTWL70fvnBebZ2IXUflLheYJiY&rqlang=cn&rsv_enter=1&rsv_dl=ts_2&rsv_sug3=15&rsv_sug1=6&rsv_sug7=100&rsv_sug2=1&rsv_btype=t&prefixsug=%25E7%259F%25A5%25E9%2581%2593%25E7%25BE%25A4%25E5%258F%25B7&rsp=2&inputT=3826&rsv_sug4=3964)
[![GitterLink](https://img.shields.io/badge/ChatOn-Gitter-177cb0?style=flat-square)](https://gitter.im/Kousaten-Dev/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> 便利地编辑文档，并添加图片、视频等多媒体元素

简体中文 | [English](README.en.md)

你可以使用Brix编写一个文档。添加自定义的组件或已定义的组件，使你的文档更加丰富
用于展示超出单个文本的丰富内容，编写、设计和分享你的内容
使用json为原格式的brp文件(全称 Brix Project)是一种类似Markdown的文件格式，但并不轻量级也不好用(目前来说)

## 背景

让轻度文档编辑和简单的脚本程序编写更加方便是本项目的初衷，同时我们希望整合类似Office全家桶的内容，提供方便文档编写、设计和分享的功能

## 注意

本项目正在编写中，大部分功能无法实现

## 功能介绍

- 暂无内容

## 使用说明

本项目使用 [node](https://nodejs.org/en/) 与 [npm](https://www.npmjs.com/) 开发

- 在你的电脑上安装node.js并使用`npm install electron -g`命令来全局安装electron
- 进入项目目录后输入`npm start`来启动Brix
- 或者使用Releases中的归档包安装并启动

## 图片展示

### 首页

![demo-0.jpg](assets/demo-0.jpg)

### 关于

![demo-1.jpg](assets/demo-1.jpg)

### 新建文档

![demo-2.jpg](assets/demo-2.jpg)

### 文档编辑

![demo-3.jpg](assets/demo-3.jpg)

## 项目目录结构简述
<!-- js文件是作为相关源文件还是脚本作用的呢？不应当采用js的名称，可能采用src或者script更好，这一点可以讨论-->

- assets/ : 项目或项目中的文档等需要使用到的资源文件
- css/ : 项目中HTML文件需要使用到的CSS文件
- js/ : 项目中HTML文件需要使用到的JavaScript文件
- muicss/ : 项目引用了muicss库，为了快速加载，将muicss放入项目中

## 更新日志
<!-- changelog 建议采用单独文件，可以参考我写的有关自动化changelog的github action以及其结果，单独的changelog文件相对规范而清晰一些-->
### Snapshot 20w31a

- 本软件的第一个版本

## 将来规划 (For v0.0.0-alpha.0)

- 实现组件列表
- 实现登录/注册

## 如何贡献
<!--这一部分需要等补充完善了code_of_conduct和contributing之后在加以完善-->
- 暂无内容

### 贡献者

- [ResetPower](https://github.com/ResetPower)
- [BobAnkh](https://github.com/BobAnkh)
- [ICE-Flowey](https://github.com/ICE-Flowey) （已离开）

## 使用许可

[Apache-2.0](LICENSE)
