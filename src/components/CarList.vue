<script setup>
    import CarItem from '@/components/CarItem.vue';
    import { defineProps } from 'vue';

    defineProps({
        cars: {
            type: Array,
            required: true,
        },
    });
</script>

<template>
    <section class="carr">
        <section class="cars" v-for="car in carsArray" :key="car">
            <CarItem :car="car"/>  
        </section>
    </section>
</template>

<style scoped>
    .carr {
        display: flex;
        justify-content: center;
    }
    .cars {
        flex-basis: 30%;
    }
</style>