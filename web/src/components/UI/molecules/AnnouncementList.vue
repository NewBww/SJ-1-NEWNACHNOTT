<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useFormatTime } from '@/composables/date.js'
import AnnouncementService from '@/services/announcementService.js'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'

const announcementService = new AnnouncementService()
const announcementsData = ref([])

onMounted(async () => {
  const data = await announcementService.getAllAnnouncements()
  if (data !== undefined && data.length !== 0) {
    announcementsData.value = data
  }
  // console.log(announcementsData.value)
})
</script>

<template>
  <div class="w-full border-b-2 overflow-x-scroll">
    <table class="w-full h-full table-fixed">
      <thead class="text-center border-y-2">
        <tr>
          <th class="w-16">No.</th>
          <th class="ann-title text-left pl-6">Title</th>
          <th class="ann-category w-32">Category</th>
          <th class="ann-publish-date w-52">Publish Date</th>
          <th class="ann-close-date w-52">Close Date</th>
          <th class="ann-displayw-16">Display</th>
          <th class="w-32">Action</th>
        </tr>
      </thead>
      <tbody v-if="announcementsData.length === 0">
        <tr class="w-full text-center text-lg font-semibold text-red-600">
          <td class="text-center" colspan="7">No Announcement</td>
        </tr>
      </tbody>
      <tbody class="divide-y-2" v-else>
        <tr
          v-for="(announcement, index) of announcementsData"
          :key="announcement.id"
          :id="index"
          class="ann-item text-center"
        >
          <td>{{ index + 1 }}</td>
          <td class="ann-title text-left">
            {{ announcement.announcementTitle }}
          </td>
          <td class="ann-category">
            {{ announcement.announcementCategory }}
          </td>
          <td class="ann-publish-date">
            {{ useFormatTime(announcement.publishDate) }}
          </td>
          <td class="ann-close-date">
            {{ useFormatTime(announcement.closeDate) }}
          </td>
          <td class="ann-display">{{ announcement.announcementDisplay }}</td>
          <td>
            <RouterLink
              :to="{
                name: 'admin-announcement-detail',
                params: { id: announcement.id },
              }"
            >
              <SingleButton text="view" class="ann-button view" />
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
td,
th {
  padding: 0.7rem 0;
}
</style>
