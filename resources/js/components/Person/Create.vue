<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" v-model="name" class="form-control" id="name" placeholder="name">
        </div>
        <div class="mb-3">
            <input type="number" v-model="age" class="form-control" id="age" placeholder="age">
        </div>
        <div class="mb-3">
            <input  :disabled="!isDisabled" @click.prevent="store" type="submit" class="btn btn-primary" value="Add">
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data(){
            return{
                name: null,
                age: null,
            }
        },
        methods:{
          store(){
            axios.post('/api/people',{name: this.name,age: this.age})
                .then(res =>{
                    this.$router.push({name: 'person.index'})
                })
          },

        },
        computed:{
            isDisabled(){
                return this.name && this.age
            },
        },
        mounted() {
        }
    }
</script>
