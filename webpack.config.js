const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); 



module.exports={
    mode:'development',
    entry:{
        admin_entry:'./src/app/app.module.ts'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[chunkhash].js'
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:['ts-loader'],
                exclude:[/\.(spec|e2e|d)\.ts$/]
            },
            {
                test:/\.json$/,
                use:['json-loader']
            },
            {
                test:/\.html$/,
                use:'html-loader'
            },
            {
                test:/\.less$/,
                use:[ 
                    // MiniCssExtractPlugin.loader,
                    'css-loader','less-loader']
            },
            {
                test: /\.(svg|gif|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader"
            },
            {
                test: /\.(woff|woff2|ttf|eot|jpeg)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader?name=font/[name].[ext]'
            }
        ]
    },
    resolve:{
        extensions:['.ts','.js']
    },
    devtool:'source-map',
    plugins:[
        //默认清除dist文件夹
        new CleanWebpackPlugin(),
        //将CSS提取到单独的文件中
        // new MiniCssExtractPlugin({
        //     filename: '[name].[contenthash].css',
        //     // chunkFilename:  '[id].[contenthash].css',
        // }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        //可视化的分析工具,浏览器会自动打开分析的页面，展示各个文件的大小
        // new BundleAnalyzerPlugin()

    ],
    optimization: {
        //设置runtimeChunk是将包含chunks 映射关系的 list单独从入口js里提取出来
        runtimeChunk: 'single',
          
      },

}