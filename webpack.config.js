const path = require('path');

module.exports = {

    //File path to start up
    entry: './src/index.js',
    
    //Bundle path and name of the file.js
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};