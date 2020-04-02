import axios from 'axios'

export const state = () => ({
    AllUsers:[],
});

export const actions = {
    loadData({commit}){
        axios.get("http://localhost:4000/Auth/Users")
          .then((response)=>{
            console.log(response.data);
            commit('AllUsers', response.data)
        });
    },
}
export const mutations = {
    AllUsers(state,value){
        state.AllBooks = value;
    }
}