---
title:Vuepress博客的搭建
---
# Vuepress博客的搭建

## 介绍

[官网链接](https://vuepress.vuejs.org/zh/guide/)

Vuepress：是一个极简静态网站生成器，由Vue、Vue Router、webpack驱动的单页应用。

-----------------------------------------------------------------------------

## 1.遇到的问题

**在markdown中遇到过调用静态资源出问题的情况**

主要是因为在 .vuepress/config.js 中设置了 **base**。

举例来说，如果你打算将你的网站部署到 https://foo.github.io/bar/，那么 base 的值就应该被设置为 "/bar/" (应当总是以斜杠开始，并以斜杠结束)。

如果你希望引用一张放在 .vuepress/public 中的图片，你需要使用这样路径：/bar/image.png。

## 2.开始搭建

### 基本配置

1.安装nodejs

2.创建并进入一个新的目录

    mkdir vuepress-starter && cd vuepress-starter

3.进行包的初始化

    yarn init # npm init

4.将Vuepress安装为本地依赖

    yarn add -D vuepress # npm install -D vuepress

5.创建文件夹docs并在里面写第一篇md文档 ->docs/README.md

6.配置package.json，添加下述兩行

    {
    "scripts": {
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs"
    }
    }

7.此时运行命令可以在本地启动预览

    npm run  docs:dev

8.使用打包命令，会在docs/.vuepress下生成dist，该文件夹内容就是打包好的静态页面

    npm run docs:build

## 3.推荐的目录结构

![目录结构](/bloger/目录结构.jpg)

* docs/.vuepress: 用于存放全局的配置、组件、静态资源等。
* docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。
* docs/.vuepress/theme: 用于存放本地主题。
* docs/.vuepress/styles: 用于存放样式相关的文件。
* docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
* docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
* docs/.vuepress/public: 静态资源目录。
* docs/.vuepress/templates: 存储 HTML 模板文件。
* docs/.vuepress/templates/dev.html: 用于开发环境的 HTML 模板文件。
* docs/.vuepress/templates/ssr.html: 构建时基于 Vue SSR 的 HTML 模板文件。
* docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。
* docs/.vuepress/enhanceApp.js: 客户端应用的增强。

## 4.部署方式