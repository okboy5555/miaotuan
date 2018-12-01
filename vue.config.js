const path = require('path')
module.exports = {
    // 基本路径
    baseUrl: '/',
    // 输出文件目录
    outputDir: 'dist',
    // webpakc配置
    // webpack-dev-server
    devServer: {
        open: true, // 是否自动打开浏览器
        host: '127.0.0.1',
        port: '6888',
        https: false, // 是否开启https
        // proxy: {
        //     // 配置代理
        // }
    },
   
}
