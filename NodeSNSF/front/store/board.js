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
            title: payload.title,
            content: payload.content,
            regID: payload.regID,
            regDate: moment().toDate(),
        })
        commit('addBoard', payload);
    }
});