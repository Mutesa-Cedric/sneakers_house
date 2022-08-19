export default{
    SET_PRODUCTS(state,products){
       state.products=products 
    },
    ADD_TO_CART(state,product){
        state.products.push(product);
    },
    REMOVE_FROM_CART(state,product){
        state.itemsInCart.splice(state.itemsInCart.indexOf(product),1);
    },
    INCREMENT_QUANTITY(state,product){
        product.quantity++;
    },
    DECREMENT_QUANTITY(state,product){
        product.quantity--;
    },
    SET_CART(state,cart){
        state.itemsInCart=cart;
    },
    SET_CURRENT_PRODUCT(state,product){
        state.currentProduct=product
    }
}