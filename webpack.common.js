const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  module: {
    rules: [
        {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            loader: require.resolve("babel-loader"),
            exclude: /node_modules/,
            options: {
                presets: [
                    require.resolve("@babel/preset-react"),
                    require.resolve("@babel/preset-typescript"),
                ],
                },
            },
            {        
                test: /\.css$/,        
                use: ["style-loader", "css-loader"],      
            }
        ],
    },
     resolve: {
        extensions: [".ts", ".tsx", ".jsx", ".js"],  
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};