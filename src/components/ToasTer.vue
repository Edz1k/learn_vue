<template>
    <div class="card flex justify-content-center">
        <Toast />
        <div class="flex flex-wrap gap-2 knopochki">
            <Button label="Success" severity="success" @click="showSuccess"/>
            <Button label="Info" severity="info" @click="showInfo" />
            <Button label="Warn" severity="warning" @click="showWarn" />
            <Button label="Error" severity="danger" @click="showError" />
        </div>
    </div>
</template>

<script setup>
    import Toast from 'primevue/toast';
    import Button from 'primevue/button';
    import { useToast } from "primevue/usetoast";
    const toast = useToast();

    const showSuccess = () => {
        toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
    };

    const showInfo = () => {
        toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
    };

    const showWarn = () => {
        toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
    };

    const showError = () => {
        toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
    };
</script>
<style scoped>
    .knopochki {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }
</style>