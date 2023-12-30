const { I } = inject();

module.exports = {
  shopppingCartUrl: "/cart.html",

  elements: {
    cartQty: ".cart_quantity",
    cart: ".cart_item",
    productName: ".inventory_item_name",
  },

  removeButton: function (productNameDescription) {
    return {
      css: `#remove-${productNameDescription}`,
    };
  },

  continueShoppingButton: {
    css: "#continue-shopping",
  },

  checkoutButton: {
    css: "#checkout",
  },

  produtosEscolhidos: function (qty, productNameDescription) {
    I.amOnPage(this.shopppingCartUrl);
    I.seeElement(this.elements.cartQty, qty);
    I.seeElement(this.elements.productName, productNameDescription);
  },

  removoProduto: function (qty, productNameDescription) {
    this.produtosEscolhidos(qty, productNameDescription);
    const removeButton = this.removeButton(productNameDescription);
    I.click(removeButton);
    I.dontSeeElement(this.elements.cart);
  },

  retornaHome: function () {
    I.amOnPage(this.shopppingCartUrl);
    I.click(this.continueShoppingButton);
    I.seeElement(".title", "Products");
  },

  checkout: function () {
    I.click(this.checkoutButton);
    I.amOnPage("/checkout-step-one.html");
    I.seeElement(".title", "Checkout: Your Information");
  },
};
