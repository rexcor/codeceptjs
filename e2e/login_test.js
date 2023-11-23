Feature("login");

Scenario("Efetuar login com sucesso", ({ I, loginPage }) => {
  loginPage.efetuoLogin("standard_user", "secret_sauce");
  I.seeElementInDOM(".shopping_cart_link");
});

Scenario("Efetuar login com usuário inválido", ({ I, loginPage }) => {
  loginPage.efetuoLogin("joão", "teste");
  loginPage.vejoMsgInformativa(
    "Epic sadface: Username and password do not match any user in this service"
  );
});

Scenario("Validar obrigatoriedade dos campos de login", ({ I, loginPage }) => {
  loginPage.efetuoLogin("", "teste");
  loginPage.vejoMsgInformativa("Epic sadface: Username is required");
  loginPage.efetuoLogin("a", "");
  loginPage.vejoMsgInformativa("Epic sadface: Password is required");
});
