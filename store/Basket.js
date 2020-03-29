export const state = () => ({
    AllBasket:[],
});

export const actions = {
    addBasket({commit},value){
        commit('addToBasket',value);
      }
}
export const mutations = {
    addToBasket(state,value){
        state.AllBasket = value;
    }
}