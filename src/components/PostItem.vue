<template>
    <div class="post">
    <div>
        <div><strong>{{ post.id }}</strong></div>
        <div><strong>title: </strong>{{ post.title }}</div>
        <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <my-button
    @click="$router.push(`/post/${post.id}`)">
        Открыть
    </my-button>
    <my-button
    @click="$emit('remove', post)"
    >
        Удалить
    </my-button>
    </div>
    
</template>

<script>

export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        
    }

}
</script>

<style lang="">
    
</style>