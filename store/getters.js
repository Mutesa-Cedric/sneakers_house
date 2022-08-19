export default{
    getProductById(state,id){
        return state.products.find(product=>product.id===id);
    }
}