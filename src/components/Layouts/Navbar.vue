<template>
    <button type="button" class="p-link p-ml-auto" @click="googleRegister">
      <i class="pi pi-user"></i>
    </button>
    <button type="button" class="p-link p-ml-auto" @click="createAuto">
      <i class="pi pi-plus"></i>
    </button>
</template>
  
<script setup>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
  // import button from 'primevue/button';

  import { useAuto } from '@/Composable/useAuto.js';
  
  const {createAuto} = useAuto()

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