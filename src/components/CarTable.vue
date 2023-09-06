<script setup>
    import { defineProps } from 'vue';
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Dropdown from 'primevue/dropdown';
    import { ref } from "vue";
    defineProps({
        cars: {
            type: Array,
            required: true,
        },
    });
    

    const selectedCity = ref();
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const carColumns = [
    {
        field: 'brand',
        header: 'Марка',
    },
    {
        field: 'price',
        header: 'Цена',
    },
    {
        field: 'year',
        header: 'Год выпуска',
    },
    {
        field: 'volume',
        header: 'Объем двигателя',
    },
    {
        field: 'color',
        header: 'Цвет',
    },
    {
        field: '',
        header: 'Оценка',
    },
];
</script>

<template>
    <DataTable :value="cars">
        <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
            <template #body="{data}">
                <template v-if="column.field === 'criticScore'">
                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="dropdown" />
                </template>
                <template v-else>
                    {{ data[column.field] }}
                </template>
            </template>
        </Column>
        
    </DataTable>
</template>

<style scoped>
</style>
