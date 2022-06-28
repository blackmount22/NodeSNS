export const state = () => ({
    me: null,
});

export const mutations = ({
   setMe(state, payload)  {
    state.me = payload;
   },
});

export const actions = ({
    login({commit}, payload) {
        commit('setMe', payload);
    },
    logOut({commit}, payload){
        commit('setMe', null);
    }
});