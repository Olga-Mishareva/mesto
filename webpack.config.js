const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключение плагина
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: './src/index.js' }, // указали первое место, куда заглянет webpack, — файл index.js в папке src
  output: {                                  // указали в какой файл будет собираться весь js и дали ему имя
    path: path.resolve(__dirname, './dist'),  // переписали точку выхода, используя утилиту path
    filename: 'main.js',  // файл с результатом сборки js-файлов
    publicPath: ''
  },
  mode: 'development',  // добавили режим разработчика
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true,   // это ускорит загрузку в режиме разработки
    port: 8800,      // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    open: true      // сайт будет открываться сам при запуске npm run dev
  },

  module: {
    rules: [ // rules — это массив правил. добавим в него объект правил для бабеля
    {
      test: /\.js$/,           // регулярное выражение, которое ищет все js файлы
      use: 'babel-loader',       // при обработке этих файлов нужно использовать babel-loader
      exclude: '/node_modules/',   // исключает папку node_modules, файлы в ней обрабатывать не нужно
    },
    {
      test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/, // регулярное выражение, которое ищет все файлы с такими расширениями
      type: 'asset/resource'
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader'
      }]
    }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({          // использование плагина
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ]
};

