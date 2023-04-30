<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useFormatTime } from '@/composables/date.js'
import AnnouncementService from '@/services/announcementService'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import DetailText from '@/components/UI/atoms/DetailText.vue'
const route = useRoute()
const router = useRouter()
const announcementService = new AnnouncementService()
const announcementsData = ref([])
onMounted(async () => {
  try {
    const data = await announcementService.getAnnouncementById(
      `${route.params.id}`
    )
    if (data !== undefined && data.length !== 0) {
      announcementsData.value = data
    }
    if (data === 404) {
      alert('The requested page is not available!')
      router.push({ name: 'admin-announcement-listing'});
    }
    // console.log(announcementsData.value)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <DetailText
    heading="Title"
    :detail="`${announcementsData.announcementTitle}`"
  />
  <DetailText
    heading="Category"
    :detail="`${announcementsData.announcementCategory}`"
  />
  <DetailText
    heading="Description"
    :detail="`${announcementsData.announcementDescription}`"
  />
  <DetailText
    heading="Publish Date"
    :detail="`${useFormatTime(announcementsData.publishDate)}`"
  />
  <DetailText
    heading="Close Date"
    :detail="`${useFormatTime(announcementsData.closeDate)}`"
  />
  <DetailText
    heading="Display"
    :detail="`${announcementsData.announcementDisplay}`"
  />
  <div>
    <RouterLink :to="{ name: 'admin-announcement-listing' }">
      <SingleButton text="Back" />
    </RouterLink>
  </div>
</template>
