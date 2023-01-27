const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
  devServer: {
    client: {
      overlay: {
        warnings: false,
        errors: false,
      },

      // or
      overlay: false,
    },
  },
});
