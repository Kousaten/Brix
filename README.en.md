<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Brix Logo" src="assets/Brix.png">

# Brix

[![KousatenDev](https://img.shields.io/badge/Development-Kousaten-00bfff?style=flat-square)](https://github.com/kousaten)

[![QQGroup](https://img.shields.io/badge/QQGroup-698353248-f28258?style=flat-square)](https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=monline_4_dg&wd=%E7%9F%A5%E9%81%93%E7%BE%A4%E5%8F%B7%E6%80%8E%E4%B9%88%E5%8A%A0%E5%85%A5qq%E7%BE%A4&oq=%25E9%25A2%259C%25E8%2589%25B2%25E4%25BB%25A3%25E7%25A0%2581&rsv_pq=8c4a645200028faa&rsv_t=20e9%2F5gduFOE5yCsOQR20aVWEthO5RkUtczlS30RHTZTWL70fvnBebZ2IXUflLheYJiY&rqlang=cn&rsv_enter=1&rsv_dl=ts_2&rsv_sug3=15&rsv_sug1=6&rsv_sug7=100&rsv_sug2=1&rsv_btype=t&prefixsug=%25E7%259F%25A5%25E9%2581%2593%25E7%25BE%25A4%25E5%258F%25B7&rsp=2&inputT=3826&rsv_sug4=3964)
[![GitterLink](https://img.shields.io/badge/ChatOn-Gitter-177cb0?style=flat-square)](https://gitter.im/Kousaten-Dev/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Edit documents conveniently and add multimedia elements.

[简体中文](README.md) | English

You can use Brix to write a document. Add custom components or defined components to enrich your documents.
Used to display rich content beyond a single text, write, design and share your content.
The brp file using json as the original format (full name Brix Project) is a file format similar to Markdown, but it is not lightweight and easy to use (for now).

## Background

It is the original intention of this project to make light document editing and simple scripting more convenient. At the same time, we hope to integrate content similar to Office Family Bucket and provide functions that facilitate document writing, design and sharing.

## Attention

This project is under preparation and most of the functions cannot be realized.

## Features

- No content yet

## Screenshots

### Home

![assets/demo-0.jpg](assets/demo-0.jpg)

### About

![assets/demo-1.jpg](assets/demo-1.jpg)

### Document creation

![assets/demo-2.jpg](assets/demo-2.jpg)

### Document editing

![assets/demo-3.jpg](assets/demo-3.jpg)

## Guide to Use

This project is developed using [node](nodejs.org) and [npm](npmjs.org).

- Install node.js on your computer and use the following command to install electron globally:
     `npm install electron -g`
- Enter `npm start` after entering the project directory to start Brix

- Or use the archive package in Releases to install and start

## Brief description of project directory structure
<!-- js文件是作为相关源文件还是脚本作用的呢？不应当采用js的名称，可能采用src或者script更好，这一点可以讨论-->

- assets/ : Resource files that need to be used in the project or documents in the project
- css/ : CSS files used by HTML files in the project
- js/ : JavaScript files used by HTML files in the project
- muicss/ : The project references the muicss library, in order to load quickly, put muicss into the project

## Changelog
<!-- changelog 建议采用单独文件，可以参考我写的有关自动化changelog的github action以及其结果，单独的changelog文件相对规范而清晰一些-->
### Snapshot 20w31a

- The first version of the application

## Future Planning (For v0.0.0-alpha.0)

- List of implementation components
- Realize login/register

## Contributing
<!--这一部分需要等补充完善了code_of_conduct和contributing之后在加以完善-->
- No contents yet

### Contributor

- [ResetPower](https://github.com/ResetPower)
- [BobAnkh](https://github.com/BobAnkh)
- [ICE-Flowey](https://github.com/ICE-Flowey) （Has left）

## License

- Apache 2.0 LICENSE
