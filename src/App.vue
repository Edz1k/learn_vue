<script setup>
    import {ref} from 'vue'
    let counter = ref(0);

    function increase(){
        counter.value ++;
    }
    function decrease(){
        counter.value --;
    }
</script>

<template>
    <div class="test"> {{counter}} 
        <button @click="increase">Add</button>
        <button @click="decrease">Minus</button>
    </div>
</template>



<style>

</style>
