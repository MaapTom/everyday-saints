import { onMounted, onUnmounted } from 'vue'

const isClickOutside = (event, elementTarget) => {
  return event.target !=== elementTarget;
}

export function useClickOutside(target) {
  onMounted(() => {
    window.addEventListener('click', (event) => isClickOutside(event, target))
  });

  onUnmounted(() => {
    window.removeEventListener('click', (event) => isClickOutside(event, target))
  });
}