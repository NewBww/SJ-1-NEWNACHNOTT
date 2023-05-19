<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@vueup/vue-quill/dist/vue-quill.bubble.css'
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
  const newAnnouncement = new Announcement(
    title.value,
    description.value,
    useMergeDateTime(publishDate.value, publishTime.value),
    useMergeDateTime(closeDate.value, closeTime.value),
    categoryId.value ?? (await categoryService.getDefaultCategory()).id,
    display.value ? 'Y' : 'N'
  )

  if (newAnnouncement.errors === undefined) {
    switch (props.action) {
      case 'add': {
        try {
          await announcementService.postAnnouncement(newAnnouncement)
          await router.push({ name: 'admin-announcement-listing' })
        } catch (error) {
          alert('There is an error: ' + error.message)
        }
        break
      }
      case 'edit': {
        try {
          await announcementService.updateAnnouncement(
            props.announcement?.id,
            newAnnouncement
          )
          await router.push({ name: 'admin-announcement-detail' })
        } catch (error) {
          alert('There is an error: ' + error.message)
        }
        break
      }
    }
  }
}
const onChangeHandler = () => {
  changed.value = true
}

const setDefaultTime = (publish = true) => {
  if (publish) {
    if (publishTime.value === null) {
      publishTime.value = '06:00'
    }
  } else {
    if (closeTime.value === null) {
      closeTime.value = '18:00'
    }
  }
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
  <div class="grid grid-cols-2 gap-6">
    <!-- title -->
    <InputField header="Title" class="col-span-2">
      <input
        class="ann-title focus:outline-none w-full"
        type="text"
        placeholder="insert title here"
        v-model="title"
        @input="onChangeHandler"
      />
    </InputField>

    <!-- category -->
    <InputField header="Category" class="row-start-2 col-span-2">
      <select
        class="ann-category w-full"
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
    <InputField header="Description" class="row-start-3 col-span-2">
      <QuillEditor
        content-type="html"
        toolbar="full"
        class="ann-description break-words border h-fit w-full min-h-[8rem]"
        placeholder="insert description"
        v-model:content="description"
        @update:content="onChangeHandler"
      />
    </InputField>

    <!--  <div class="flex flex-row gap-7">-->
    <!-- publish date -->
    <InputField header="Publish Date" class="row-start-4">
      <input
        class="ann-publish-date w-full"
        type="date"
        v-model="publishDate"
        :min="useSplitDate(new Date())"
        @input="onChangeHandler"
        @change="setDefaultTime(true)"
      />
      <input
        class="ann-publish-time w-full"
        type="time"
        v-model="publishTime"
        :disabled="publishDate === null"
        @input="onChangeHandler"
      />
    </InputField>

    <!-- close date -->
    <InputField header="Close Date" class="row-start-4">
      <input
        class="ann-close-date w-full"
        type="date"
        v-model="closeDate"
        :min="useSplitDate(new Date())"
        @input="onChangeHandler"
        @change="setDefaultTime(false)"
      />
      <input
        class="ann-close-time w-full"
        type="time"
        v-model="closeTime"
        :disabled="closeDate === null"
        @input="onChangeHandler"
      />
    </InputField>
    <!--  </div>-->

    <!-- display -->
    <InputField header="Display" class="row-start-5 col-span-2">
      <label class="">
        <input
          type="checkbox"
          class="ann-display"
          v-model="display"
          @input="onChangeHandler"
        />
        Check to show this announcement
      </label>
    </InputField>

    <div class="row-start-6 flex flex-row">
      <!-- cancel button -->
      <!--    <RouterLink :to="{ name: 'admin-announcement-listing' }">-->
      <SingleButton
        @click="$router.back()"
        class="ann-button transition ease-in-out hover:scale-110"
        :text="cancelText"
      />

      <!-- submit button -->
      <SingleButton
        class="ann-button rounded-lg transition ease-in-out text-white"
        :class="
          action === 'edit' && !changed
            ? 'bg-gray-400 border border-gray-400'
            : 'bg-violet-500 border border-violet-500 hover:border-violet-500 hover:bg-white hover:text-violet-500 hover:scale-110'
        "
        :text="submitText"
        :disabled="action === 'edit' ? !changed : false"
        @click="submitHandler"
      />
    </div>
  </div>
  <div></div>
</template>
