<script setup>
import { onMounted, ref, watch } from 'vue'
import { AnnouncementService } from '@/services/announcementService.js'
import { useRouter } from 'vue-router'

const announcementService = new AnnouncementService()
const pageData = ref({})
const newData = ref({})

const router = useRouter()
const link = (announcementId) => {
  router.push({
    name: 'user-announcement-detail',
    params: { id: announcementId },
  })
}

const props = defineProps({
  showAnnouncement: {
    type: Boolean,
    default: true,
  },
})

onMounted(async () => {
  const data = await announcementService.getAnnouncementPage()
  pageData.value = data.content
  newData.value = pageData.value.filter((display) => display.announcementDisplay === 'Y')
  // console.log(pageData.value)
  // const data = await announcementService.getAllAnnouncements()
  // if (data !== undefined && data.length !== 0) {
  //   pageData.value = data
  // }
})

watch(
  () => props.showAnnouncement,
  (isActive) => {
    if (isActive) {
      newData.value = pageData.value.filter((display) => display.announcementDisplay === 'Y')
    } else {
      newData.value = pageData.value.filter((display) => display.announcementDisplay === 'N')
    }
  }
)
</script>

<template>
  <div class="w-full h-full">
    <table class="w-full h-full table-fixed border-separate border-spacing-y-6">
      <thead class="text-center">
        <tr>
          <th class="w-24">No.</th>
          <th class="ann-title text-left">Title</th>
          <th class="ann-category w-52">Category</th>
        </tr>
      </thead>
      <tbody v-if="newData.length === 0">
        <tr class="w-full text-center text-lg font-semibold text-red-600">
          <td class="text-center" colspan="7">No Announcement</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr
          @click="link(announcement.id)"
          v-for="(announcement, index) of newData"
          :key="announcement.id"
          :id="index"
          class="ann-item text-center h-fit w-full solidBoxShadow hover:bg-slate-50 cursor-pointer"
        >
          <td class="border-y border-black border-l rounded-l-2xl">
            {{ index + 1 }}
          </td>
          <td class="ann-title text-left border-y border-black">
            {{ announcement.announcementTitle }}
          </td>
          <td
            class="ann-category flex flex-row justify-center items-center border-y border-black border-r rounded-r-2xl"
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
