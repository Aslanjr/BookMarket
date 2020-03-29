import axios from 'axios'

export const state = () => ({
    AllBooks:[],
});

export const actions = {
    loadData({commit}){
        axios.get("http://localhost:4000/api/Books")
          .then((response)=>{
              console.log(response.data);
            commit('addToBooks', response.data)
          });
      }
}
export const mutations = {
    addToBooks(state,value){
        state.AllBooks = value;
    }
}