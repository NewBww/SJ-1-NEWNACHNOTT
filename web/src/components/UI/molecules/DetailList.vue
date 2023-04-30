<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useFormatTime } from '@/composables/date.js'
import AnnouncementService from '@/services/announcementService'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import DetailText from '@/components/UI/atoms/DetailText.vue'

const route = useRoute()
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
    console.log(announcementsData.value)
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
    v-for="category of announcementsData.announcementCategory"
    :key="category.id"
    :detail="`${category}`"
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
    <RouterLink :to="{ name: 'home' }">
      <SingleButton text="Back" />
    </RouterLink>
  </div>
</template>
