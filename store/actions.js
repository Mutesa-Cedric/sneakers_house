export default {
    async nuxtServerInit({ commit }, { $axios }) {
        const data = await $axios.$get('/products');
        if (data === null) return
        commit('SET_PRODUCTS', data);
        commit("SET_CURRENT_PRODUCT", data[0]);
    }
}