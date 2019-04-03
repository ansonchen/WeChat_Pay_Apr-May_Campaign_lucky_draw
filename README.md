### 使用方式

1. 初始项目：`npm run install`
2. 开发模式：`npm run start`
3. 发布模式：`npm run build` 
***

### 目录结构
`src`：此目录一般给前端开发人员使用，存放需要被转换或打包的代码（`js、css、scss、img`等)。
其中图片、字体等在js中使用的资源文件最终会被打包到`dist`的`static`目录下。

`static`：存放静态、不需打包和转换的文件（`css、img、js`等)。此目录内会被直接copy至`dist`，可在`index.html`中直接引入并使用。
> 资源最终会在`dist`目录下的`staic`目录中合并。

***
### 文件作用
`index.html`：模板文件。最终打包至`dist`，可直接使用引入`static`中的`js、css、img`等资源文件。

`main.js`：打包入口文件，已配置jquery给全局变量`$/jquery`

（参考`src/js/index.js`或`static/lib/test.js`)。

> 如有使用其它lib或初始功能，可将代码放入此处。

***

### include模板
支持在`index.html`中引入其它静态页面片段。    
参考`index.html`中的`footer.html`的使用方式
    
    <%= require('html-loader!./footer.html')%>    
***

### 注意事项
项目中已添加`postcss-pixel-to-viewport`用以作为移动端自适应，如需要px自动转换为vmin单位，将代样式表文件放入`src`内，并在入口文件（`main.js`或`scss/index.scss`)内`import`。

默认配置设计稿宽度`414px` 。

使用方式1：1。

例：414宽度设计稿上`100px`，`css/scss`代码中也是`100px`

> `index.html`中直接使用内联样式单位`px`，无法转换。
