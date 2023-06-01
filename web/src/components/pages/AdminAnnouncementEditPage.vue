<script setup>
import { ref, onMounted } from 'vue'
import { AnnouncementService } from '@/services/announcementService.js'
import { useRoute, useRouter } from 'vue-router'
import ContentSection from '@/components/UI/organisms/ContentSection.vue'
import AnnouncementForm from '@/components/UI/organisms/AnnouncementForm.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import IconArrowBack from '@/components/UI/atoms/IconArrowBack.vue'
import PageTitle from '@/components/UI/atoms/PageTitle.vue'

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
  <div class="h-full bg-[#F4F4F4]">
    <div class="bg-[#F4F4F4] max-w-[72rem] m-auto">
      <div class="grid grid-cols-1 pt-9">
        <div class="grid grid-cols-10">
          <div class="grid content-center">
            <SingleButton
              @click="$router.back()"
              class="ann-button w-fit border border-black rounded-full hover:bg-gray-200 active:bg-black active:text-white"
              text="Back"
            >
              <template #before-text-icon>
                <IconArrowBack class="w-[22px]" />
              </template>
            </SingleButton>
          </div>
          <div class="col-span-9">
            <div class="flex items-center gap-7 w-fit">
              <PageTitle first="Announcement" second="Edit" />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-10 pt-10 justify-items-center">
          <ContentSection
            class="grid col-span-8 col-start-2 w-full h-full content-center"
          >
            <div class="ann-* w-full gap-6 h-full">
              <AnnouncementForm
                :announcement="announcementsData"
                submit-text="Submit"
                cancel-text="Back"
                action="edit"
              />
            </div>
          </ContentSection>
        </div>
      </div>
    </div>
  </div>
</template>
