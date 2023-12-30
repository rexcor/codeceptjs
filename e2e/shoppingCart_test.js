const shoppingCart = require("../pages/shoppingCart");

Feature("Carrinho de compras");

Scenario("Adicionar produto no carrinho", ({ I, loginPage }) => {
  loginPage.efetuoLogin("standard_user", "secret_sauce");
  I.seeElementInDOM(".shopping_cart_link");
  I.click("#add-to-cart-sauce-labs-backpack");
  I.click("#shopping_cart_container");
  I.seeElement(".title", "Your Cart");
  I.seeElement(".cart_quantity", "1");
  I.seeElement("#remove-sauce-labs-backpack");
});

Scenario(
  "Remover produto do carrinho",
  ({ I, loginPage, shoppingCartPage }) => {
    loginPage.efetuoLogin("standard_user", "secret_sauce");
    I.seeElementInDOM(".shopping_cart_link");
    I.click("#add-to-cart-sauce-labs-backpack");
    I.click("#shopping_cart_container");
    shoppingCartPage.removoProduto("1", "sauce-labs-backpack");
  },
);

Scenario(
  "Retornar para tela de produtos",
  ({ I, loginPage, shoppingCartPage }) => {
    loginPage.efetuoLogin("standard_user", "secret_sauce");
    I.seeElementInDOM(".shopping_cart_link");
    I.click("#add-to-cart-sauce-labs-backpack");
    I.click("#shopping_cart_container");
    shoppingCartPage.retornaHome();
    I.seeElement(".title", "Products");
  },
);

Scenario(
  "Avançar para a tela de checkout",
  ({ I, loginPage, shoppingCartPage }) => {
    loginPage.efetuoLogin("standard_user", "secret_sauce");
    I.seeElementInDOM(".shopping_cart_link");
    I.click("#add-to-cart-sauce-labs-backpack");
    I.click("#shopping_cart_container");
    I.seeElement(".title", "Your Cart");
    I.seeElement(".cart_quantity", "1");
    shoppingCartPage.checkout();
    I.seeElement(".title", "Checkout: Your Information");
  },
);
