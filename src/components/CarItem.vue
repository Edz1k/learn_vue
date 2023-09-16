<script setup>
    import { defineProps } from 'vue';
    import Card from 'primevue/card';
    import Chip from 'primevue/chip';

    const props = defineProps({
        car: {
            type: Object,
            required: true,
        },
    });
    function changeColor(color) {
        const crappyColors = ['#FF0000', '#00FF00', '#0000FF']
        if(crappyColors.includes(color.toUpperCase())){
            return true;
        }
        return false;
    }
</script>

<template>
    <Card>
      <template #header>
        <img :src="props.car.image" alt="car" class="car-image" />
      </template>
      <template #title> {{ props.car.brand }} </template>
      <template #content>
        <p>Цена: {{ props.car.price }}</p>
        <p>Год выпуска: {{ props.car.year }}</p>
        <p>Объем двигателя: {{ props.car.volume }}</p>
        <p :style="`color: ${props.car.color}`">Цвет: {{ props.car.color }}</p>
      </template>
      <template #footer>
        <div class="chipes">
            <Chip v-if="Number(props.car.price.slice(0, -3)) > 1000000" label="Дорогой" icon="pi pi-money-bill" />
            <Chip v-else label="Дешевый" icon="pi pi-money-bill" />
            <Chip v-if="Number(props.car.year) > 2010" label="Новый" icon="pi pi-briefcase" />
            <Chip v-else label="Старый" icon="pi pi-briefcase" />
          <span v-if="changeColor(props.car.color)">Плохой цвет</span>
        </div>
      </template>
    </Card>
  </template>

<style scoped>
    .car-image{
        width: 100%;
    }
    .chipes {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
    .chipes span{
        margin: 5px;
        padding: 5px;
        border: 1px solid black;
        border-radius: 5px;
    }
    .chipes > div {
      margin-bottom: 10px;
    }
</style>