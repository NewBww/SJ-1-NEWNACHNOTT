import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAnnouncementStore = defineStore('announcement', () => {
  const mode = ref('active')
  const page = ref(0)
  const category = ref(null)

  const toggleMode = () => {
    if (mode.value === 'active') {
      mode.value = 'close'
      page.value = 0
    } else {
      mode.value = 'active'
      page.value = 0
    }
  }
  const isModeActive = () => mode.value === 'active'

  const setCategory = (id) => {
    console.log(id)
    if (category.value) {
      category.value = id
      page.value = 0
    }
  }
  return { mode, page, category, toggleMode, isModeActive, setCategory }
})
