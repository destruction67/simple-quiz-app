const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')

module.exports = defineConfig({
  transpileDependencies: true,

  // devServer: {
  //   proxy: 'https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json',
  // },

  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://s3.eu-west-2.amazonaws.com',
  //       changeOrigin: true,
  //       pathRewrite: { '^/api': '/interview.mock.data' }
  //     }
  //   }
  // },

  // devServer: {
  //   proxy: {
  //     "^/api": {
  //       target: 'https://s3.eu-west-2.amazonaws.com',
  //       ws: true,
  //       changeOrigin: true
  //     }
  //   }
  // },

  // devServer: {
  //   proxy: {
  //     "/api": {
  //       ws: true,
  //       changeOrigin: true,
  //       target: "https://s3.eu-west-2.amazonaws.com"
  //     }
  //   }
  // }

  // devServer: {
  //   proxy: 'https://s3.eu-west-2.amazonaws.com',
  // },




})

