<script setup>
import { ref, watchEffect } from 'vue'
import { AnnouncementService } from '@/services/announcementService.js'
import { RouterLink } from 'vue-router'
import { useAnnouncementStore } from '@/stores/AnnouncementStore'
import { storeToRefs } from 'pinia'
import PageNumber from '@/components/UI/molecules/PageNumber.vue'
import { useFormatTime } from '@/composables/date'

const announcementService = new AnnouncementService()
const pageData = ref({})
const announcementStore = useAnnouncementStore()

const { mode, page, category } = storeToRefs(announcementStore)

watchEffect(async () => {
  pageData.value = await announcementService.getAnnouncementPage(
    category.value,
    mode.value,
    page.value
  )
})
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 py-5">
    <div class="flex flex-row gap-6 pb-2 px-5 font-semibold">
      <h4 class="text-center w-20">No.</h4>
      <h4 class="text-left flex-grow">Title</h4>
      <h4 class="text-center w-32" v-if="mode === 'close'">Closed Date</h4>
      <h4 class="text-center w-32">Category</h4>
    </div>
    <div
      v-if="pageData?.content?.length === 0"
      class="w-full text-center text-2xl text-red-600"
    >
      No Announcement
    </div>
    <div
      v-else
      class="ann-item flex flex-row gap-6 border border-black border-b-2 border-r-2 p-5 rounded-2xl"
      v-for="(announcement, index) of pageData.content"
      :key="announcement.id"
      :id="index"
    >
      <div class="w-20 text-center">
        {{ pageData.page * pageData.size + index + 1 }}
      </div>
      <div class="text-left flex-grow ann-title">
        <RouterLink
          class="no-underline text-blue-600 hover:text-black hover:underline"
          :to="{
            name: 'user-announcement-detail',
            params: { id: announcement.id },
          }"
        >
          {{ announcement.announcementTitle }}
        </RouterLink>
      </div>
      <div class="ann-close-date w-32" v-if="mode === 'close'">
        {{ useFormatTime(announcement.closeDate) }}
      </div>
      <div class="ann-category w-32 text-center">
        {{ announcement.announcementCategory }}
      </div>
    </div>
  </div>
  <PageNumber
    :total-pages="pageData.totalPages"
    :first="pageData.first"
    :last="pageData.last"
  />
</template>

<style scoped>
td {
  padding: 0.7rem 0;
}
th {
  padding: 0 0;
}
</style>
