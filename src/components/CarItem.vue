<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        car: {
            type: Object,
            required: true,
        },
    })
</script>

<template>
    <div class="car">
      <img :src="props.car.image" alt="car" />
      <h2>{{ props.car.brand }}</h2>
      <p>Цена: {{ props.car.price }}</p>
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