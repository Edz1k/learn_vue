<script setup>
    import CarList from './components/CarList.vue';
    import CarTable from './components/CarTable.vue';
    import SideBarMenu from './components/Sidebar/ButtonOpen.vue'
    import Navbar from './components/Layouts/NavBar.vue';
    import ToasTer from  './components/ToasTer.vue';
    import CarAddModal from './components/CarAddModal.vue';
</script>

<template>
    <Navbar/>
    <CarAddModal/>
    <SideBarMenu/>
    <CarList/>
    <CarTable/>
    <ToasTer/>
</template>


<style>

</style>
