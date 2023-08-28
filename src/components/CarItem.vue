<script setup>
    const props = defineProps({
        car: {
            type: Object,
            required: true,
        },
    })
</script>

<template>
    <div class="car">
      <img :src="props.image" alt="car" />
      <h2>{{ props.brand }}</h2>
      <p>Цена: {{ props.price }}</p>
      <p>Год выпуска: {{ props.year }}</p>
      <p>Объем двигателя: {{ props.volume }}</p>
      <p>Цвет: {{ props.color }}</p>
    </div>
  </template>

<style scoped>

</style>