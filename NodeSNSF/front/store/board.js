//
export const state = () =>({
    boards: [],
    imagePaths: [],
});

export const mutations = ({
    getBoard(state, payload) {
        state.boards = payload;
    },
    addBoard(state, payload){
        state.boards.unshift(payload);
    },
    removeBoard(state, payload) {
        state.boards.splice(payload.boardNo);
    },
    concatImagePaths(state, payload) {
        state.imagePaths = state.imagePaths.concat(payload);
    },
    removeImages(state, payload){
        state.imagePaths.splice(payload, 1);
    }
});

export const actions = ({
    add({commit}, payload){
        this.$axios.post('http://localhost:5500/board/addboard', {
            content: payload.content,
            regID: payload.id,
        }).then((res)=> {
            commit('addBoard', res.data);
        }).catch(()=> {

        });
    },
    uploadImages({commit}, payload) {
        this.$axios.post('http://localhost:5500/board/images', payload, {
            withCredentials:true,
        }).then((res) => {
            commit('concatImagePaths', res.data);
        }).catch(() => {

        });
    },
    removeBoard({commit}, payload) {
        this.$axios.post('http://localhost:5500/board/removeBoard', payload, {
            boardNo: payload.boardNo,
        },{
            withCredentials: true,
        }).then((res) => {
            commit('removeBoard', res.data);
        }).catch(()=> {

        });
    },
    getBoard({commit}, payload) {
        this.$axios.post('http://localhost:5500/board/getBoard', {
            withCredentials: true,
        }).then((res) => {
            console.log(res.data);
        })
    }
});
