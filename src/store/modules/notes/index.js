import axios from 'axios';

//state
const state = () => ({
    listNotes: []
});

//getters
const getters = {
    getListNotes(state) {
        return state.listNotes;
    },
    getCountNotes(state) {
        return state.listNotes.length;
    }
}

//mutation
const mutations = {
    SET_LIST_NOTES(state, data) {
        state.listNotes = data;
    }
}

//actions
const actions = {
    async fetchNotes({ commit }) {
        const res = await axios.get('/Sheet1');
        const {data} =  res;
        commit('SET_LIST_NOTES', data);
        },
        async addNote({}, payload){
            const { id, note, isCompleted} = payload;
            const res = await axios.post('/Sheet1', [{
                id,
                note,
                isCompleted,
            }]);
            console.log(res);
            if (res) {
                return true;
            }

            return false;
        },
        async updateNote({}, payload) {
            //update
        }
}

export default {
    state,
    getters,
    mutations,
    actions
}