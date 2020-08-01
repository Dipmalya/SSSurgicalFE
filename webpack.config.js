const webpack = require("webpack");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
module.exports = {
    "devServer": {
        "port": 5000,
        "contentBase": "./dist",
        "hot": true,
        "historyApiFallback": {
            "disableDotRule": true,
        },
    },
    "entry": "./src/index.jsx",
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": ["babel-loader"]
            },
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": ["eslint-loader"]
            },
            {
                "test": /\.scss$/,
                "loader": 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    "resolve": {
        "extensions": [
            "*",
            ".js",
            ".jsx"
        ]
    },
    "output": {
        "path": `${__dirname}/dist`,
        "publicPath": "/",
        "filename": "bundle.js"
    },
    "plugins": [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new LodashModuleReplacementPlugin
    ]
};
