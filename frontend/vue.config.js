let publicPath = process.env.NODE_ENV === 'production' ? './' : './';

module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000/api',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    },
    outputDir: '../backend/public',
  publicPath,
  productionSourceMap: false,
};
