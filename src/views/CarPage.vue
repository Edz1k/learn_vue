<template>
    <div v-if="!auto">
        <Skeleton width="100vw"></Skeleton>
    </div>
    <div v-if="auto">
        <div> {{ auto.brand }} </div>
        <div> {{ auto.price }} </div>
        <div> {{ auto.year }} </div>
        <div> {{ auto.color }} </div>
        <div> {{ auto.city }} </div>
        <div> {{ auto.gear }} </div>
    </div>
  </template>
  
  <script setup>
    import { useAuto } from '@/Composable/useAuto';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';   // optional
    import Skeleton  from 'primevue/skeleton';
  
  const route = useRoute();
  
  const { auto, getAuto, } = useAuto();
  
  onMounted(async () => {
    try {
        await getAuto(route.params.id);
    } catch (error) {
        console.error('Error fetching auto data:', error);
    }
    });
  </script>
  