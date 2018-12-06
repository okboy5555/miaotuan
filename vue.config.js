const path = require('path')
module.exports = {
    // 基本路径
    baseUrl: '/',
    // 输出文件目录
    outputDir: 'dist',
    // 静态文件目录
    assetsDir: 'assets',
    // 指定index.html生成路径
    indexPath: 'index.html',
    // 文件名中包含hash
    filenameHashing: true,
    // 运行时使用编译器的vue构建版本
    runtimeCompiler: false,
    // 向css相关loader传递选项
    css: {
        loaderOptions: {
            css: {
                // 在这里的选项会传递给css-loader
            },
            postcss: {
                // 在这里的选项会传递给postcss-loader
            },
            sass: {
                data: `@import "@/styles/imports.scss";@import "@/styles/common.scss";`,
            }
        }
    },
    // webpakc配置
    // webpack-dev-server
    devServer: {
        open: true, // 是否自动打开浏览器
        host: '127.0.0.1',
        port: '8888',
        https: false, // 是否开启https
        // proxy: {
        //     // 配置代理
        // }
    },
   
}
