const path = require("path")
// ssr
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin")
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin")
const nodeExternals = require("webpack-node-externals")
const merge = require("lodash.merge")
const TARGET_NODE = process.env.WEBPACK_TARGET === "node"
const target = TARGET_NODE ? "server" : "client"

module.exports = {
  // 基本路径
  publicPath: "/",
  // 输出文件目录
  outputDir: "dist",
  // 静态文件目录
  assetsDir: "assets",
  // 指定index.html生成路径
  indexPath: "index.html",
  // 文件名中包含hash
  filenameHashing: true,
  // 运行时使用编译器的vue构建版本
  runtimeCompiler: false,
  // 向css相关loader传递选项
  css: {
    extract: process.env.NODE_ENV === 'production',
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/imports.scss";@import "@/styles/common.scss";`
      }
    }
  },

  // webpakc配置
  // webpack-dev-server
  devServer: {
    open: true, // 是否自动打开浏览器
    host: "0.0.0.0",
    port: "8888",
    https: false, // 是否开启https
    // proxy: {
    //   "/": {
    //     changeOrigin: true,
    //     target: 'http://api.xxx.cn/'
    //   }
    //   // 配置代理
    // }
  },
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // 移除console
  //     config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
  //     console.log('我是生产环境')
  //     // 为生产环境修改配置...
  //   } else {
  //     //  todo  似乎开发环境无效 存疑
  //     config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
  //     console.log('我是开发环境')
  //     // 为开发环境修改配置...
  //   }
  // }
  configureWebpack: () => ({
    // 将 entry 指向应用程序的 server / client 文件
    entry: `./src/entry-${target}.js`,
    // 对 bundle renderer 提供 source map 支持
    devtool: 'source-map',
    target: TARGET_NODE ? "node" : "web",
    node: TARGET_NODE ? undefined : false,
    output: {
      libraryTarget: TARGET_NODE ? "commonjs2" : undefined
    },
    // https://webpack.js.org/configuration/externals/#function
    // https://github.com/liady/webpack-node-externals
    // 外置化应用程序依赖模块。可以使服务器构建速度更快，
    // 并生成较小的 bundle 文件。
    externals: TARGET_NODE
      ? nodeExternals({
        // 不要外置化 webpack 需要处理的依赖模块。
        // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
        // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
        allowlist: [/\.css$/]
      })
      : undefined,
    optimization: {
      splitChunks: false
      // splitChunks: TARGET_NODE ? 'commonjs2' : undefined
            
    },
    plugins: [TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()]
  }),
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        merge(options, {
          optimizeSSR: false
        })
      })

    // fix ssr hot update bug
    if (TARGET_NODE) {
      config.plugins.delete("hmr")
    }
  }
}
