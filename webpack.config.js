const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    module: {
        rules: [ 
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets:[ 'env', 'react' ]
                }
            }, 
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }, 
            {
                test: /\.(eot|svg|tff|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: './src/components/[name].[ext]',
                },
            },        
        ],
    },
    plugins: [htmlPlugin]
};