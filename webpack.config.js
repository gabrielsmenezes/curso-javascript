module.exports = {
    entry: "index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rule: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                      }
                }
            }
        ]
    }
}