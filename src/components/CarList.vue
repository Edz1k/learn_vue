<script setup>
    import CarItem from '@/components/CarItem.vue';
    import { onMounted } from 'vue';
    import {useAuto} from '@/Composable/useAuto.js';
    import {useRouter} from 'vue-router';

    const router = useRouter();

    const {autoListRemake, getAutoList} = useAuto();
    onMounted(async() => {
        await getAutoList();
    });
    function goToCarUrl(id){
        router.push({name: 'car', params: {id}});
    }
</script>

<template>
    <section class="carr">
        <section class="cars" v-for="car in autoListRemake" :key="car">
            <CarItem :car="car" @click="goToCarUrl(car.id)"/>  
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