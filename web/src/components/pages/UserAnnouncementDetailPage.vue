<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

import { AnnouncementService } from '@/services/announcementService'
import ContentSection from '@/components/UI/organisms/ContentSection.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import IconArrowBack from '@/components/UI/atoms/IconArrowBack.vue'

const route = useRoute()
const router = useRouter()
const announcementService = new AnnouncementService()
const announcementsData = ref({})
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
  <div class="h-full bg-[#F4F4F4]">
    <div class="bg-[#F4F4F4] max-w-[72rem] m-auto">
      <!--      header-->
      <div class="flex items-center pt-12 gap-7 w-fit">
        <RouterLink :to="{ name: 'user-announcement-listing' }">
          <SingleButton
            class="ann-button border border-black w-fit rounded-full hover:bg-gray-200 active:bg-black active:text-white"
            text="Back"
          >
            <template #before-text-icon>
              <IconArrowBack class="w-5" />
            </template>
          </SingleButton>
        </RouterLink>

        <div class="text-4xl font-semibold tracking-wider">
          Announcement<br />Detail
        </div>
      </div>

      <ContentSection class="flex flex-row items-center w-full pt-10">
        <div class="flex justify-between border border-black w-full">
          <span class="">{{ announcementsData.announcementTitle }}</span>
          <span class="">{{ announcementsData.announcementCategory }}</span>
        </div>
      </ContentSection>
    </div>
  </div>
</template>
