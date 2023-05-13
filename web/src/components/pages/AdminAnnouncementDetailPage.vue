<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'
import ContentSection from '../UI/organisms/ContentSection.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import IconArrowBack from '@/components/UI/atoms/IconArrowBack.vue'
import { AnnouncementService } from '@/services/announcementService'
import { onMounted, ref } from 'vue'
import { useFormatTime } from '@/composables/date'
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
  } else {
    alert('There is an error: The request page is not available')
    await router.push({ name: 'admin-announcement-listing' })
  }
})
</script>
<!--test github-->
<template>
  <div class="h-full bg-[#F4F4F4]">
    <div class="bg-[#F4F4F4] max-w-[72rem] m-auto">
      <div class="grid grid-cols-1 py-12">
        <!--      header-->
        <div class="grid grid-cols-10">
          <div class="grid content-center">
            <RouterLink
              class="w-fit"
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
          </div>
          <div class="col-span-9">
            <div class="flex items-center gap-7 w-fit">
              <div class="text-4xl font-semibold tracking-wider">
                Announcement<br />Detail
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-row w-11/12 pt-4 pr-14">
          <RouterLink
            class="flex flex-row justify-end"
            :to="{ name: 'admin-announcement-edit' }"
          >
            <SingleButton
              class="w-fit text-lg bg-black text-white px-6 py-0.5 rounded-t-lg"
              text="Edit"
            >
            </SingleButton>
          </RouterLink>
        </div>
        <!--      body-->

        <div class="grid grid-cols-10 justify-items-center">
          <div></div>
          <ContentSection
            class="grid col-span-8 items-center w-full border-2 border-b-8 border-black rounded-2xl bg-white"
          >
            <div class="grid grid-cols-4 w-full border-b border-black">
              <div
                class="grid col-span-3 content-center px-6 py-5 text-2xl font-medium border-r border-black"
              >
                {{ announcementsData.announcementTitle }}
              </div>
              <span
                class="grid grid-cols-1 justify-items-center content-center text-xl py-5"
                >{{ announcementsData.announcementCategory }}</span
              >
            </div>
            <div
              class="grid justify-items-center content-center text-justify px-20 py-12"
            >
              {{ announcementsData.announcementDescription }}
            </div>
            <div
              class="grid grid-cols-6 justify-items-center content-center text-justify border-t border-black"
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
          </ContentSection>
          <div></div>
        </div>
      </div>
    </div>
  </div>

  <!--  <div class="h-full">-->
  <!--    <div class="max-w-[72rem] w-full m-auto">-->
  <!--      &lt;!&ndash;      header&ndash;&gt;-->
  <!--      <div class="flex flex-row items-center pt-12 gap-7">-->
  <!--        <RouterLink :to="{ name: 'admin-announcement-listing' }">-->
  <!--          <SingleButton-->
  <!--            class="ann-button border border-black rounded-full gap-1 hover:bg-gray-200 active:bg-black active:text-white"-->
  <!--            text="Back"-->
  <!--          >-->
  <!--            <template #before-text-icon>-->
  <!--              <IconArrowBack />-->
  <!--            </template>-->
  <!--          </SingleButton>-->
  <!--        </RouterLink>-->
  <!--        <div class="text-4xl font-semibold tracking-wider">-->
  <!--          Announcement<br />Detail-->
  <!--        </div>-->
  <!--      </div>-->

  <!--      <ContentSection class="flex flex-row items-center w-full pt-10">-->
  <!--        <div-->
  <!--          class="bg-[#F9EBFF] border border-black w-4/5 pb-5 pt-0 pl-16 pr-12 rounded-3xl"-->
  <!--        >-->
  <!--          <RouterLink-->
  <!--            class="flex flex-row justify-end h-11"-->
  <!--            :to="{ name: 'admin-announcement-edit' }"-->
  <!--          >-->
  <!--            <SingleButton-->
  <!--              class="ann-button transition ease-in-out gap-2 bg-white rounded-b-xl border-b border-r border-l border-black solidBoxShadowBtnHover hover:border-b-2 hover:border-r-2 hover:border-l-2 active:border-b-2 active:border-r-2 active:border-l-2 hover:-translate-x-2 hover:active:translate-x-0"-->
  <!--              text="Edit"-->
  <!--            >-->
  <!--              <template #before-text-icon>-->
  <!--                <IconPencilEdit />-->
  <!--              </template>-->
  <!--            </SingleButton>-->
  <!--          </RouterLink>-->
  <!--          &lt;!&ndash;        detail&ndash;&gt;-->
  <!--          <div class="flex flex-col w-full gap-6">-->
  <!--            <DetailList />-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </ContentSection>-->
  <!--    </div>-->
  <!--  </div>-->
</template>
