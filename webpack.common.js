const path = require("path")

module.exports = {
    entry: {
        'case-picker': "./scripts/case-picker.js"
    },
    module: {

        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use:[{loader:'file-loader'}]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: [{loader:'style-loader'}, {loader:'css-loader'}]
            }
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "assets")
    }
}