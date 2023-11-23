const { I } = inject();

module.exports = {
  // insert your locators and methods here
  fields: {
    username: "#user-name",
    password: "#password",
  },

  loginButton: {
    css: "#login-button",
  },

  popUp: {
    css: "#login_button_container > div > form > div.error-message-container.error > h3 > button",
  },

  efetuoLogin: function (username, password) {
    I.amOnPage("/");
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.password, password);
    I.click(this.loginButton);
  },

  vejoMsgInformativa: function (msg) {
    I.seeElement(this.popUp, msg);
  },
};
