const { addAfterLoader, loaderByName } = require('@craco/craco')
const path = require("path");
const { config } = require("dotenv-cra");
config();

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
            "@components": path.resolve(__dirname, "src/components/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
            "@utils": path.resolve(__dirname, "src/utils/"),
            "@pages": path.resolve(__dirname, "src/pages/"),
        },
    },
}
