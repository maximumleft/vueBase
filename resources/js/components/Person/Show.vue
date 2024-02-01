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

    export default {

        mounted() {
            this.$store.dispatch('getPerson', this.$route.params.id)
        },

        computed:{
            person(){
                return this.$store.getters.person;
            }
        }
    }
</script>
