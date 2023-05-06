<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useFormatTime } from '@/composables/date.js'
import { AnnouncementService } from '@/services/announcementService.js'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'

const announcementService = new AnnouncementService()
const announcementsData = ref([])

onMounted(async () => {
  const data = await announcementService.getAllAnnouncements()
  if (data !== undefined && data.length !== 0) {
    announcementsData.value = data
  }
})

const deleteId = async (id) => {
  if (confirm('Do you want to delete')) {
    if ((await announcementService.deleteAnnouncement(id)) === 200) {
      announcementsData.value.splice(
        announcementsData.value.findIndex(
          (announcement) => announcement.id === id
        ),
        1
      )
    }
  }
}
</script>

<template>
  <div class="w-full h-full border-b-2 overflow-x-scroll">
    <table class="w-full h-full table-fixed">
      <thead class="text-center border-y-2">
        <tr>
          <th class="w-16">No.</th>
          <th class="ann-title text-left pl-6">Title</th>
          <th class="ann-category w-32">Category</th>
          <th class="ann-publish-date w-52">Publish Date</th>
          <th class="ann-close-date w-52">Close Date</th>
          <th class="ann-display w-16">Display</th>
          <th class="w-64">Action</th>
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
          <td class="flex gap-2 justify-center h-full items-center">
            <!-- view button -->
            <RouterLink
              :to="{
                name: 'admin-announcement-detail',
                params: { id: announcement.id },
              }"
            >
              <SingleButton
                text="view"
                class="ann-button view bg-gray-400 hover:bg-gray-300"
              />
            </RouterLink>

            <!-- edit button -->
            <RouterLink
              :to="{
                name: 'admin-announcement-edit',
                params: { id: announcement.id },
              }"
            >
              <SingleButton
                text="edit"
                class="ann-button view bg-gray-400 hover:bg-gray-300"
              />
            </RouterLink>

            <!-- delete button -->
            <SingleButton
              @click="deleteId(announcement.id)"
              text="delete"
              class="ann-button view bg-gray-400 hover:bg-gray-300"
            />
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
