var webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require('../../webpack.config.js');
const webpack = require("webpack");
const path = require('path');  //используется для указания полных путей и для resolve путей
var HtmlWebpackPlugin = require('html-webpack-plugin');

/** Плагин достает css(или какие мы укажем файлы) в отдельный(не bundle.js) файл. Т.е. теперь стили содержаться в отдельном app.css, который подключен в bundle.js */
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = function(app) {

  // app.get('/hello', function(req, res) {
  //   res.send('Hello, its me');
  // });
  //
  // var router = app.loopback.Router();
  // router.get('/ping', function(req, res) {
  //   res.send('pongaroo');
  // });
  // app.use(router);

  app.use(webpackMiddleware(webpack({entry: './src/app.js', //Исходный файл
    output: {
      path: path.resolve(__dirname, "dist"),  //dist - папка, где будут лежать бандлы
      filename: 'app.bundle.js'  //Файл, в которым будем бандлить
    },
    /** Модули содержат в себе различные лоудеры, если не указан путь. Которые будут преобразовывать современный код в старый, для поддержки всеми браузерами*/
    module: {
      rules: [
        {
          test: /\.css$/, //файлы, которые лоэдер будет искать. Будет грузить все файлы, подключенные в ./src/app.js
          use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader", publicPath: './dist'})  //название лоэдера. Используем плагин для создания отдельного общего файла стилей
        }
      ]
    },
    /**Будут содержаться все наши плагины*/
    plugins: [
      new HtmlWebpackPlugin({  //Теперь нет необходимости подключать любые скрипты внутрь index.html
        title: 'Custom template',
        filename: 'index.html',  //Файл ./dist/index.html, сгенерированный плагином на основе template(ниже)
        minify: {  //файл ./dist/index.html будет минифицирован
          collapseWhitespace: true
        },
        hash: true,  //в ./dist/index.html к каждому имени подключенного скрипта добавляет hash(к примеру: src="app.bundle.js?4aed4f6a1c602909aed2"). Также каждый webpack билд будет иметь имя - Hash
        template: './src/index.html'  //Файл, явл. шаблоном
      }),
      new ExtractTextPlugin({ //Конфиг для ExtractTextPlugin
        filename: 'app.css',  //имя файла, в который собрать весь css
        disable: false,
        allChunks: true
      }),
    ]
  })))}
