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
    });
    const carRemakeSec = computed(()=>{
        return{
            ...props.car,
            newpole: props.car.price * props.car.volume,
        }
    });
    function changeColor(color) {
        const crappyColors = ['#FF0000', '#00FF00', '#0000FF']
        if(crappyColors.includes(color)){
            return true;
        }
        return false;
    }
</script>

<template>
    <div class="car">
      <img :src="carRemake.image" alt="car" />
      <h2>{{ props.car.brand }}</h2>
      <p>Цена: {{ carRemake.price }}</p>
      <p>Год выпуска: {{ props.car.year }}</p>
      <p>Объем двигателя: {{ props.car.volume }}</p>
      <p>Цвет: {{ props.car.color }}</p>
      <p>Новое поле: {{ carRemakeSec.newpole }}</p>
      <div class="chipes">
        <span v-if="Number(carRemake.price.slice(0,-3)) > 1000000">Дорогой автомобиль</span>
        <span v-if="changeColor(carRemakeSec.color)">Конченный цвет</span>
      </div>
    </div>
  </template>

<style scoped>
    .car img {
        width: 10%;
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