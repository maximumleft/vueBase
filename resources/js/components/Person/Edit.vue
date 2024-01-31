<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" v-model="name" class="form-control" id="name" placeholder="name">
        </div>
        <div class="mb-3">
            <input type="number" v-model="age" class="form-control" id="age" placeholder="age">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="update" type="submit" class="btn btn-primary" value="Update">
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            name: null,
            age: null,
        }
    },
    methods: {
        getPerson() {
            axios.get(`/api/people/${this.$route.params.id}`)
                .then(res => {
                    this.name = res.data.data.name
                    this.age = res.data.data.age
                })
        },
        update() {
            axios.patch(`/api/people/${this.$route.params.id}`, {name: this.name,age: this.age})
                .then(res =>{
                    this.$router.push({name: 'person.show',params:{id: this.$route.params.id}})
                })
        },
    },
    computed:{
        isDisabled(){
            return this.name && this.age
        },
    },
    mounted() {
        this.getPerson()
    }
}
</script>
