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
    <div class="buttons"> {{counter}} 
        <button @click="increase" class="increase">Add</button>
        <button @click="decrease" class="decrease">Minus</button>
    </div>
</template>

<style scoped>
.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .increase {
    background-color: green;
  }
  
  .decrease {
    background-color: red;
  }
</style>