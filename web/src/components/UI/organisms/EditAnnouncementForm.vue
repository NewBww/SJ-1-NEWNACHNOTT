<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import InputFill from '@/components/UI/molecules/InputField.vue'
import CategoryService from '@/services/categoryService'
import {
  Announcement,
  AnnouncementService,
} from '@/services/announcementService'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import { RouterLink } from 'vue-router'
import { useMergeDateTime, useSplitTime, useSplitDate } from '@/composables/date'
import { Display } from '@/composables/display'

const categoryData = ref([])

const props = defineProps({
  announcement: {
    type: Object,
    required: false,
  },
})

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

watchEffect(async () => {
  if (props.announcement.id) {
    title.value = props.announcement.announcementTitle
    categoryId.value = (
      await categoryService.getCategoryByName(
        props.announcement.announcementCategory
      )
    ).id
    description.value = props.announcement.announcementDescription
    display.value = new Display(
      props.announcement.announcementDisplay
    ).toBoolean()
    // publishDate.value = useSplitDate(props.announcement.publishDate)
    // publishTime.value = useSplitTime(props.announcement.publishDate)
    // closeDate.value = useSplitDate(props.announcement.closeDate)
    // closeTime.value = useSplitTime(props.announcement.closeDate)
  }
})

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
  {{  publishDate }}
  {{ closeTime }}
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
        class="px-2 py-1 rounded bg-purple-100 placeholder-purple-300 text-base w-36 text-center"
        type="date"
        v-model="publishDate"
      />
      <input
        class="px-2 py-1 rounded bg-purple-100 placeholder-purple-300 text-base w-36 text-center"
        type="time"
        v-model="publishTime"
      /></div
  ></InputFill>
  <InputFill header="Close Date"
    ><div class="flex flex-row items-center gap-4">
      <input
        class="px-2 py-1 rounded bg-purple-100 placeholder-purple-300 text-base w-36 text-center"
        type="date"    
        v-model="closeDate"
      />
      <input
        class="px-2 py-1 rounded bg-purple-100 placeholder-purple-300 text-base w-36 text-center"
        type="time"
        v-model="closeTime"
        />
        
        </div
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
        text="Back"
      />
    </RouterLink>
    <SingleButton
      class="ann-button bg-violet-500 text-white rounded-lg w-[83px]"
      text="Edit"
      @click="addAnnouncementHandler"
    />
  </div>
</template>
