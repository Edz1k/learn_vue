<template>
    <div class="card">
      <Menubar :model="items">
        <template #start>
          <SidebarMenu/>
        </template>
        <template #end>
          <div class="rightSide">
            <CarAddModal class="CarAddModal"/>
            <Button label="Sign Up" icon="pi pi-user"  @click="googleRegister">
            </Button>           
          </div>  
        </template>
      </Menubar> 
    </div>
   

</template>
  
<script setup>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
  import {ref} from 'vue';
  import Menubar from 'primevue/menubar';
  import Button from 'primevue/button';
  import SidebarMenu from '@/components/Sidebar/ButtonOpen.vue';
  import CarAddModal from '@/components/CarAddModal.vue';

  
  const items = ref([
    {label: 'Cards', icon: 'pi pi-fw pi-home', to: '/cards'},
    {label: 'Table', icon: 'pi pi-fw pi-table', to: '/table'},
    {label: 'Toasters', icon: 'pi pi-fw pi-envelope', to: '/toasts'},
    {label: 'Documentation', icon: 'pi pi-fw pi-file'},
    {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    
  ])


  const googleRegister = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
  
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user
        localStorage.setItem('user', JSON.stringify(user))
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }
</script>
<style scoped>
  .rightSide{
    display: flex;
  }
  .CarAddModal{
    margin-right: 10px;
  }
  :deep(.p-menubar-start){
    margin-right: auto;
  }
</style>