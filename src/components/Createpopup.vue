<template>
    <div id="popup" class="popup" v-if="show" @click="hidePopup">
        <div @click.stop class="popup__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toogleMixin from '@/mixins/toggleMixin'

export default {
    name: 'popup',
   mixins: [toogleMixin]
}
</script>

<style scoped>
.popup{
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.5);
    position: fixed;
    display: flex;
}
.popup__content{
    margin: auto;
    background: wheat;
    border-radius: 12px;
    min-width: 400px;
    min-height: 250px;
}
</style>