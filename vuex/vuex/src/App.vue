<template>
    <div id="app">
        <count></count>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Vuex from 'vuex'
    import Count from './components/Count.vue'

    Vue.use(Vue)
    Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    }
})

new Vue({
    el: '#app',
    computed: {
        count () {
            return store.state.count
        }
    },
    methods: {
        increment () {
        store.commit('increment')
        },
        decrement () {
            store.commit('decrement')
        }
    }
})
export default {
    components: {
        'count': Count
    }
}

</script>

<style>


</style>
