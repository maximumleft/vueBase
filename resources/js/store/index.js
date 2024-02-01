import { createApp } from 'vue'
import { createStore } from 'vuex'
import Person from "@/store/modules/person.js";

const store = createStore({
    modules: {
        Person
    }
})

export default store;
