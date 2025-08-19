import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('')
  const doubleCount = computed(() => count.value * 2)
  const increment = () => {
    count.value++
  }
  const clear = () => {
    count.value = 0
  }

  return {
    count,
    name,
    doubleCount,
    increment,
    clear
  }
})