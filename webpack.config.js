var path=require("path");
var HtmlWebpackPlugin= require('html-webpack-plugin');

module.exports={
    entry:'./app/hello.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: 'hello_bundle.js',
        publicPath:'/'
    },
    module:{
        rules:[
            {test:/\.(js)$/,use: 'babel-loader'},
            {test:/\.css$/,use: ['style-loader', 'css-loader']},
        ]
    },
    mode: process.env.NODE_ENV==='production'? 'production': 'development',
    devServer:{
        historyApiFallback:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'app/hello.html'
        })
    ]
};