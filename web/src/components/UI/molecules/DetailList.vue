<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFormatTime } from '@/composables/date.js'
import { AnnouncementService } from '@/services/announcementService'
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
    if (data === 404 || data === 400) {
      alert('The request page is not available')
      await router.push({ name: 'admin-announcement-listing' })
    }
    // console.log(announcementsData.value)
  } catch (error) {
    console.log(error)
  }
})

defineEmits({})
</script>

<template>
  <DetailText
    heading="Title"
    class="ann-title"
    :detail="`${announcementsData.announcementTitle}`"
  />
  <DetailText
    heading="Category"
    class="ann-category"
    :detail="`${announcementsData.announcementCategory}`"
  />
  <DetailText
    heading="Description"
    class="ann-description"
    :detail="`${announcementsData.announcementDescription}`"
  />
  <DetailText
    heading="Publish Date"
    class="ann-publish-date"
    :detail="`${useFormatTime(announcementsData.publishDate)}`"
  />
  <DetailText
    heading="Close Date"
    class="ann-close-date"
    :detail="`${useFormatTime(announcementsData.closeDate)}`"
  />
  <DetailText
    heading="Display"
    class="ann-display"
    :detail="`${announcementsData.announcementDisplay}`"
  />
</template>
