# vue3 + electron套件，自用


```
// 安装依赖
npm install
```

```
// 单独启动vue服务
npm run serve

// 启动套件服务，用于本地开发
npm run electron:serve
```

```
// 编译生成安装包
npm run electron:build
```

### 重要配置修改
- vue.config.js 中增加pluginOptions.electronBuilder.builderOptions 配置编译构建参数
- src/router/index.js 中修改路由model为hash, electeon只支持hash模式

### 依赖
[vue-cli-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder)


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
