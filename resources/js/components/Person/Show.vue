<template>
    <div>
        <router-link :to="{name: 'person.edit', params:{id:person.id}}">Edit</router-link>

        <div>
            Name : {{ this.person.name }}
        </div>
        <div>
            Age : {{ this.person.age }}
        </div>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        data(){
            return{
                person:{
                    name: null,
                    age: null,
                },
            }
        },
        mounted() {
            this.getPerson()
        },
        methods:{
            getPerson() {
                axios.get(`/api/people/${this.$route.params.id}`)
                    .then(res => {
                        console.log(res);
                        this.person = res.data.data
                    })
            },
        }
    }
</script>
