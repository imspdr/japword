/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const deps = require('./package.json').dependencies;

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production' || process.env.NODE_ENV === 'production';

  return {
    entry: env.widgetTest ? './src/test-widget.tsx' : './src/index.tsx',
    mode: isProduction ? 'production' : 'development',
    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: 'bundle.js',
      publicPath: 'auto',
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, 'babel.config.js'),
            },
          },
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'japword',
        filename: 'remoteEntry.js',
        exposes: {
          './TodaysWord': './src/exports/TodaysWord/index.tsx',
        },
        shared: {
          react: { singleton: true, requiredVersion: deps.react },
          'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
          '@emotion/react': { singleton: true, requiredVersion: deps['@emotion/react'] },
          '@emotion/styled': { singleton: true, requiredVersion: deps['@emotion/styled'] },
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: path.resolve(__dirname, 'imspdr.png'),
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/404.html"),
        filename: "404.html",
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'public/data', to: 'data', noErrorOnMissing: true }],
      }),
      new CleanWebpackPlugin(),
    ],
    devServer: {
      port: 3300,
      hot: true,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, 'public'),
      },
    },
  };
};
