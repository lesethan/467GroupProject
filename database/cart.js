// Model for shopping cart object to use instead of storage into a database

module.exports = function Cart(cart) {
    // Initialize member to store items
    this.items = cart.items || {};

    // Add item to cart
    this.add = (id, quantity) => {
        let part = this.items[id]
        if (!part) {    // If not already in cart, add the new item
            part = this.items[id] = quantity
        } else {
            part += quantity // Add to existing quantity if in cart
        }
    }

    // Remove item from cart
    this.remove = (id) => {
        delete this.items[id];
    }
}