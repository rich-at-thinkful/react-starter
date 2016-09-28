var packageData = require('./package.json');

module.exports = {
    context: __dirname + "/src",
    entry: "./" + packageData.main,
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        ]
    },
    sassLoader: {
        includePaths: [__dirname + '/sass']
    },
    devtool: 'source-map'
};