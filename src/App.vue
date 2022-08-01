<template>
    <div class="wrapper">
    <navbar></navbar>
        <router-view></router-view>
    </div>
    <div>
    <!-- <p>{{ message }}</p>
    <button
    @click="reverseMessage"
    >
    Перевернуть сообщение
    </button>  -->
    </div>
</template>


<script>
import Navbar from '@/components/UI/Navbar.vue'
export default {
    components: {
        Navbar
    },
    data () {
        return {
            //  message: 'Привет, Vue!'
        }
    },
    methods: {
    reverseMessage() {
        this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
}
}


</script>

<style lang="scss">
</style>
