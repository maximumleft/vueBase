<template>
    <div>
        <div>
            <router-link :to="{ name: 'person.index'}">People</router-link>
        </div>
        <div>
            <router-link :to="{ name: 'person.create'}">Create</router-link>
        </div>
<!--        <div>-->
<!--            <router-link :to="{ name: 'person.edit'}">Edit</router-link>-->
<!--        </div>-->
        <router-view></router-view>

    </div>
</template>

<script>
export default {
    mounted() {
    }
}
</script>
