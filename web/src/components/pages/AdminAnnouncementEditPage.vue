<script setup>
import { ref, onMounted } from 'vue'
import { AnnouncementService } from '@/services/announcementService.js'
import { useRoute, useRouter } from 'vue-router'
import ContentSection from '@/components/UI/organisms/ContentSection.vue'

import PageTitle from '@/components/UI/atoms/PageTitle.vue'
import EditAnnouncementForm from '@/components/UI/organisms/EditAnnouncementForm.vue'

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
      // console.log(announcementsData.value)
    }
    if (data === 404 || data === 400) {
      alert('The request page is not available')
      await router.push({ name: 'admin-announcement-listing' })
    }
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="h-screen bg-[#f2f2f2]">
    <div class="h-full max-w-[72rem] w-full m-auto bg-white flex flex-col">
      <div class="flex flex-row items-center justify-center">
        <PageTitle title="Announcement Edit" />
      </div>

      <ContentSection class="flex flex-col w-full h-full px-16 items-center">
        <div class="flex flex-col w-full gap-6 h-full">
          <EditAnnouncementForm :announcement="announcementsData" />
        </div>
      </ContentSection>
    </div>
  </div>
</template>
