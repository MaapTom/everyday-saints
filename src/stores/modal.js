import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  const stateModal = ref(false);

  function setCloseModal() {
    stateModal.value = false;
  }

  function setOpenModal() {
    stateModal.value = true;
  }

  return { stateModal, setCloseModal, setOpenModal };
})