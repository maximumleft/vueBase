import axios from "axios";
import router from "@/router.js";
export default {

    state: () => ({
        person: null,
        people: null,
    }),

    getters: {
        person: (state) => state.person,
        people: (state) => state.people,
    },

    mutations: {
        setPerson(state, person) {
            state.person = person;
        },
        setPeople(state, people) {
            state.people = people;
        },
    },

    actions: {
        getPerson({ state, commit, dispatch }, id) {
            axios.get(`/api/people/${id}`)
                .then(person => {
                    commit('setPerson', person.data.data)
                });
        },
        getPeople({ state, commit, dispatch }) {
            axios.get('/api/people')
                .then(res => {
                    commit('setPeople', res.data.data)
                })
        },
        deletePerson({dispatch},id) {
            axios.delete('/api/people/' + id)
                .then(res => {
                    dispatch('getPeople')
                })
        },
        update({},data) {
            axios.patch(`/api/people/${data.id}`, {name: data.name,age: data.age})
                .then(res =>{
                    router.push({name: 'person.show',params:{id: data.id}})
                })
        },
        store({},data){
            axios.post('/api/people',{name: data.name,age: data.age})
                .then(res =>{
                    router.push({name: 'person.index'})
                })
        },
    },


}

