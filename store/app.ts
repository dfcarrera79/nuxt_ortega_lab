import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('store', () => {
  // state
  const darkMode = ref(false);

  // actions
  const setDarkMode = (dark: boolean) => {
    darkMode.value = dark;
  };

  return {
    darkMode,
    setDarkMode,
  };
});
