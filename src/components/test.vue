<template>
    <div v-for="({name}, index) in maps">
        <div> {{index}} {{name}} </div>
    </div>
</template>

<script>
export default {
    props: {
        maps: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            maps: [
                {name: 'first value'},
                {name: 'second value'},
                {name: 'third value'},
            ]
        }
    }, 
   
    
}

</script>

<style>
</style>