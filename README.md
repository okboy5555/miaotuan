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


服务端遗留问题
```
vue.runtime.esm.js:619 [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.
```