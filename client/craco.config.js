const { addAfterLoader, loaderByName } = require('@craco/craco')
const path = require("path");

module.exports = {
    webpack: {
        configure(webpackConfig) {
            addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
                test: /\.mdx?$/,
                loader: require.resolve('@mdx-js/loader')
            });

            webpackConfig.resolve.extensions.push(".jsx");

            return webpackConfig
        },
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@styles": path.resolve(__dirname, "src/components/styles"),
            "@utils": path.resolve(__dirname, "src/components/utils"),
        },
    },
}
