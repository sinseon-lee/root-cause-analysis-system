module.exports = { 
  devServer: { 
    proxy: { 
      '/api': { 
        target: 'http://localhost:3081/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
  outputDir: '../backend/public',
}