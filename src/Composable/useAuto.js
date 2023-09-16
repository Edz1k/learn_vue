// eslint-disable-next-line no-unused-vars
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '@/firebases'
// eslint-disable-next-line no-unused-vars
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { computed, ref } from 'vue'
import { createId, formatDate } from '@/services/method.js';
export const useAuto = () => {
    // eslint-disable-next-line no-unused-vars
    const newAuto = ref({
      id: createId(),
      brand: '',
      price: '',
      year: '',
      volume: '',
      engine: '',
      color: '',
      saled: '',
      city: '',
      carcase: '',
      gear: '',
      travel: '',
      image: '',
  });
  
  // eslint-disable-next-line no-unused-vars
  const autoList = ref([]);
  const auto = ref(null)

  const loading = ref({
    auto: false,
    autoList: false,
    newAuto: false,
  })
  const autoListRemake = computed(() => {
    const _autoListRemake = autoList.value.map((auto) => {
      auto.year = formatDate(auto.year);
      auto.price = `${parseInt(auto.price)} KZT`;
      auto.volume = `${auto.volume} л`;
      auto.travel = `${auto.travel} км`;
      auto.age = `${new Date().getFullYear() - auto.year}г`;
      auto.color = `#${auto.color}`;  
      return auto;
    });
    return _autoListRemake || [];
  });
  async function createAuto() {
    loading.value.newAuto = true;
    // toggle.value ? toggle.value = false : toggle.value = true;
    try {
        await addDoc(collection(db, 'autos'), newAuto.value).then(async() => {
          await getAutoList();
        })
      } catch (e) {
        console.error('Error: ', e)
      }
      finally {
        loading.value.newAuto = false
      }
  
  }
  // async function UploadImage(){

  // }
  async function getAutoList() {
    loading.value.autoList = true
    try {
      const querySnapshot = await getDocs(collection(db, 'autos'))
      querySnapshot.forEach((doc) => {
        autoList.value.push(doc.data())
      })
    } catch (e) {
      console.error('Error: ', e)
    } finally {
      loading.value.autoList = false
    }
  }
  function clear(){
    newAuto.value = {
      brand: '', 
      price: '',
      year: '',
      volume: '',
      engine: '',
      color: '',
      saled: '', 
      city: '',
      carcase: '',
      gear: '',
      travel: '',
      images: 0,
    }
    autoList.value = [];
    auto.value = null;
  }

  return {
    createAuto,
    clear,
    getAutoList,
    newAuto,
    auto,
    autoListRemake,
    loading,
  }
}