<script setup>
import { ref, watchEffect } from 'vue'
import { AnnouncementService } from '@/services/announcementService.js'
import { useRouter } from 'vue-router'
import { useAnnouncementStore } from '@/stores/AnnouncementStore'
import { storeToRefs } from 'pinia'
import PageNumber from '@/components/UI/molecules/PageNumber.vue'
import { useFormatTime } from '../../../composables/date'

const announcementService = new AnnouncementService()
const pageData = ref({})

const router = useRouter()
const announcementStore = useAnnouncementStore()

const { mode, page, category } = storeToRefs(announcementStore)

const link = (announcementId) => {
  router.push({
    name: 'user-announcement-detail',
    params: { id: announcementId },
  })
}

watchEffect(async () => {
  pageData.value = await announcementService.getAnnouncementPage(
    category.value,
    mode.value,
    page.value
  )
})
</script>

<template>
  <div class="w-full h-full">
    <table class="w-full h-full table-fixed border-separate border-spacing-y-4">
      <thead class="text-center">
        <tr>
          <th class="w-20">No.</th>
          <th class="text-left">Title</th>
          <th>Closed Date</th>
          <th class="w-48">Category</th>
        </tr>
      </thead>
      <tbody v-if="pageData?.content?.length === 0">
        <tr class="w-full text-center text-lg font-semibold text-red-600">
          <td class="text-center" colspan="7">No Announcement</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr
          @click="link(announcement.id)"
          v-for="(announcement, index) of pageData.content"
          :key="announcement.id"
          :id="index"
          class="ann-item text-center h-full w-full hover:bg-slate-50 cursor-pointer"
        >
          <td class="border-y border-black border-l rounded-l-2xl">
            {{ pageData.page * pageData.size + index + 1 }}
          </td>
          <td class="ann-title text-left border-y border-black">
            {{ announcement.announcementTitle }}
          </td>
          <td
            class="ann-close-date justify-center items-center border-y border-black"
          >
            {{ useFormatTime(announcement.closeDate) }}
          </td>
          <td
            class="ann-category justify-center items-center border-y border-black border-r rounded-r-2xl"
          >
            {{ announcement.announcementCategory }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <PageNumber :total-pages="pageData.totalPages" />
</template>

<style scoped>
td {
  padding: 0.7rem 0;
}
th {
  padding: 0 0;
}
</style>
