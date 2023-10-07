const path = require("path");

module.exports = {
    mode: 'production',
    entry: {
      obst: "./www/js/obst.js"
    },
    output: {
        filename: '[name].min.js', // Verwendet den Dateinamen der Eingabedatei
        path: path.resolve(__dirname, 'www/js') // Das Ausgabeordnerverzeichnis
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};