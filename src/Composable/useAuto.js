// eslint-disable-next-line no-unused-vars
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '@/firebases'
// eslint-disable-next-line no-unused-vars
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref } from 'vue'

export const useAuto = () => {
    // eslint-disable-next-line no-unused-vars
  const auto = ref(null)
  // eslint-disable-next-line no-unused-vars
  const autoList = ref([])
  const newAuto = ref({})

  const loading = ref({
    auto: false,
    autoList: false,
    newAuto: false,
  })

  async function createAuto() {
    loading.value.newAuto = true
    newAuto.value = {
      name: 'Toyota',
      model: 'Corolla',
    }
    try {
        await addDoc(collection(db, 'autos'), newAuto.value).then(() => {
          console.log('Cars added')
        })
      } catch (e) {
        console.error('Error: ', e)
      }
  
  }

  return {
    createAuto,
  }
}