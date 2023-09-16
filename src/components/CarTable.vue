<template>
    <DataTable :value="autoListRemake" :loading="loading.autoListRemake">
      <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
        <template #body="slotProps">
          <span v-if="column.field === 'saled'">
            <Checkbox v-model="slotProps.data.saled" binary checked readonly/>
          </span>
          <span v-else-if="column.field === 'color'">
            <ColorPicker v-if="slotProps.data[column.field]" v-model="slotProps.data[column.field]" disabled=""/>
          </span>
          <span v-else>{{ slotProps.data[column.field] }}</span>
        </template>
      </Column>
    </DataTable>
  </template>
  
  <script setup>
    // eslint-disable-next-line no-unused-vars
    import { ref, onMounted } from 'vue';
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import {useAuto} from '@/Composable/useAuto.js';
    import Checkbox from 'primevue/checkbox';
    import ColorPicker from 'primevue/colorpicker';
    
    const { autoListRemake, getAutoList, loading } = useAuto();
    
    onMounted(() => {  
      getAutoList();
    });
    
    const carColumns = [
      // { field: 'id', header: '#', },
      { field: 'brand', header: 'Бренд' },
      { field: 'price', header: 'Цена' },
      { field: 'year', header: 'Год' },
      { field: 'age', header: 'Возвраст авто'},
      { field: 'volume', header: 'Объем' },
      { field: 'color', header: 'Цвет' },
      { field: 'saled', header: 'Продано' },
      { field: 'city', header: 'Город' },
      { field: 'carcase', header: 'Кузов' },
      { field: 'gear', header: 'Коробка' },
      { field: 'travel', header: 'Пробег' },
    ]
  </script>
<style scoped>
:deep(.p-disabled){
  opacity: 1 !important;
};
</style>

  