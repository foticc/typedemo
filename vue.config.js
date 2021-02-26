module.exports = {
  devServer: {
    proxy: {
      "/dev-api": {
        target: "http://localhost:8080", // target表示代理的服务器
        changeOrigin: true, // needed for virtual hosted sites
        // ws: true, // proxy websockets 是否代理websockets
        pathRewrite: {
          // pathRewrite表示路径重写，key表示一个正则，value表示别名
          "^/dev-api/": "/", // 即用 '/'表示'/dev-api'
        },
      },
    },
  },
}
