<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Brix Logo" src="assets/Brix.png">

# Brix

[![KousatenDev](https://img.shields.io/badge/Development-Kousaten-00bfff?style=flat-square)](https://github.com/kousaten)

[![QQGroup](https://img.shields.io/badge/QQGroup-698353248-f28258?style=flat-square)](https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=monline_4_dg&wd=%E7%9F%A5%E9%81%93%E7%BE%A4%E5%8F%B7%E6%80%8E%E4%B9%88%E5%8A%A0%E5%85%A5qq%E7%BE%A4&oq=%25E9%25A2%259C%25E8%2589%25B2%25E4%25BB%25A3%25E7%25A0%2581&rsv_pq=8c4a645200028faa&rsv_t=20e9%2F5gduFOE5yCsOQR20aVWEthO5RkUtczlS30RHTZTWL70fvnBebZ2IXUflLheYJiY&rqlang=cn&rsv_enter=1&rsv_dl=ts_2&rsv_sug3=15&rsv_sug1=6&rsv_sug7=100&rsv_sug2=1&rsv_btype=t&prefixsug=%25E7%259F%25A5%25E9%2581%2593%25E7%25BE%25A4%25E5%258F%25B7&rsp=2&inputT=3826&rsv_sug4=3964)

[![GitterLink](https://img.shields.io/badge/ChatOn-Gitter-177cb0?style=flat-square)](https://gitter.im/Kousaten-Dev/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Edit documents conveniently and add multimedia elements.

[简体中文](README.zh.md) | English

## Project Description

Brix is an application that uses the Electron framework and is written in a programming language based on HTML+CSS+JS to create, design, edit and share rich multimedia documents.

At present, Brix is in the initial stage of development, all functions are very immature, and you need help from everyone.

The latest snapshot version of Brix is 20w31a, but the function is almost disabled. You can wait for the v0.0.0-alpha.0 to be released soon.

All versions of Brix can be downloaded and installed in the release.

## Features and future planning

| Features | Is it complete |
| --- | --- |
| Add and edit document basic components | ✅ |
| Account login and registration | ✅ |
| Document preview page | ✅ |
| Documents add multimedia elements such as pictures and videos | ❌ |
| Multi-language support | ❌ |
| Theme customization | ❌ |
| Cloud sync documents after login | ❌ |

- There are still more not on display

## How to install and use

- You can choose to refer to the following methods or use the archive package in Releases to install and start

This project is developed using [node](nodejs.org) and [npm](npmjs.org).

- Download from Node.js official website and install Node.js on your computer, use the following command to install electron globally:
    `npm install electron -g`
- Open the terminal and use the cd command to enter the project directory
- Type `npm start` to start Brix

## Tutorial

Refer to [Kousaten Documents](https://kousaten.github.io/) for some basic usage guidelines.

## Use screenshots

### Home

![assets/demo-0.jpg](assets/demo-0.jpg)

### About

![assets/demo-1.jpg](assets/demo-1.jpg)

### Document creation

![assets/demo-2.jpg](assets/demo-2.jpg)

### Document editing

![assets/demo-3.jpg](assets/demo-3.jpg)

## Brief description of project directory structure

- assets/: Resource files that need to be used such as the project or the documents in the project
- css/: CSS files used by HTML files in the project
- js/: JavaScript files that need to be used in HTML files in the project
- muicss/: The project references the muicss library, in order to load quickly, put the muicss output file into this folder separately
- mdui/: The project references the mdui library, in order to load quickly, put the muicss output file into this folder separately

## How to contribute

- Reference [CONTRIBUTING.md](https://github.com/BobAnkh/LinuxBeginner/blob/master/CONTRIBUTING.md)

### Contributors

- [ResetPower](https://github.com/ResetPower)
- [BobAnkh](https://github.com/BobAnkh)

## LICENSE

- Apache 2.0 LICENSE
