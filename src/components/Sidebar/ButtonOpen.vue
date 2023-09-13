<template>
    <div class="card flex justify-content-center side-bar">
        <Sidebar v-model:visible="visible">
            <h3 class="first">Make your Choice</h3>
            <div class="informMenu">
                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
                <span class="p-float-label">
                    <InputText id="username" v-model="valueOne" />
                    <label for="username">Username</label>
                </span>
                <span class="p-float-label">
                    <InputText id="username" v-model="valueTwo" />
                    <label for="username">Surname</label>
                </span>
            </div>
        </Sidebar>
        <Button icon="pi pi-align-justify" @click="visible = true"></Button>
    </div>

</template>
  
<script setup>
    import Sidebar from 'primevue/sidebar';
    import Dropdown from 'primevue/dropdown';
    import Button from 'primevue/button';
    import InputText from 'primevue/inputtext';
    import { ref } from "vue";

    const valueOne = ref(null);
    const valueTwo = ref(null);
    const visible = ref(false);
    const selectedCity = ref(null);
    const cities = ref([
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ]);
</script>
<style scoped>
    .informMenu{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .informMenu > span > input {
        width: 100%;
    }
    .informMenu > span {
        margin-top: 25px;
    }
    /* .side-bar {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        height: 100%;
    } */
</style>