module.exports = {
    // ES6兼容配置：在exports中添加，这里很关键，不配置不行
    transpileDependencies: ['sockjs-client'],
    // 链式webpack配置函数
    chainWebpack (config) {
      config.entry('main').add('babel-polyfill')
    }
}
