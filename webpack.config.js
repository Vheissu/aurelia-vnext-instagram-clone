const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function loadPostCSSPlugins() {
  return [
    require('postcss-normalize')(),
    require('postcss-import')({
      path: ['src/components/']
    }),
    require('precss')(),
    require('postcss-nested')(),
    require('postcss-advanced-variables')(),
    require('postcss-custom-properties')(),
    require('postcss-partial-import')(),
    require('postcss-extend')(),
    require('postcss-preset-env')({ browsers: ['last 2 versions'] }),
    require('autoprefixer')({ browsers: ['last 2 versions'] }),
    require('cssnano')()
  ];
}

const Loaders = {
  style: { loader: 'style-loader' },
  css: { loader: 'css-loader' },
  postCss: {
    loader: 'postcss-loader',
    options: {
      plugins: loadPostCSSPlugins
    }
  }
};

module.exports = function(env, { mode }) {
  const production = mode === 'production';

  return {
    mode: production ? 'production' : 'development',
    entry: './src/startup.ts',
    devtool: production ? 'source-map' : 'eval-source-map',
    resolve: {
      extensions: ['.ts'],
      modules: ['src', 'node_modules']
    },
    devServer: {
      port: 9000,
      historyApiFallback: true,
      open: true,
      lazy: false
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, Loaders.css, Loaders.postCss]
        },
        { test: /\.ts$/i, loader: 'ts-loader' },
        { test: /\.html$/i, loader: 'html-loader' },
        {
          test: /\.(png|gif|jpg|cur)$/i,
          loader: 'url-loader',
          options: { limit: 8192 }
        },
        {
          test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
          loader: 'url-loader',
          options: { limit: 10000, mimetype: 'application/font-woff2' }
        },
        {
          test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
          loader: 'url-loader',
          options: { limit: 10000, mimetype: 'application/font-woff' }
        },
        {
          test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'index.ejs' }),
      new MiniCssExtractPlugin({
        filename: production ? '[contenthash].css' : '[id].css',
        allChunks: true
      })
    ]
  };
};
