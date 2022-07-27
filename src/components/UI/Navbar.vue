<template>
    <div class="navbar">
        <Mybutton @click="$router.push('/')">Главная</Mybutton>
        <div class="navbar_btns">
            <Mybutton @click="$router.push('/post')">Посты</Mybutton>
            <Mybutton @click="$router.push('/about')">О сайте</Mybutton>
            <Mybutton>sdsdadw</Mybutton>
        </div>
    </div>
</template>

<script>
import Mybutton from '@/components/UI/Mybutton.vue';

export default {
    return: {},
    components: { Mybutton, Mybutton }
}

</script>

<style>
.navbar{
    height: 50xp;
    background-color: lightblue;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
}
.navbar_btns{
    margin-left: auto;
}
</style>