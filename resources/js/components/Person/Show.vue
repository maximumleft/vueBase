<template>
    <div>
        <router-link :to="{name: 'person.edit', params:{id:person.id}}">Edit</router-link>

        <div>
            Name : {{ person.name }}
        </div>
        <div>
            Age : {{ person.age }}
        </div>
    </div>

</template>

<script>
    import axios from "axios";

    export default {

        mounted() {
            this.$store.dispatch('getPerson', this.$route.params.id)
        },
        methods:{
            getPerson() {
                axios.get(`/api/people/${this.$route.params.id}`)
                    .then(res => {
                        console.log(res);
                        this.person = res.data.data
                    })
            },
        },
        computed:{
            person(){
                return this.$store.getters.person;
            }
        }
    }
</script>
