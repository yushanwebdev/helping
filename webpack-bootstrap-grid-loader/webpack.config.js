const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                	{loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            }
        ]
    }
}