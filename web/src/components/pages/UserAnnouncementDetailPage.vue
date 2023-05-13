<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

import { AnnouncementService } from '@/services/announcementService'
import ContentSection from '@/components/UI/organisms/ContentSection.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import IconArrowBack from '@/components/UI/atoms/IconArrowBack.vue'
import { useFormatTime } from '@/composables/date'

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
    await router.push({ name: 'user-announcement-listing' })
  }
})
</script>

<template>
  <div class="h-full bg-[#F4F4F4]">
    <div class="bg-[#F4F4F4] max-w-[72rem] m-auto">
      <div class="grid grid-cols-1 py-12">
        <!--      header-->
        <div class="grid grid-cols-10">
          <div class="grid content-center">
            <RouterLink
              class="w-fit"
              :to="{ name: 'user-announcement-listing' }"
            >
              <SingleButton
                class="ann-button border border-black rounded-full hover:bg-gray-200 active:bg-black active:text-white"
                text="Back"
              >
                <template #before-text-icon>
                  <IconArrowBack class="w-[22px]" />
                </template>
              </SingleButton>
            </RouterLink>
          </div>
          <div class="col-span-9">
            <div class="flex items-center gap-7 w-fit">
              <div class="text-4xl font-semibold tracking-wider">
                Announcement<br />Detail
              </div>
            </div>
          </div>
        </div>
        <!--      body-->

        <div class="grid grid-cols-10 justify-items-center pt-12">
          <div></div>
          <ContentSection
            class="grid col-span-8 items-center w-full border-2 border-black solidBoxShadow rounded-2xl bg-white"
          >
            <div class="grid grid-cols-3 w-full border-b border-black">
              <span
                class="ann-title grid grid-col-span-2 content-center px-6 py-5 text-2xl font-medium"
                >{{ announcementsData.announcementTitle }}
              </span>
              <div
                class="grid grid-cols-2 items-center justify-items-end content-center py-5 text-lg text-red-600 font-semibold border-r border-black"
              >
                Closed on:
                <!--                  class="grid grid-cols-1  text-xl py-5"-->
                <span
                  class="ann-close-date grid grid-cols-1 text-black justify-items-center"
                >
                  {{ useFormatTime(announcementsData.closeDate) }}</span
                >
              </div>

              <span
                class="ann-category grid grid-col-span-1 content-center justify-items-center px-4 py-5 text-2xl font-medium"
              >
                {{ announcementsData.announcementCategory }}
              </span>
            </div>
            <div
              class="ann-description grid justify-items-center content-center text-base px-20 py-12"
            >
              <span>{{ announcementsData.announcementDescription }}</span>
            </div>
          </ContentSection>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.solidBoxShadow {
  box-shadow: 0.75rem 0.75rem 0rem;
}
.bg01 {
  position: absolute;
  width: 957px;
  height: 957px;
  left: 1380px;
  top: 601px;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #d2a5ce 0%,
    rgba(210, 165, 206, 0) 100%
  );
  filter: blur(32px);
}
</style>
