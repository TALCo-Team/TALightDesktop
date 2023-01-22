module.exports = {
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
            terserOptions: {
                keep_classnames: true,
            },
            }),
        ],
    },
  };