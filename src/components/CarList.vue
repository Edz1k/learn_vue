<script setup>
    import CarItem from '@/components/CarItem.vue';
    let carsArray = [
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
    console.log(carsArray);
</script>

<template>
    <section class="cars" v-for="car in carsArray" :key="car">
        <div><CarItem :car="car"/></div>   
    </section>
</template>

<style scoped>
    .cars {
        width: 33%;
    }
</style>