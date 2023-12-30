const { I } = inject();

module.exports = {
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

  removoProduto: function (qty, productNameDescription) {
    I.amOnPage("/cart.html");
    I.seeElement(this.elements.cartQty, qty);
    I.seeElement(this.elements.productName, productNameDescription);
    const removeButton = this.removeButton(productNameDescription);
    I.click(removeButton);
    I.dontSeeElement(this.elements.cart);
  },

  retornaHome: function () {
    I.amOnPage("/cart.html");
    I.click(this.continueShoppingButton);
  },

  checkout: function () {
    I.click(this.checkoutButton);
    I.amOnPage("/checkout-step-one.html");
  },
};
