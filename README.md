# react-new-edition

## 初始化项目：

```bash
npx create-react-app react-new-edition
cd react-new-edition
npm start
```

## 引入antd作为UI组件库

```bash
npm install antd --save
npm install react-app-rewired customize-cra --save-dev
```

修改 `package.json ` 文件:

```bash
"scripts": {
-	"start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
```

使用 `babel-plugin-import` 实现按需加载

```bash
npm install babel-plugin-import
```

如果配置antd主题的话，需要用到less变量覆盖功能

```bash
npm install less less-loader --save-dev
```

项目根目录创建 `config-overrides.js` 文件用于修改默认配置

```bash
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
	style: true,
  }),
  addLessLoader({
   	javascriptEnabled: true,
   	modifyVars: { '@primary-color': '#1DA57A' },
  }),
);
```

