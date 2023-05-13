<script setup>
import { onMounted, ref } from 'vue'
import InputField from '@/components/UI/molecules/InputField.vue'
import CategoryService from '@/services/categoryService'
import {
  Announcement,
  AnnouncementService,
} from '@/services/announcementService'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import { RouterLink } from 'vue-router'
import { useMergeDateTime } from '@/composables/date.js'

const categoryData = ref([])
const title = ref(null)
const categoryId = ref(null)
const description = ref(null)
const publishDate = ref(null)
const publishTime = ref(null)
const closeDate = ref(null)
const closeTime = ref(null)
const display = ref(false)

const announcementService = new AnnouncementService()
const categoryService = new CategoryService()

const addAnnouncementHandler = async () => {
  await announcementService.postAnnouncement(
    new Announcement(
      title.value,
      description.value,
      useMergeDateTime(publishDate.value, publishTime.value),
      useMergeDateTime(closeDate.value, closeTime.value),
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
  if (categoryId.value === null) {
    const defaultCategoryId = (await categoryService.getDefaultCategory()).id
    if (defaultCategoryId !== null && defaultCategoryId !== undefined) {
      categoryId.value = defaultCategoryId
    }
  }
})
</script>

<template>
  <InputField header="Title">
    <input
      class="ann-title w-[45rem] px-4 py-3 rounded-xl bg-zinc-100 text-base outline outline-0"
      type="text"
      placeholder="something"
      v-model="title"
    />
  </InputField>
  <InputField header="Category">
    <select
      class="ann-category text-center w-[12rem] px-4 py-3 rounded-xl bg-zinc-100 text-base outline outline-0"
      v-model="categoryId"
    >
      <option
        v-for="category of categoryData"
        :key="category.id"
        :value="category.id"
      >
        {{ category.categoryName }}
      </option>
    </select></InputField
  >
  <InputField header="Description" class="h-2/5">
    <textarea
      class="ann-description w-[50rem] h-full px-4 py-3 rounded-xl bg-zinc-100 text-base outline outline-0"
      placeholder="something"
      v-model="description"
    ></textarea>
  </InputField>
  <div class="flex flex-row gap-7">
    <InputField header="Publish Date"
      ><div class="flex flex-row items-center border-black gap-3">
        <input
          class="ann-publish-date px-4 py-3 rounded-xl bg-zinc-100 text-base w-36 text-center outline outline-0"
          type="date"
          v-model="publishDate"
        />
        <input
          class="ann-publish-date px-4 py-3 rounded-xl bg-zinc-100 text-base w-36 text-center outline outline-0"
          type="time"
          v-model="publishTime"
        /></div
    ></InputField>
    <InputField header="Close Date"
      ><div class="flex flex-row items-center gap-4">
        <input
          class="ann-publish-date px-4 py-3 rounded-xl bg-zinc-100 text-base w-36 text-center outline outline-0"
          type="date"
          v-model="closeDate"
        />
        <input
          class="ann-publish-date px-4 py-3 rounded-xl bg-zinc-100 text-base w-36 text-center outline outline-0"
          type="time"
          v-model="closeTime"
        /></div
    ></InputField>
  </div>
  <InputField header="Display">
    <div class="flex flex-row items-center gap-2 border-black">
      <input type="checkbox" class="ann-display w-4 h-4" v-model="display" />
      <label>Show announcement</label>
    </div>
  </InputField>

  <div class="flex flex-row w-fit gap-4">
    <RouterLink :to="{ name: 'admin-announcement-listing' }">
      <SingleButton
        class="ann-button bg-white border border-rose-500 text-rose-500 rounded-lg"
        text="Cancel"
      />
    </RouterLink>
    <SingleButton
      class="ann-button bg-violet-500 text-white rounded-lg w-[83px]"
      text="Submit"
      @click="addAnnouncementHandler"
    />
  </div>
</template>
