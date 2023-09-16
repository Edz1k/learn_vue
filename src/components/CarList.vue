<script setup>
    import CarItem from '@/components/CarItem.vue';
    import { onMounted } from 'vue';
    import {useAuto} from '@/Composable/useAuto.js';

    const {autoListRemake, getAutoList} = useAuto();
    onMounted(async() => {
        await getAutoList();
    });
</script>

<template>
    <section class="carr">
        <section class="cars" v-for="car in autoListRemake" :key="car">
            <CarItem :car="car"/>  
        </section>
    </section>
</template>

<style scoped>
    .carr {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .cars {
        flex-basis: 26%;
        margin: 35px;
    }
</style>