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
        this.$axios.post('http://localhost:5500/user/logIn', {
            email: payload.email,
            password: payload.password,
        }, {
            withCredentials: true,
        }).then((res) => {
            commit('setMe', res.data);
        }).catch((err) => {
            console.log(err);
        });
    },
    logOut({commit}, payload){
        commit('setMe', null);
    },
    signUp({commit}, payload) {
        this.$axios.post('http://localhost:5500/user/signUp', {
            email: payload.email,
            nickname: payload.nickname,
            password: payload.password,
        },  {
            withCredentials: true,
        }).then((data) => {
            commit('setMe', res.data);
        });
    },
}); 

