<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'
import ContentSection from '../UI/organisms/ContentSection.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import IconArrowBack from '@/components/UI/atoms/IconArrowBack.vue'
import { AnnouncementService } from '@/services/announcementService'
import { onMounted, ref } from 'vue'
import { useFormatTime } from '@/composables/date'
import PageTitle from '@/components/UI/atoms/PageTitle.vue'
import DetailText from '@/components/UI/atoms/DetailText.vue'

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
    console.log(announcementsData.value)
  } else {
    alert('There is an error: The request page is not available')
    await router.push({ name: 'admin-announcement-listing' })
  }
})
</script>
<!--test github-->
<template>
  <div
    class="max-w-[72rem] w-full h-full m-auto grid grid-cols-[8rem_1fr_8rem] gap-y-4 py-12 bg-[#F4F4F4]"
  >
    <RouterLink
      class="w-fit no-underline text-black self-center justify-self-center"
      :to="{ name: 'admin-announcement-listing' }"
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
    <PageTitle first="Announcement" second="Detail" />

    <ContentSection class="flex flex-col col-start-2">
      <div class="w-full flex flex-row justify-end pr-16">
        <RouterLink
          class="no-underline text-black"
          :to="{ name: 'admin-announcement-edit' }"
        >
          <SingleButton
            class="ann-button w-fit text-lg bg-black text-white px-6 py-0.5 rounded-t-lg"
            text="Edit"
          >
          </SingleButton>
        </RouterLink>
      </div>

      <div
        class="flex flex-col justify-items-center border-2 border-b-8 border-black rounded-2xl bg-white"
      >
        <div class="grid grid-cols-4 w-full border-b border-black">
          <div
            class="ann-title grid col-span-3 content-center px-6 py-5 text-2xl font-medium border-r border-black"
          >
            {{ announcementsData.announcementTitle }}
          </div>
          <span
            class="ann-category grid grid-cols-1 justify-items-center content-center text-xl py-5"
            >{{ announcementsData.announcementCategory }}</span
          >
        </div>
        <div class="grid content-center text-justify px-20 py-12">
          <p
            class="ann-description"
            v-html="announcementsData.announcementDescription"
          ></p>
        </div>
        <div
          class="grid grid-cols-6 content-center text-justify border-t border-black"
        >
          <div
            class="grid col-span-5 grid-rows-2 content-center border-r border-black"
          >
            <DetailText
              heading="Publish Date"
              class="ann-publish-date border-b w-full border-black px-6 py-3"
              :detail="useFormatTime(announcementsData.publishDate)"
            />
            <DetailText
              heading="Close Date"
              class="ann-close-date px-6 py-3"
              :detail="useFormatTime(announcementsData.closeDate)"
            />
          </div>
          <div class="grid justify-items-center content-center">
            <DetailText
              heading="Display"
              class="ann-display"
              :detail="announcementsData.announcementDisplay"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-end">
        <div
          class="flex flex-row items-center font-mono gap-2 rounded-lg overflow-auto mt-3 border border-black w-fit p-1"
        >
          <p
            class="bg-gradient-to-r from-black to-zinc-600 text-white px-2 py-0.5 rounded -lg tracking-wider"
          >
            #views >
          </p>
          <p class="ann-counter pl-1 pr-2">{{ announcementsData.viewCount }}</p>
        </div>
      </div>
    </ContentSection>
  </div>
</template>
