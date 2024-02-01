<template>
    <div class="w-25" v-if="person">
        <div class="mb-3">
            <input type="text" v-model="person.name" class="form-control" id="name" placeholder="name">
        </div>
        <div class="mb-3">
            <input type="number" v-model="person.age" class="form-control" id="age" placeholder="age">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled"
                   @click.prevent="$store.dispatch('update',{id: person.id,name: person.name,age: person.age})"
                   type="submit" class="btn btn-primary" value="Update">
        </div>
    </div>
</template>

<script>

export default {

    methods: {

    },
    computed: {
        isDisabled() {
            return this.person.name && this.person.age
        },
        person() {
            return this.$store.getters.person
        },
    },
    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)

    }
}
</script>
