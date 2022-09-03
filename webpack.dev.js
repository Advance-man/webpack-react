const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//将css提取到一个文件中
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // css压缩
const TerserWebpackPlugin = require("terser-webpack-plugin"); //js压缩
const os = require("os");

const threads = os.cpus().length;

module.exports = {
  mode:"development",  //配置webpack 工作模式：development production none 三种模式
  entry:'./src/main.js',//入口文件
  output:{
    path: path.resolve(__dirname,"dist"),//输出目录
    filename: "static/js/[name].[contenthash:10].js",//js文件输出目录
    chunkFilename: "static/js/[name].chunk.[contenthash:10].js", //配置chunk文件名配合splitcode使用
    assetModuleFilename: 'static/images/[hash][ext][query]',
    clean:true
  },
  module:{
    rules:[
      {
        test:/\.css$/,     // 处理css文件
        use:[
          MiniCssExtractPlugin.loader,  // 将CSS 插入到 DOM 中
          "css-loader",     // 将css转为js认识的模块
          {
            loader:"postcss-loader",
            options:{
              postcssOptions:{
                plugins:[
                  ["postcss-preset-env"]
                ]
              }
            }
          }
        ]
      },
      {
        test:/\.less$/,   //处理less文件
        use:[
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader:"postcss-loader",  //使用postcss对CSS做兼容性处理，同时package.json田间browserslist
            options:{
              postcssOptions:{
                plugins:[
                  ["postcss-preset-env"]
                ]
              }
            }
          },
          "less-loader"   //将less转为css，下载依赖时需要下载less
        ]
      },
      {
        test:/\.s[ac]ss$/,
        use:[
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader:"postcss-loader", //
            options:{
              postcssOptions:{
                plugins:[
                  ["postcss-preset-env"]
                ]
              }
            }
          },
          "sass-loader"
        ]
      },
      {
        test:/\.styl$/,
        use:[
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader:"postcss-loader",
            options:{
              postcssOptions:{
                plugins:[
                  ["postcss-preset-env"]
                ]
              }
            }
          },
          "stylus-loader"
        ]
      },
      {
        test:/\.(png|jpe?g)/, //处理图片资源
        type:"asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 10kb
          }
        }
      },
      {
        test:/\.(ttf|woff2?|mp3|mp4)/, //处理字体资源
        type:"asset/resource",
        generator: {
          filename: 'static/style/media/[hash][ext][query]'
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader:"thread-loader",
          options:{
            works: threads, //babel 启动多进程
          }
        },
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory:true,   // 启动babel-loader缓存
            cacheCompression:false,//缓存时禁止压缩
          }
        }
      ],
      }
    ]
  },
  plugins:[
    new ESLintPlugin({
      context:path.resolve(__dirname,"./src"),
      exclude:"/node_modules/",
      threads, //eslint  启动多进程
      cache:true,  //配置eslint缓存
      cacheLocation:path.resolve(__dirname,"./node_modules/.cache/eslintcache") //配置缓存路径
    }),
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,"public/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "static/style/css/[name].[conthash:10].css",
      chunkFilename:"static/style/css/[name].chunk.[conthash:10].css",
    })
  ],
  optimization: {
    minimize: true,
    minimizer:[
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin({
        parallel:threads,      //启动多进程
        extractComments:false, //关闭默认生成 LICENSE.txt 文件
      })
    ],
    splitChunks:{
      chunks:"all",
      cacheGroups:{
        react:{
          test:/node_modules[\\/]react(.*)?[\\/]/,
          name:"chunk-react",
          priority:30,
        },
        lodash:{
          test:/node_modules[\\/]lodash[\\/]/,
          name:"chunk-lodash",
          priority:20,
        },
        lib:{
          test:/node_modules[\\/]/,
          name:"chunk-lib",
          priority:10,
        }
      }
    },
    runtimeChunk:{
      name:()=>`runtime`,
    }
  },
  resolve: {
    extensions: ['.js', '.json', '.wasm'],
  },
  devtool:"source-map",
  devServer:{
    host:"localhost",
    port:3000,
    open:true,
    hot:true,
    historyApiFallback: true,
  }
};