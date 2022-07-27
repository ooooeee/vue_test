<template>
   <input :value="modelValue" @input="apdateInput" type="text">
</template>

<script>
import { stringLiteral } from '@babel/types'

export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        apdateInput(event) {
            this.$emit('update:modelValue', event.target.value )
        }
    }
}
</script>

<style>

</style>