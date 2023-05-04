<script setup>
import AnnouncementService from '@/services/announcementService'
import { onMounted, ref } from 'vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import DetailListStatic from '@/components/UI/molecules/DetailListStatic.vue'
import { RouterLink, useRoute } from 'vue-router'
import ContentSection from '@/components/UI/organisms/ContentSection.vue'
import IconArrowBack from '@/components/UI/atoms/IconArrowBack.vue'
import DetailList from '@/components/UI/molecules/DetailList.vue'
import PageTitle from '@/components/UI/atoms/PageTitle.vue'

const announcementService = new AnnouncementService()
const announcementsData = ref([])

onMounted(async () => {
  try {
    announcementsData.value = await announcementService.getAnnouncementById(
      useRoute().params.id
    )
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="h-screen bg-[#f2f2f2]">
    <div class="h-full max-w-[72rem] w-full m-auto bg-white flex flex-col">
      <div class="flex flex-row items-center justify-between">
        <RouterLink :to="{ name: 'admin-announcement-listing' }">
          <SingleButton class="ann-button" text="Back">
            <template #before-text-icon>
              <IconArrowBack />
            </template>
          </SingleButton>
        </RouterLink>
        <PageTitle title="Announcement Detail" />
        <div class="w-[83.73px]"></div>
      </div>

      <ContentSection class="flex flex-col w-full px-16 items-center">
        <div class="flex flex-col w-full gap-6">
          <DetailList />
        </div>
      </ContentSection>
    </div>
  </div>
</template>

<style scoped></style>
