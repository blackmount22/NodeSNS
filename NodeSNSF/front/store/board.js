//
export const state = () =>({
    boards: [],
});

export const mutations = ({
    addBoard(state, payload){
        state.boards.unshift(payload);
    }
});

export const actions = ({
    add({commit}, payload){
        this.$axios.post('http://localhost:5500/board/addboard', {
            content: payload.content,
            regID: payload.id,
        })
        commit('addBoard', payload);
    }
});