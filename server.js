var path = require('path')
var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var PORT = 3000

var app = express()

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

// to use shared styles & js
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, function(error) {
  if (error) {
    console.error('Error starting server:', error)
  }
  else {
    console.info('Listening on http://localhost:' + PORT)
  }
})
