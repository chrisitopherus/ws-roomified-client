import * as path from 'path';
import NpmDtsPlugin from 'npm-dts-webpack-plugin';
const config = {
    entry: './src/index.ts',
    output: {
        filename: 'ws_roomified_client.js',
        path: path.resolve('./lib'),
        library: 'ws-roomified-client',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new NpmDtsPlugin({
            output: 'ws_roomified_client.d.ts',
        })
    ],
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
