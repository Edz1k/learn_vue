import { createApp } from 'vue'
import App from './App.vue'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import PrimeVue from 'primevue/config';
import router from './router';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/soho-dark/theme.css'
import { initializeApp } from "firebase/app";


import ToastService from 'primevue/toastservice';


const firebaseConfig = {
    apiKey: "AIzaSyBQHSBTFOeBP1YjT2LUWrYyAeF0VGhG-FM",
    authDomain: "learnvue-94281.firebaseapp.com",
    projectId: "learnvue-94281",
    storageBucket: "learnvue-94281.appspot.com",
    messagingSenderId: "678636676315",
    appId: "1:678636676315:web:4428134bc1b3059e6158fe"
};

initializeApp(firebaseConfig);

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.use(ToastService)
app.mount('#app')
