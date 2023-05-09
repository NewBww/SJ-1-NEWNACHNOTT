<script setup>
import { onMounted, ref } from 'vue'
import { AnnouncementService } from '@/services/announcementService.js'

const announcementService = new AnnouncementService()
const pageData = ref([])

onMounted(async () => {
    const data = await announcementService.getAnnouncementPage()
    pageData.value = data.content
    console.log(pageData.value)
})
</script>

<template>
  <div class="w-full h-full">
    <table class="w-full h-full table-fixed border-separate border-spacing-y-6">
      <thead class="text-center">
        <tr>
          <th class="w-24">No.</th>
          <th class="ann-title text-left">Title</th>
          <th class="ann-category">Category</th>
        </tr>
      </thead>
      <tbody v-if="pageData.length === 0">
        <tr class="w-full text-center text-lg font-semibold text-red-600">
          <td class="text-center" colspan="7">No Announcement</td>
        </tr>
      </tbody>
      <tbody v-else>
        <!--        <div class="border">-->
            <tr
            v-for="(announcement, index) of pageData"
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
            <td
              class="h-full flex flex-row justify-center items-center border-y border-black border-r rounded-r-2xl"
            >
              {{ announcement.announcementCategory }}
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
