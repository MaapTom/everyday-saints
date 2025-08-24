import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';

export const useSaintStore = defineStore('saint', () => {
  
  onMounted(async () => {
    // setTimeout(async () => {
      const date = new Date();
      const getSaintURL = `${import.meta.env.VITE_SAINT_API_URL}/saint/1`;

      currentSaint.value = await APIFecth(getSaintURL);
      listSaints.value = await getListSaints(6, 6);
    // }, 3000);
  })
  
  const isLoaded = ref(false);
  const listSaints = ref([]);
  const currentSaint = ref([]);

  async function getListSaints(date, month) {
    const isDateValid = new Date(date, month);

    if(isNaN(isDateValid) || isNaN(date) || isNaN(month)) return [];

    const getTodaySaintsURL = `${import.meta.env.VITE_SAINT_API_URL}/list/${date}-${month}`;
    const getListSaintsResponse = await APIFecth(getTodaySaintsURL);

    return getListSaintsResponse;
  }

  async function setActiveSaint(saintId) {
    if (isNaN(saintId)) return;

    const previousStoragedSaint = listSaints.value.filter((saint) => saint.id === saintId);

    if(previousStoragedSaint.length > 0) {
      currentSaint.value = previousStoragedSaint[0];
    } else {
      const getSaintURL = `${import.meta.env.VITE_SAINT_API_URL}/saint/${saintId}`;
      const saint = await APIFecth(getSaintURL);

      currentSaint.value = (saint.length > 0) ? saint : currentSaint.value;
    }
  }

  async function updateNewDateOfSaints(date, month) {
    const getListSaintsResponse = await getListSaints(date, month);

    if(getListSaintsResponse.length <= 0) return;

    listSaints.value = getListSaintsResponse;
    currentSaint.value = getListSaintsResponse[0];
  }

  async function APIFecth(URL) {
    isLoaded.value = false;

    try {
      const response = await fetch(URL);
      
      if(response.status !== 200) {
        console.error('Error on fetching data: ',response.statusText,'. Status code: ', response.status);
        return [];
      }
      
      const JSONResponse = await response.json();
      return JSONResponse;

    } catch(error) {
      console.log(error);
      return [];
    } finally {
      setTimeout(() => {
        isLoaded.value = true;
      }, 3000);
    }
  }

  return { isLoaded, currentSaint, getListSaints, listSaints, setActiveSaint, updateNewDateOfSaints };
})