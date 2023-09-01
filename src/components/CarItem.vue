<script setup>
    import { computed, defineProps } from 'vue';
    const props = defineProps({
        car: {
            type: Object,
            required: true,
        },
    });
    const carRemake = computed(()=>{
        return{
            ...props.car,
            price: props.car.price + ' RUB',
        }
    })
</script>

<template>
    <div class="car">
      <img :src="carRemake.image" alt="car" />
      <h2>{{ props.car.brand }}</h2>
      <p>Цена: {{ carRemake.price }}</p>
      <p>Год выпуска: {{ props.car.year }}</p>
      <p>Объем двигателя: {{ props.car.volume }}</p>
      <p>Цвет: {{ props.car.color }}</p>
    </div>
  </template>

<style scoped>
    .car img {
        width: 10%;
    }
</style>