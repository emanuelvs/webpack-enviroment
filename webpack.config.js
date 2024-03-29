const path = require('path');

// PLUGINS
// plugin to import and change bundle html tags dynamic
const HtmlWebpackPlugin = require('html-webpack-plugin');
// plugin to clear old files in /dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
    
if(env.development){
    return {

        // For development enviroment
        mode: 'development',
        // Track information of original source code, real names
        // usado para rastrear erros
        devtool: 'inline-source-map',

        //webpack server live reload
        devServer: {
            contentBase: './dist',
        },

        //File path to start up
        //entry: './src/index.js',
        
        //Diferentes outputs
        entry: {
            app: './src/index.ts',
            //print: './src/print.js',
        },
        //Bundle path and name of the file.js
        output: {
            //filename: 'bundle.js',
            // [name] takes the name declared into entry options
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
        },
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ],
        },

        // Plugins to preprocess files
        plugins: [
            new HtmlWebpackPlugin({
                //html document title
                title: 'Output Management'
            }),
            new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        ],

        //For modular apps we need to install some loaders
        module: {
            rules: [
                // Carrega css dinamicamente no javascript
                // import "style.css"
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        "css-loader"
                    ]
                },
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },

                // Carrega arquivos de imagem
                // import Icon from './icon.png;
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                }
            ]
        }
    }
}

}