const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./e2e/*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://www.saucedemo.com",
      show: true,
    },
  },
  include: {
    I: "./steps_file.js",

    loginPage: "./pages/login.js",
    shoppingCartPage: "./pages/shoppingCart.js",
  },
  name: "codeceptjs",
};
