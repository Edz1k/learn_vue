<script setup>
    import CarItem from '@/components/CarItem.vue';
    let carsArray = [
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
    ];
    console.log(carsArray);
</script>

<template>
    <section class="carr">
        <section class="cars" v-for="car in carsArray" :key="car">
            <CarItem :car="car"/>  
        </section>
    </section>
</template>

<style scoped>
    .carr {
        display: flex;
        justify-content: center;
    }
    .cars {
        flex-basis: 30%;
    }
</style>