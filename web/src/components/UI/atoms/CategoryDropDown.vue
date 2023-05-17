<script setup>
import { ref, watchEffect } from 'vue'
import CategoryService from '@/services/categoryService'
import { useAnnouncementStore } from '@/stores/AnnouncementStore'

const announcementStore = useAnnouncementStore()
const { setCategory } = announcementStore

const inputCategoryId = ref(null)

const categoryService = new CategoryService()
const categoryData = ref({})
watchEffect(async () => {
  const data = await categoryService.getAllCategories()
  if (data !== undefined && data.length !== 0) {
    categoryData.value = data
  }
})
</script>

<template>
  <div
    class="w-fit py-2 px-3 text-base border-black border rounded-md tracking-wider bg-white items-center"
  >
    Choose category:
    <select
      class="ann-category-filter text-center w-32 bg-zinc-100 rounded-md outline outline-0"
      v-model="inputCategoryId"
      @change="setCategory(inputCategoryId)"
    >
      <option :value="null">ทั้งหมด</option>
      <option
        v-for="categoryFilter of categoryData"
        :key="categoryFilter.id"
        :value="categoryFilter.id"
      >
        {{ categoryFilter.categoryName }}
      </option>
    </select>
  </div>
</template>
