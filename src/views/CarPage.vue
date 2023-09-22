<template>
    <div v-if="!auto">
        <Skeleton width="100vh" class="mb-2"></Skeleton>
    </div>
    <div v-if="auto">
        {{ auto.brand }}
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
  