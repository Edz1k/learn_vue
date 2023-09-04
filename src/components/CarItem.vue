<script setup>
    import { computed, defineProps } from 'vue';
    import Card from 'primevue/card';
    import Chip from 'primevue/chip';

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
            newpole: props.car.price * props.car.volume,
        }
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
        <img :src="carRemake.image" alt="car" class="car-image" />
      </template>
      <template #title> {{ carRemake.brand }} </template>
      <template #content>
        <p>Цена: {{ carRemake.price }}</p>
        <p>Год выпуска: {{ carRemake.year }}</p>
        <p>Объем двигателя: {{ carRemake.volume }}</p>
        <p :style="`color: ${carRemake.color}`">Цвет: {{ carRemake.color }}</p>
      </template>
      <template #footer>
        <div class="chipes">
            <Chip v-if="Number(carRemake.price.slice(0, -3)) > 1000000" label="Дорогой" icon="pi pi-apple" />
            <Chip v-else label="Дешевый" icon="pi pi-android" />
            <Chip v-if="Number(carRemake.year) > 2010" label="Новый" icon="pi pi-briefcase" />
            <Chip v-else label="Старый" icon="pi pi-briefcase" />
          <span v-if="changeColor(carRemake.color)">Плохой цвет</span>
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
</style>