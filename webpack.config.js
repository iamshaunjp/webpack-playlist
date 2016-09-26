module.exports = {

    //define entry point
    entry: './src/script-1.js',

    //define output point
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },

     module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ] //loaders
    } //module

};
