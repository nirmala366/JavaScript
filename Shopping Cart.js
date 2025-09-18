class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(name, price) {
    this.items.push({ name, price });
    console.log(`${name} added to cart 🛒`);
  }

  totalPrice() {
    let total = this.items.reduce((sum, item) => sum + item.price, 0);
    console.log("Total Price:", total);
  }

  listItems() {
    console.log("Cart Items:");
    this.items.forEach(i => console.log(`${i.name} - ₹${i.price}`));
  }
}

// Usage
let cart = new ShoppingCart();
cart.addItem("Pen", 10);
cart.addItem("Notebook", 50);
cart.listItems();
cart.totalPrice();
