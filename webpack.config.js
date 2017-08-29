/**Webpack - простой bundler, который преобразует модули с зависимостями(css, js, ts, и тд) в статический
 * контент(файл bundle.js, png, css, jpg), который также будет поддерживаться всеми браузерами.
 * Т.е. весь наш проект будет бандлиться в один файл(bundle.js), который подключается в index.html
 *
 * src - директорие со всеми файлами, т.е. рабочая директория
 * dist - distination(целевая) папка, в которой уже будет храниться сборка(bundle.js)
 *
 * Простой запуск сборки webpack(entry output):  webpack ./src/app.js ./dist/app.bundle.js
 * Простой запуск минифицированной сборки webpack(entry output):  webpack ./src/app.js ./dist/app.bundle.js -p
 * Простой запуск минифицированной отслеживаемой на изменения сборки webpack(entry output):  webpack ./src/app.js ./dist/app.bundle.js -p --watch
 *
 * */

/**Плагин, который генерирует автоматически html-страницы. Т.е. нет необходимости подключать в  ./dist/index.html скрипты с бандлами, их подключение сгенерирует плагин.
 * Файл index.html автоматически сгенерит webpack с уже подключенными бандлами. Мы будем использовать шаблон(./src/index.html),
 * на основе которого сгенерируется ./dist/index.html
 *
 * Лоэдеры используются для преобразования css, ts файлов в bundle.js
 * */
var HtmlWebpackPlugin = require('html-webpack-plugin');

/** Плагин достает css(или какие мы укажем файлы) в отдельный(не bundle.js) файл. Т.е. теперь стили содержаться в отдельном app.css, который подключен в bundle.js */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');  //используется для указания полных путей и для resolve путей
var helpers = require('./helpers');

module.exports = {
  entry: ['babel-polyfill', './src/app.js'], //Исходный файл
  output: {
    path: path.resolve(__dirname, "dist"),  //dist - папка, где будут лежать бандлы
    filename: 'app.bundle.js'  //Файл, в которым будем бандлить
  },

  devtool: "source-map",

  resolve: {
    modules: ['src', 'node_modules'],
    alias: {
      // mocks: helpers.root('mocks'),
      // src: helpers.root('src'),
      // assets: helpers.root('src/assets'),
      modules: path.resolve('src/modules'),
      styles: path.resolve('src/styles'),
      // components: helpers.root('src/components')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
  },

  /** Модули содержат в себе различные лоудеры, если не указан путь. Которые будут преобразовывать современный код в старый, для поддержки всеми браузерами*/
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      }, {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: {
            includePaths: ["src/"]
          }
        }]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      /*
       * File loader for supporting images, for example, in CSS files.
       */
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      /* File loader for supporting fonts, for example, in CSS files.
       */
      {
        test: /\.(eot|woff2?|svg|ttf|otf)([\?]?.*)$/,
        use: 'file-loader'
      }]
  },

  /**Будут содержаться все наши плагины*/
  plugins: [

    /*
     * Plugin: CopyWebpackPlugin
     * Description: Copy files and directories in webpack.
     *
     * Copies project static assets.
     *
     * See: https://www.npmjs.com/package/copy-webpack-plugin
     */
    new CopyWebpackPlugin([
      {from: 'src/assets', to: 'assets'}
    ]),
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

}
