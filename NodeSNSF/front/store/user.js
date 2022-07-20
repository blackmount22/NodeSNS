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
    },

    signUp({commit}, paylaod) {
        this.$axios.post('http://localhost:5500/user/signup', {
            email: payload.email,
            nickname: payload.nickname,
            password: payload.password,
        },  {
            withCredentials: true,
        }).then((data) => {
            console.log(res);
            commit('setMe', res.data);
        });
    },
});