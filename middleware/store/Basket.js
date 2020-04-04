export const state = () => ({
    AllBasket:[],
    cartCount:0,
    totalPrice:0
});

export const actions = {
    addBasket({commit},value){
        commit('addToBasket',value);
    },
    removeBasket({commit},value){
        commit('removeFromBasket',value);
    },
}
export const mutations = {
    addToBasket(state,value){
        state.AllBasket.push(value);
        state.totalPrice += value.Amount;
        state.cartCount++;
    },
    removeFromBasket(state, value) {
        let index = state.AllBasket.indexOf(value);
        if (index > -1) {
            state.AllBasket.splice(index, 1);
        }
        state.totalPrice -= value.Amount;
        state.cartCount--;
    }
}