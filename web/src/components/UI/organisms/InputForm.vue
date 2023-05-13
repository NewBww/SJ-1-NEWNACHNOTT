<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import InputField from '@/components/UI/molecules/InputField.vue'
import CategoryService from '@/services/categoryService'
import {
  Announcement,
  AnnouncementService,
} from '@/services/announcementService'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import { useRouter } from 'vue-router'
import {
  useMergeDateTime,
  useSplitTime,
  useSplitDate,
} from '@/composables/date'
import { Display } from '@/composables/display'

const router = useRouter()
const categoryData = ref([])

const props = defineProps({
  announcement: {
    type: Object,
    required: false,
  },
  submitText: {
    type: String,
    required: true,
  },
  cancelText: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
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
const changed = ref(false)

const announcementService = new AnnouncementService()
const categoryService = new CategoryService()

const submitHandler = async () => {
  switch (props.action) {
    case 'add': {
      try {
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
        await router.push({ name: 'admin-announcement-listing' })
      } catch (error) {
        // console.log(error.message)
        alert('There is an error: ' + error.message)
      }
      break
    }
    case 'edit': {
      try {
        await announcementService.updateAnnouncement(
          props.announcement?.id,
          new Announcement(
            title.value,
            description.value,
            useMergeDateTime(publishDate.value, publishTime.value),
            useMergeDateTime(closeDate.value, closeTime.value),
            categoryId.value ?? (await categoryService.getDefaultCategory()).id,
            display.value ? 'Y' : 'N'
          )
        )
        // await router.push({ name: 'admin-announcement-listing' })
        await router.push({ name: 'admin-announcement-detail' })
      } catch (error) {
        alert('There is an error: ' + error.message)
      }
      break
    }
  }
}
const onChangeHandler = () => {
  changed.value = true
}

watchEffect(async () => {
  if (props.announcement?.id) {
    title.value = props.announcement.announcementTitle
    categoryId.value = (await categoryService.getAllCategories()).find(
      (categoryName) =>
        categoryName.categoryName === props.announcement?.announcementCategory
    ).id
    description.value = props.announcement.announcementDescription
    display.value = new Display(
      props.announcement.announcementDisplay
    ).toBoolean()
    publishDate.value = useSplitDate(props.announcement.publishDate)
    publishTime.value = useSplitTime(props.announcement.publishDate)
    closeDate.value = useSplitDate(props.announcement.closeDate)
    closeTime.value = useSplitTime(props.announcement.closeDate)
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
  <!-- title -->
  <InputField header="Title">
    <input
      class="ann-title w-[45rem] px-4 py-3 rounded-xl bg-zinc-100 text-base outline outline-0"
      type="text"
      placeholder="something"
      v-model="title"
      @input="onChangeHandler"
    />
  </InputField>

  <!-- category -->
  <InputField header="Category" class="">
    <select
      class="ann-category text-center w-[12rem] px-4 py-3 rounded-xl bg-zinc-100 text-base outline outline-0"
      v-model="categoryId"
      @input="onChangeHandler"
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

  <!-- description -->
  <InputField header="Description" class="h-56">
    <textarea
      class="ann-description w-[50rem] h-full px-4 py-3 rounded-xl bg-zinc-100 text-base outline outline-0"
      placeholder="something"
      v-model="description"
      @input="onChangeHandler"
    ></textarea>
  </InputField>

  <div class="flex flex-row gap-7">
    <!-- publish date -->
    <InputField header="Publish Date"
      ><div class="flex flex-row items-center border-black gap-3">
        <input
          class="ann-publish-date px-4 py-3 rounded-xl bg-zinc-100 text-base w-36 text-center outline outline-0"
          type="date"
          v-model="publishDate"
          @input="onChangeHandler"
        />
        <input
          class="ann-publish-time px-4 py-3 rounded-xl bg-zinc-100 text-base w-36 text-center outline outline-0"
          type="time"
          v-model="publishTime"
          @input="onChangeHandler"
        /></div
    ></InputField>

    <!-- close date -->
    <InputField header="Close Date"
      ><div class="flex flex-row items-center gap-3 border-black">
        <input
          class="ann-close-date px-4 py-3 rounded-xl bg-zinc-100 text-base w-36 text-center outline outline-0"
          type="date"
          v-model="closeDate"
          @input="onChangeHandler"
        />
        <input
          class="ann-close-time px-4 py-3 rounded-xl bg-zinc-100 text-base w-36 text-center outline outline-0"
          type="time"
          v-model="closeTime"
          @input="onChangeHandler"
        /></div
    ></InputField>
  </div>

  <!-- display -->
  <InputField header="Display">
    <label class="flex flex-row items-center gap-2 border-black"
      ><input
        type="checkbox"
        class="ann-display w-4 h-4"
        v-model="display"
        @input="onChangeHandler"
      />
      Check to show this announcement</label
    >
  </InputField>

  <div class="flex flex-row w-fit gap-4">
    <!-- cancel button -->
    <!--    <RouterLink :to="{ name: 'admin-announcement-listing' }">-->
    <SingleButton
      @click="$router.back()"
      class="ann-button bg-white border border-rose-500 text-rose-500 rounded-lg hover:bg-rose-500 hover:text-white transition ease-in-out hover:scale-110"
      :text="cancelText"
    />

    <!-- submit button -->
    <SingleButton
      class="ann-button text-white rounded-lg w-[83px] transition ease-in-out"
      :class="
        action === 'edit' && !changed
          ? 'bg-gray-400 border border-gray-400'
          : 'bg-violet-500 border border-violet-500 hover:border-violet-500 hover:bg-white hover:text-violet-500 hover:scale-110'
      "
      :text="submitText"
      @click="submitHandler"
      :disabled="action === 'edit' ? !changed : false"
    />
  </div>
</template>
