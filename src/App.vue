<script setup>
    import CarList from './components/CarList.vue';
    import CarTable from './components/CarTable.vue';
    import SideBarMenu from './components/Sidebar/ButtonOpen.vue'
    import Navbar from './components/Layouts/NavBar.vue';
    import ToasTer from  './components/ToasTer.vue';
    
    
    
    const carsArray = [
        {
            brand: "BMW",
            price: "1000000",
            year: 1994,
            volume: 2.4,
            color: "#FF0000",
            image: "https://www.solido.com/wp-content/uploads/2020/12/s1803904-bmw-e36-coupe-m3-red-1994-01.jpg",
        },
        {
            brand: "BMW",
            price: "2000000",
            year: 1994,
            volume: 2.4,
            color: "#ff0000",
            image: "https://www.solido.com/wp-content/uploads/2020/12/s1803904-bmw-e36-coupe-m3-red-1994-01.jpg",
        },
        {
            brand: "BMW",
            price: "2000000",
            year: 1994,
            volume: 2.4,
            color: "#ff0000",
            image: "https://www.solido.com/wp-content/uploads/2020/12/s1803904-bmw-e36-coupe-m3-red-1994-01.jpg",
        },
        {
            brand: "BMW",
            price: "2000000",
            year: 1994,
            volume: 2.4,
            color: "#ff0000",
            image: "https://www.solido.com/wp-content/uploads/2020/12/s1803904-bmw-e36-coupe-m3-red-1994-01.jpg",
        },
       
    ];

</script>

<template>
    <Navbar/>
    <SideBarMenu/>
    <CarList :cars="carsArray"/>
    <CarTable :cars="carsArray"/>
    <ToasTer/>
</template>


<style>

</style>
