<script setup>
    import Navbar from '@/components/Layouts/NavBar.vue';
    import FooterInitial from '@/components/FooterInitial.vue';
    import { RouterView } from 'vue-router';
</script>

<template>
    <Navbar/>
    <RouterView/>
    <FooterInitial/>
</template>


<style scoped>

</style>
