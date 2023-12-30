const shoppingCart = require("../pages/shoppingCart");

Feature("Carrinho de compras");

Scenario(
  "Adicionar produto no carrinho",
  ({ I, loginPage, shoppingCartPage }) => {
    loginPage.efetuoLogin("standard_user", "secret_sauce");
    I.seeElementInDOM(".shopping_cart_link");
    I.click("#add-to-cart-sauce-labs-backpack");
    I.click("#shopping_cart_container");
    shoppingCartPage.produtosEscolhidos("1");
  },
);

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
  },
);

Scenario(
  "Avançar para a tela de checkout",
  ({ I, loginPage, shoppingCartPage }) => {
    loginPage.efetuoLogin("standard_user", "secret_sauce");
    I.seeElementInDOM(".shopping_cart_link");
    I.click("#add-to-cart-sauce-labs-backpack");
    I.click("#shopping_cart_container");
    shoppingCartPage.produtosEscolhidos("1");
    shoppingCartPage.checkout();
  },
);
