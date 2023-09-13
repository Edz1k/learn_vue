<template>
    <div class="card flex justify-content-center">
        <Button icon="pi pi-plus" @click="toggleVisible" />
        <Dialog v-model:visible="visible" modal header="Добавить автомобиль" :style="{ width: '40vw' }">
           <template #default>
                <div class="p-fluid">
                    <div class="p-field">
                        <label for="brand">Бренд</label>
                        <Dropdown v-model="newAuto.brand" :options="cars" optionValue="name" optionLabel="name" />
                    </div>
                    <div class="p-field">
                        <label for="price">Цена</label>
                        <InputNumber id="price" v-model="newAuto.price" mode="currency" currency="KZT" locale="ru-ru" />
                    </div>
                    <div class="p-field">
                        <label for="year">Год</label>
                        <Calendar id="year" v-model="newAuto.year" view="year" />
                    </div>
                    <div class="p-field">
                        <label for="year">Тип двигателя</label>
                        <Dropdown v-model="newAuto.engine" :options="engineType" optionLabel="name"/>
                    </div>
                    <div class="p-field" v-if="newAuto.engine !== 'Electro'">
                        <label for="volume">Объем</label>
                        <InputText id="volume" v-model="newAuto.volume" />
                    </div>
                    <div class="p-field">
                        <label for="color">Цвет</label>
                        <InputText id="color" v-model="newAuto.color" />
                    </div>
                    <div class="p-field">
                        <label for="saled">Продано</label>
                        <InputText id="saled" v-model="newAuto.saled" />
                    </div>
                    <div class="p-field">
                        <label for="city">Город</label>
                        <Dropdown v-model="newAuto.city" :options="cities" optionValue="name" optionLabel="name" />
                    </div>
                    <div class="p-field">
                        <label for="carcase">Кузов</label>
                        <InputText id="carcase" v-model="newAuto.carcase" />
                    </div>
                    <div class="p-field">
                        <label for="gear">Коробка</label>
                        <div v-for="category in categories" :key="category.key" class="flex align-items-center">
                            <RadioButton v-model="newAuto.gear" :inputId="category.key" name="pizza" :value="category.name" />
                            <label :for="category.key" class="ml-2">{{ category.name }}</label>
                        </div>
                    </div>
                    <div class="p-field">
                        <label for="travel">Пробег</label>
                        <InputText v-model.number="newAuto.travel" class="w-full" />
                        <Slider v-model="newAuto.travel" class="w-full" :max="200000"/>
                    </div>
                </div>
           </template>
            <template #footer>
                <Button label="Сбросить" icon="pi pi-times" @click="clearData" text />
                <Button label="Добавить" icon="pi pi-check" @click="addAuto" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import  Button from "primevue/button";
    import Dialog from 'primevue/dialog';
    import InputText from 'primevue/inputtext';
    import Dropdown from "primevue/dropdown";
    import { useAuto } from "@/Composable/useAuto.js";
    import InputNumber from "primevue/inputnumber";
    import Calendar from "primevue/calendar";
    import Slider from 'primevue/slider';
    import RadioButton from 'primevue/radiobutton';
    const {createAuto, newAuto, clear} = useAuto();


    const visible = ref(false);
    const toggleVisible = () =>{
        visible.value = !visible.value;
    }

    const addAuto = async () => {
        await createAuto(newAuto.value);
        toggleVisible();
    }
    const clearData = () => {
        clear();
        toggleVisible();
    }

    const categories = ref([
        { name: 'Автомат', key: 'Automatic' },
        { name: 'Механика', key: 'Mechanic' },
        { name: 'Вариатор', key: 'Variator' },
    ]);
    const engineType = ref([
        {name: "Electro", code: "Electro"},
        {name: "Hybrid", code: "Hybrid"},
        {name: "Gasoline", code: "Gasoline"},
    ])
    // const selectedEngineType = ref(null);
    const cities = ref([
        { name: 'Алматы'},
        { name: 'Астана' },
        { name: 'Шымкент' },
        { name: 'Туркестан' },
        { name: 'Караганда' }
    ]);
    const cars = ref([
        { name: 'BMW' },
        { name: 'Mercedes' },
        { name: 'Audi' },
        { name: 'Lexus' },
        { name: 'Toyota' }
    ]);
</script>
  