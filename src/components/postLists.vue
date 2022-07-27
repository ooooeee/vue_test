<template>
        <section v-if="posts.length > 0">
        <TransitionGroup name="user-list">
        <PostItem class="post" v-for="post in posts" 
        :post="post"
        :key = "post.id"
        @remove ="$emit('remove', post)"
        />
        </TransitionGroup>
        </section>
        <h2 v-else style="color:red;">
        список постов пуст
        </h2>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
    props: {
        posts: {
            type: Array,
            required: true,
        }
    },
    components: { PostItem }
}
</script>

<style scoped>
.user-list-item{
    display: inline-block;
    margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
    transition: all 0.5s ease;
}

.user-list-enter-from,
.user-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.user-list-move{
    transition: transform 0.8s ease;
}
</style>