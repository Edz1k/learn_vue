<script setup>
    import Navbar from './components/Layouts/NavBar.vue';
    import ToasTer from  './components/ToasTer.vue';
    import FooterInitial from './components/FooterInitial.vue';
    import { RouterView } from 'vue-router';
</script>

<template>
    <Navbar/>
    <RouterView/>
    <ToasTer/>
    <FooterInitial/>
</template>


<style scoped>

</style>
