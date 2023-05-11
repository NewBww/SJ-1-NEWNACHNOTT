import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAnnouncementStore = defineStore('announcement', () => {
  const mode = ref('active')
  const page = ref('0')
  const category = ref(null)

  const toggleMode = () => {
    if (mode.value === 'active') {
      mode.value = 'closed'
    } else mode.value = 'active'
  }
  const isModeActive = () => mode.value === 'active'

  return { mode, page, category, toggleMode, isModeActive }
})
