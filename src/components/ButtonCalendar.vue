<script setup>
import { storeToRefs } from 'pinia';
import { ref, computed, watch } from 'vue';
import Calendar from 'primevue/calendar';
import ButtonIcon from './ButtonIcon.vue';
import { useWindowSize } from '@vueuse/core';
import { usePrimeVue } from "primevue/config";
import { useSaintStore } from '../stores/saint';
import { breakpoints } from '../utils/breakpoints';
import { PhCalendarPlus } from '@phosphor-icons/vue';

const dateCalendar = ref();
const primevue = usePrimeVue();
const { width } = useWindowSize();
const saintStore = useSaintStore();

const largeTextButtonIcon = computed(() => {
  return width.value < breakpoints.largePhoneDevice ? 'Calendário' : 'Calendário dos Santos';
})

const adjustTextButtonIcon = computed(() => {
  return width.value <= breakpoints.smallPhoneDevice ? '' : largeTextButtonIcon.value;
})

watch(dateCalendar, () => {
  const isValidDate = new Date(dateCalendar.value.getMonth(), dateCalendar.value.getDate());

  if (isValidDate.toString() === 'Invalid Date') return;
  // console.log(isValidDate.getDate(), isValidDate.getMonth());
  saintStore.updateNewDateOfSaints(isValidDate.getDate(), isValidDate.getMonth() + 1);
})

primevue.config.locale.dayNamesMin = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
primevue.config.locale.monthNamesShort = 
  [
    'Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 
    'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ];
primevue.config.locale.monthNames = 
  [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
] ;

</script>
<template>
  <Calendar
    showIcon
    iconDisplay="input"
    v-model="dateCalendar"
    variant="filled"
  >
    <template #inputicon="{ clickCallback }">
      <ButtonIcon
        :textValue="adjustTextButtonIcon"
        backgroundColor="#FDE7BC"
        backgroundHover="#E9D4AB"
        @click="clickCallback"
      >
        <PhCalendarPlus
          size="32"
          aria-describedby="describedby-icon" role="img"
        >
          <title id="describedby-icon" lang="pt">Ícone de calendário</title>
        </PhCalendarPlus>
      </ButtonIcon>
    </template>
  </Calendar>
</template>