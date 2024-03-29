const { startDevServer } = require("@cypress/webpack-dev-server");

const webpackConfig = require("@vue/cli-service/webpack.config.js");

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  if (config.testingType === "component") {
    if (!webpackConfig.resolve) {
      webpackConfig.resolve = {};
    }

    webpackConfig.resolve.alias = {
      ...(webpackConfig.resolve.alias || {}),
      vue$: "vue/dist/vue.esm-bundler.js",
    };

    on("dev-server:start", (options) =>
      startDevServer({
        options,
        webpackConfig,
      })
    );
  }

  return config; // IMPORTANT to return a config
};
