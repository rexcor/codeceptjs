const { faker } = require("@faker-js/faker");

Feature("login");

Scenario("Tela login disponivel", ({ I }) => {
  I.amOnPage("/");
  I.seeTitleEquals("Swag Labs");
});

Scenario("Efetuar login com sucesso", ({ I }) => {
  const login = "standard_user";
  const pass = "secret_sauce";

  I.amOnPage("/");
  I.fillField("#user-name", login);
  I.fillField("#password", pass);
  I.click("#login-button");
  I.seeElementInDOM(".shopping_cart_link");
});

Scenario("Efetuar login com usuário inválido", ({ I }) => {
  const login = faker.person.firstName();
  const pass = "teste";

  I.amOnPage("/");
  I.fillField("#user-name", login);
  I.fillField("#password", pass);
  I.click("#login-button");
  I.seeElement(
    "#login_button_container > div > form > div.error-message-container.error > h3 > button",
    "Epic sadface: Username and password do not match any user in this service"
  );
});

Scenario("Validar obrigatoriedade dos campos de login", ({ I }) => {
  const login = faker.person.firstName();
  const pass = "secret_sauce";

  I.amOnPage("/");
  I.click("#login-button");
  I.seeElement(
    "#login_button_container > div > form > div.error-message-container.error > h3",
    "Epic sadface: Username is required"
  );
  I.fillField("#user-name", login);
  I.click("#login-button");
  I.seeElement(
    "#login_button_container > div > form > div.error-message-container.error > h3",
    "Epic sadface: Password is required"
  );
});
