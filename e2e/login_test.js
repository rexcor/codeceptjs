Feature("login");

Scenario("Tela login disponivel", ({ I }) => {
  I.amOnPage("/");
  I.seeTitleEquals("Swag Labs");
});

Scenario("Efetuar login com sucesso", ({ I }) => {
  I.amOnPage("/");
  I.fillField("#user-name", "standard_user");
  I.fillField("#password", "secret_sauce");
  I.click("#login-button");
  I.seeElementInDOM(".shopping_cart_link");
});
