# Rust 学习教程:

### 在线访问:

- ✅ https://better-rs.github.io/

> include:

- rust 学习教程
- rust 标准库分析笔记
- rust 项目源码分析
- rust 生态项目总结

### Deployment:

> 启动脚本:

- ✅ [Taskfile](Taskfile.yml)

> 配置:

- ✅ [docusaurus.config.js](docusaurus.config.js)
- ✅ [sidebars](sidebars.js)

> 源码:

- ✅ [index page](src/components/HomepageFeatures/index.tsx)
    - 首页内容

> 文档编辑:

- ✅ [docs](docs)

> i18n: 多语言

```ruby

# 初始化多语言类型
task i18n

# 同步待翻译的文件:
task i18n:fr

```

### docusaurus 配置定制:

- https://docusaurus.io/zh-CN/docs/markdown-features/code-blocks
- 支持 rust 语言高亮


### Reference:

> docs:

- https://docusaurus.io/zh-CN/docs/installation
- [Docusaurus 2](https://docusaurus.io/)

> example:

- https://casbin.org/docs/zh-CN/overview
- https://github.com/casbin/casbin-website-v2

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to
the `gh-pages` branch.
