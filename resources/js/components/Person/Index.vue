<template>
    <div>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <tr>
                    <td>
                        <router-link :to="{name: 'person.show', params:{id: person.id}}">{{ person.name }}</router-link>
                    </td>
                    <td>{{ person.age }}</td>
                    <td>
                        <router-link :to="{name: 'person.edit', params:{id:person.id}}">Edit</router-link>
                    </td>
                    <td>
                        <a href="#" @click.prevent="$store.dispatch('deletePerson',person.id)" class="btn btn-outline-danger">Delete</a>
                    </td>

                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";

export default {

    name: "personIndex",
    mounted() {
        this.$store.dispatch('getPeople')
    },
    methods: {

    },
    computed:{
        people(){
            return this.$store.getters.people;
        }
    }
}
</script>
