<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useFormatTime } from '@/composables/date.js'
import { AnnouncementService } from '@/services/announcementService.js'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'

const announcementService = new AnnouncementService()
const announcementsData = ref([])

const deleteId = async (id) => {
  if (confirm('Do you want to delete?')) {
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

onMounted(async () => {
  const data = await announcementService.getAllAnnouncements()
  if (data !== undefined && data.length !== 0) {
    announcementsData.value = data
  }
})
</script>

<template>
  <div class="w-full h-full">
    <table class="w-fit h-full table-fixed border-separate border-spacing-y-6">
      <thead class="text-center">
        <tr>
          <th class="w-14">No.</th>
          <th class="ann-title text-left">Title</th>
          <th class="ann-category w-32">Category</th>
          <th class="ann-publish-date w-52">Publish Date</th>
          <th class="ann-close-date w-52">Close Date</th>
          <th class="ann-display w-16">Display</th>
          <th class="w-60">Action</th>
        </tr>
      </thead>
      <tbody v-if="announcementsData.length === 0">
        <tr class="w-full text-center text-lg font-semibold text-red-600">
          <td class="text-center" colspan="7">No Announcement</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr
          v-for="(announcement, index) of announcementsData"
          :key="announcement.id"
          :id="index"
          class="ann-item text-center h-full solidBoxShadow"
        >
          <td class="border-y border-black border-l rounded-l-2xl">
            {{ index + 1 }}
          </td>
          <td class="ann-title text-left border-y border-black">
            {{ announcement.announcementTitle }}
          </td>
          <td class="ann-category border-y border-black">
            {{ announcement.announcementCategory }}
          </td>
          <td class="ann-publish-date border-y border-black">
            {{ useFormatTime(announcement.publishDate) }}
          </td>
          <td class="ann-close-date border-y border-black">
            {{ useFormatTime(announcement.closeDate) }}
          </td>
          <td class="ann-display border-y border-black">
            {{ announcement.announcementDisplay }}
          </td>
          <td 
            class="h-full flex flex-row justify-center items-center border-y border-black border-r rounded-r-2xl"
          >
            <!-- view button -->
            <RouterLink
              :to="{
                name: 'admin-announcement-detail',
                params: { id: announcement.id },
              }"
            >
              <SingleButton
                text="view"
                class="ann-button view bg-[#CBF3E9] hover:bg-[#A5F3E0] rounded-xl border border-black"
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
                class="ann-button view bg-[#C0E7FF] hover:bg-[#ADE0FF] rounded-xl border border-black"
              />
            </RouterLink>

            <!-- delete button -->
            <SingleButton
              @click="deleteId(announcement.id)"
              text="delete"
              class="ann-button view bg-[#F0E7FE] hover:bg-[#E2D0FE] rounded-xl border border-black"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
td {
  padding: 0.7rem 0;
}
th {
  padding: 0px 0;
}
/*.solidBoxShadow {*/
/*  box-shadow: 5px 5px 0px 0px;*/
/*}*/
</style>
