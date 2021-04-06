const path = require('path');

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
}