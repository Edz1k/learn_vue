<template>
    <div v-if="!auto">
        <Skeleton width="100vw"></Skeleton>
    </div>
    <div v-if="auto">
        <Card style="width: 25em">
            <template #header>
                <img :src="auto.image" alt="car" class="car-image" />
            </template>
            <template #title> {{auto.brand}}</template>
            <template #subtitle> {{auto.price}} </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-heart-fill" label="Like" />
                <Button icon="pi pi-thumbs-down-fill" label="Dislike" severity="secondary" style="margin-left: 0.5em" />
            </template>
        </Card>    
    </div>
  </template>
  
  <script setup>
    import { useAuto } from '@/Composable/useAuto';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';   // optional
    import Skeleton  from 'primevue/skeleton';
    import Card from 'primevue/card';
    import Button from 'primevue/button';
  
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
<style scoped>
    .car-image{
        width: 100%;
    }
    .p-card{
        margin: 0 auto;
        margin-top: 20px;;
    }
</style>