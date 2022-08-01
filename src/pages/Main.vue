<template>
    <div id="main">
        <transition name="title_show">
            <h1 v-if="show">Добро пожаловать в мой первый проект на Vue</h1>
        </transition>
        <Mybutton @click="show = !show">click</Mybutton>
        <!-- <router-link :to="'/post'">post</router-link>
        <br>
        <router-link to="/about">about us</router-link> -->
    </div>
</template>

<script>
import Mybutton from "@/components/UI/Mybutton.vue";
export default {
    components: { Mybutton, Mybutton },
    data() {
        return {
            props: {
                show: {
                    type: Boolean,
                    default: false
                }
            },
            show: false
        }
    },
    methods: {
        showTitle() {
            showing = true
        },
        Popup () {
            this.$emit('update:show', true)
        },
    },
    mounted() {
        this.Popup()
    }
}
</script>

<style scoped>
h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
    text-align: center;
    margin-top: 300px;
    color: white;
    opacity: 1;
}

.title_show-enter-from {
    margin-top: 200px;
    opacity: 0;
}

.title_show-enter-to {
    margin-top: 300px;
    opacity: 1;
    transition: all 1s ease;
}

.title_show-leave-from {
    opacity: 1;
}

.title_show-leave-active {
    opacity: 0;
    transition: all 1s ease;
}



.show_title-enter-active,
.show_title-leave-active {
    transition: all 1s ease-out;
}

.show_title-enter-from,
.show_title-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.show_title-enter-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>