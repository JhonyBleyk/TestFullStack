/* eslint-disable */

module.exports = (api) => {
  return {
    presets: [
      [
        "@quasar/babel-preset-app",
        api.caller((caller) => caller && caller.target === "node")
          ? { targets: { node: "current" } }
          : {},
      ],
    ],
  };
};
const app = Vue.createApp({
  setup() {
    return {
      body: "jhony.",
    };
  },
});

app.use(Quasar, { config: {} });
app.mount("#q-app");
