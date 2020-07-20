const path = require('path');

module.exports = {

    //File path to start up
    entry: './src/index.js',
    
    //Bundle path and name of the file.js
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

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
};