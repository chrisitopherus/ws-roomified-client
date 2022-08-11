import * as path from 'path';
const config = {
    entry: './src/ws_roomified_client.ts',
    target: 'web',
    output: {
        filename: 'ws_roomified_client.js',
        path: path.resolve('./lib'),
        library: 'ws-roomified-client',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["babel-loader", "ts-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};

export default config;
