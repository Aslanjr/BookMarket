import axios from 'axios'

export const state = () => ({
    AllBooks:[],
});

export const actions = {
    loadData({commit}){
        axios.get("http://secret-thicket-56030.herokuapp.com/api/books")
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