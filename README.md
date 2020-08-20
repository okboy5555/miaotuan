# miaotuan
我终于要给自己挖坑了

如果你想和我一起填这个巨坑，请联系我543872824@qq.com

技术栈vue 2.x + vue-cli 3.x + sass +es6
icon暂时用的阿里的图标库，够用（不会设计ui）
现已改造成ssr

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build:mac
npm run build:win
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### other
node版本为12.18.2

如果不想更改node版本，请删除packjson.lock文件重新install
因为导入了sass，所以装的时候比较麻烦，尽量保持版本一致，相关sass安装问题请看sass官网
推荐使用npm并且命令行翻墙的形式安装sass
后面我再把sass替换掉吧~

vue-ssr提供的方式是配置两个入口文件(entry-client.js、entry-server.js)，通过webpack把你的代码编译成两个bundle。

Server Bundle为vue-ssr-server-bundle.json:
Client Bundle为vue-ssr-client-manifest.json

初始化（获取到vue-ssr-server-bundle.json）：

ssr应用会在node启动时初始化一个renderer单例对象，renderer对象由vue-server-renderer库的createBundleRenderer函数创建，函数接受两个参数，serverBundle（服务端入口文件打包后的）内容和options配置
获取到serverBundle的入口文件代码并解析为入口函数，每次执行实例化vue对象
实例化了render和templateRenderer对象，负责渲染vue组件和组装html

渲染阶段：（执行vue-ssr-server-bundle.json）

当用户请求达到node端时，调用bundleRenderer.renderToString函数并传入用户上下文context，context对象可以包含一些服务端的信息，比如：url、ua等等，也可以包含一些用户信息。通过执行serverBundle后得到的应用入口函数，实例化vue对象。
renderer对象负责把vue对象递归转为vnode，并把vnode根据不同node类型调用不同渲染函数最终组装为html。
当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态，自动嵌入到最终的 HTML 中返回给客户端。而在客户端，在挂载到应用程序之前，store 就应该获取到状态：

内容输出阶段：

在上一个阶段我们已经拿到了vue组件渲染结果，它是一个html字符串，在浏览器中展示页面我们还需要css、js等依赖资源的引入标签和我们在服务端的渲染数据，这些最终组装成一个完整的html报文输出到浏览器中。

客户端阶段（获取执行客户端代码 vue-ssr-client-manifest.json）：

当客户端发起了请求，服务端返回渲染结果和css加载完毕后，用户就已经可以看到页面渲染结果了，不用等待js加载和执行。服务端输出的数据有两种，一个是服务端渲染的页面结果，还有一个在服务端需要输出到浏览器的数据状态window.__INITIAL_STATE__。
这些数据需要同步给浏览器，否则会造成两端组件状态不一致。我们一般会使用vuex来存储这些数据状态，之前在服务端渲染完成后把vuex的state复制给用户上下文的context.state。context.state = store.state
当客户端开始执行js时，我们可以通过window全局变量读取到这里的数据状态，并替换到自己的数据状态 store.replaceState(window.__INITIAL_STATE__);实现服务端和客户端的 store 数据同步
之后在我们调用$mount挂载vue对象之前，客户端会和服务端生成的DOM进行Hydration对比(判断这个DOM和自己即将生成的DOM是否相同（vuex store 数据同步才能保持一致）
如果相同就调用app.$mount('#app')将客户端的vue实例挂载到这个DOM上，即去“激活”这些服务端渲染的HTML之后，其变成了由Vue动态管理的DOM，以便响应后续数据的变化，即之后所有的交互和vue-router不同页面之间的跳转将全部在浏览器端运行。
如果客户端构建的虚拟 DOM 树vDOM与服务器渲染返回的HTML结构不一致，这时候，客户端会请求一次服务器再渲染整个应用程序，这使得ssr失效了，达不到服务端渲染的目的了。

V1
ssr有两个入口文件，分别是客户端的入后文件和服务端的入口文件，webpack通过两个入口文件分别打包成给服务端用的server bundle和给客户端用的client bundle.当服务器接收到了来自客户端的请求之后，会创建一个渲染器bundleRenderer，这个bundleRenderer会读取上面生成的server bundle文件，并且执行它的代码， 然后发送一个生成好的html到浏览器，等到客户端加载了client bundle之后，会和服务端生成的DOM进行Hydration(判断这个DOM和自己即将生成的DOM是否相同，如果相同就将客户端的vue实例挂载到这个DOM上)
V2
我们的服务端代码和客户端代码通过webpack分别打包，生成Server Bundle和Client Bundle，前者会运行在服务器上通过node生成预渲染的HTML字符串，发送到我们的客户端以便完成初始化渲染；而客户端bundle就自由了，初始化渲染完全不依赖它了。客户端拿到服务端返回的HTML字符串后，会去“激活”这些静态HTML，是其变成由Vue动态管理的DOM，以便响应后续数据的变化。
V3

首先我们的entry-server会获取到当前router匹配到的组件，调用组件上asyncData方法，将数据存到服务端的vuex中，然后服务端vuex中的这些数据传给我们的context。
Node.js服务器通过renderToString将需要首屏渲染的html字符串send道我们的客户端上，这其中混入了window.INITIAL_STATE 用来存储我们服务端vuex的数据。
然后entry-client，此时服务端渲染时候拿到的数据写入客户端的vuex中。
最后就是客户端和服务端的组件做diff了，更新状态更新的组件。

V4
客户端请求服务器，服务器根据请求地址获得匹配的组件，在调用匹配到的组件返回Promise (官方是asyncData方法)来将需要的数据拿到。最后再通过window.__initial_state=data将其写入网页，最后将服务端渲染好的网页返回回去。接下来客户端将用新的store状态把原来的store状态替换掉，保证客户端和服务端的数据同步。遇到没被服务端渲染的组件，再去发异步请求拿数据
能在服务端渲染为html字符串得益于vue组件结构是基于vnode的。vnode是dom的抽象表达，它不是真实的dom，它是由js对象组成的树，每个节点代表了一个dom。因为vnode所以在服务端vue可以把js对象解析为html字符串
同样在客户端vnode因为是存在内存之中的，操作内存总比操作dom快的多，每次数据变化需要更新dom时，新旧vnode树经过diff算法，计算出最小变化集，大大提高了性能。