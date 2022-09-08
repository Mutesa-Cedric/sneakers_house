export default {
    SET_PRODUCTS(state, products) {
        state.products = products
    },
    ADD_TO_CART(state, product) {
        for(let i=0;i<state.itemsInCart.length;i++){
            if(product.id===state.itemsInCart[i].id) return alert("item already exist");
        }
        state.itemsInCart.push(product);
    },
    REMOVE_FROM_CART(state, product) {
        state.itemsInCart.splice(state.itemsInCart.indexOf(product), 1);
    },
    INCREMENT_QUANTITY(state, product) {
        product.quantity++;
    },
    DECREMENT_QUANTITY(state, product) {
        product.quantity--;
    },
    SET_CART(state, cart) {
        state.itemsInCart = cart;
    },
    SET_CURRENT_PRODUCT(state, product) {
        state.currentProduct = product
    },
    TOGGLE_SHOW_CART(state) {
        state.showCart = !state.showCart;
    }
}