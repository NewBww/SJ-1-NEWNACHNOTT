<script setup>
import { ref, onMounted } from 'vue'
import { AnnouncementService } from '@/services/announcementService.js'
import { useRoute, useRouter } from 'vue-router'
import ContentSection from '@/components/UI/organisms/ContentSection.vue'

import PageTitle from '@/components/UI/atoms/PageTitle.vue'
import InputForm from '@/components/UI/organisms/InputForm.vue'

const route = useRoute()
const router = useRouter()
const announcementService = new AnnouncementService()
const announcementsData = ref([])

onMounted(async () => {
  const data = await announcementService.getAnnouncementById(
    `${route.params.id}`
  )
  if (data !== undefined && data !== 404 && data !== 400) {
    announcementsData.value = data
  } else {
    alert('There is an error: The request page is not available')
    await router.push({ name: 'admin-announcement-listing' })
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
        <div class="ann-* flex flex-col w-full gap-6 h-full">
          <InputForm
            :announcement="announcementsData"
            submit-text="Edit"
            cancel-text="Back"
            action="edit"
          />
        </div>
      </ContentSection>
    </div>
  </div>
</template>
