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

Scenario("Remover produto do carrinho", ({ I, loginPage }) => {
  loginPage.efetuoLogin("standard_user", "secret_sauce");
  I.seeElementInDOM(".shopping_cart_link");
  I.click("#add-to-cart-sauce-labs-backpack");
  I.click("#shopping_cart_container");
  I.seeElement(".title", "Your Cart");
  I.seeElement(".cart_quantity", "1");
  I.click("#remove-sauce-labs-backpack");
  I.dontSeeElement(".cart_item");
});

Scenario("Retornar para tela de produtos", ({ I, loginPage }) => {
  loginPage.efetuoLogin("standard_user", "secret_sauce");
  I.seeElementInDOM(".shopping_cart_link");
  I.click("#add-to-cart-sauce-labs-backpack");
  I.click("#shopping_cart_container");
  I.seeElement(".title", "Your Cart");
  I.click("#continue-shopping");
  I.seeElement(".title", "Products");
});

Scenario("Avançar para a tela de checkout", ({ I, loginPage }) => {
  loginPage.efetuoLogin("standard_user", "secret_sauce");
  I.seeElementInDOM(".shopping_cart_link");
  I.click("#add-to-cart-sauce-labs-backpack");
  I.click("#shopping_cart_container");
  I.seeElement(".title", "Your Cart");
  I.seeElement(".cart_quantity", "1");
  I.seeElement("#remove-sauce-labs-backpack");
  I.click("#checkout");
  I.seeElement(".title", "Checkout: Your Information");
});
