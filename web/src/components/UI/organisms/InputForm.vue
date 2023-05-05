<script setup>
import { onMounted, ref } from 'vue'
import InputFill from '@/components/UI/molecules/InputFill.vue'
import CategoryService from '@/services/categoryService'
import {
  Announcement,
  AnnouncementService,
} from '@/services/announcementService'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import { RouterLink } from 'vue-router'
import { mergeDateTime } from '@/composables/date'

const categoryData = ref([])

const title = ref('')
const categoryId = ref(null)
const description = ref('')
const publishDate = ref('')
const publishTime = ref('')
const closeDate = ref('')
const closeTime = ref('')
const display = ref(false)

const announcementService = new AnnouncementService()
const categoryService = new CategoryService()

const addAnnouncementHandler = async () => {
  await announcementService.postAnnouncement(
    new Announcement(
      title.value,
      description.value,
      mergeDateTime(publishDate.value, publishTime.value),
      mergeDateTime(closeDate.value, closeTime.value),
      categoryId.value ?? (await categoryService.getDefaultCategory()).id,
      display.value ? 'Y' : 'N'
    )
  )
}

onMounted(async () => {
  const data = await categoryService.getAllCategories()
  if (data !== undefined && data.length !== 0) {
    categoryData.value = data
  }
  const defaultCategoryId = (await categoryService.getDefaultCategory()).id
  if (defaultCategoryId !== null && defaultCategoryId !== undefined) {
    categoryId.value = defaultCategoryId
  }
})
</script>

<template>
  <InputFill header="Title">
    <input
      class="px-2 py-1 rounded bg-purple-100 placeholder-purple-300 text-base w-6/12"
      type="text"
      placeholder="something"
      v-model="title"
    />
  </InputFill>
  <InputFill header="Category">
    <select
      class="px-2 py-1 rounded text-base w-48 bg-purple-100 text-purple-300"
      v-model="categoryId"
    >
      <option
        v-for="category of categoryData"
        :key="category.id"
        :value="category.id"
      >
        {{ category.categoryName }}
      </option>
    </select></InputFill
  >
  <InputFill header="Description" class="h-2/5">
    <textarea
      class="h-full px-2 py-1 rounded bg-purple-100 placeholder-purple-300 text-base"
      placeholder="something"
      v-model="description"
    ></textarea>
  </InputFill>

  <InputFill header="Publish Date"
    ><div class="flex flex-row items-center gap-4">
      <input
        class="px-2 py-1 rounded bg-purple-100 placeholder-purple-300 text-base w-28 text-center"
        type="text"
        placeholder="select date"
        onblur="type='text'"
        onfocus="type='date'"
        v-model="publishDate"
      />
      <input
        class="px-2 py-1 rounded bg-purple-100 placeholder-purple-300 text-base w-28 text-center"
        type="text"
        placeholder="select time"
        onblur="type='text'"
        onfocus="type='time'"
        v-model="publishTime"
      /></div
  ></InputFill>
  <InputFill header="Close Date"
    ><div class="flex flex-row items-center gap-4">
      <input
        class="px-2 py-1 rounded bg-purple-100 placeholder-purple-300 text-base w-28 text-center"
        type="text"
        placeholder="select date"
        onblur="type='text'"
        onfocus="type='date'"
        v-model="closeDate"
      />
      <input
        class="px-2 py-1 rounded bg-purple-100 placeholder-purple-300 text-base w-28 text-center"
        type="text"
        placeholder="select time"
        onblur="type='text'"
        onfocus="type='time'"
        v-model="closeTime"
      /></div
  ></InputFill>
  <InputFill header="Display">
    <div class="flex flex-row items-center gap-2">
      <input type="checkbox" class="w-4 h-4" v-model="display" />
      <label>Show announcement</label>
    </div>
  </InputFill>

  <div class="flex flex-row w-fit gap-4">
    <RouterLink :to="{ name: 'admin-announcement-listing' }">
      <SingleButton
        class="ann-button bg-white border border-rose-500 text-rose-500 rounded-lg"
        text="Cancel"
      />
    </RouterLink>
    <SingleButton
      class="ann-button bg-violet-500 text-white rounded-lg w-[83px]"
      text="Add"
      @click="addAnnouncementHandler"
    />
  </div>
</template>

<style scoped></style>
