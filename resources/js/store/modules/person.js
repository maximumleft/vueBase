import axios from "axios";
export default {

    state: () => ({
        person: {},
    }),

    getters: {
        person: (state) => state.person,
    },

    mutations: {
        setPerson(state, person) {
            state.person = person;
        },
    },

    actions: {
        getPerson({ state, commit, dispatch }, id) {
            axios.get(`/api/people/${id}`)
                .then(person => {
                    commit('setPerson', person.data.data)
                });
        },
    },

}

