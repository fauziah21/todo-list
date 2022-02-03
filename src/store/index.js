import { createStore } from "vuex";
import notes from './modules/notes';

const store = createStore({
    state: () => ({
        title: 'My To-do Lists',
        name: 'Fauzia'
    }),
    getters: {
        getTittle(state) {
            return `$(state.title) ${state.name}`;
        }
    },
    mutations: {
        SET_TITLE: (state, data) => {
            if (data !== ''){
                state.title = data;
            }
        }
    },
    actions: {
        //
    },
    modules: {
        notes
    }
});

export default store;
