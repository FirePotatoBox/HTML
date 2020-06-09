module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 9000,
        proxy: {
            '/api': {
                target: 'http://192.168.1.196',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}