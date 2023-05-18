<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import PageTitle from '@/components/UI/atoms/PageTitle.vue'
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
    `${route.params.id}`,
    true
  )
  if (data !== undefined && data !== 404 && data !== 400) {
    announcementsData.value = data
  } else {
    alert('There is an error: The request page is not available')
    await router.push({ name: 'user-announcement-listing' })
  }
})

const checkClosedDate = () => {
  // console.log(new Date(announcementsData.value.closeDate) <= new Date())
  return announcementsData.value.closeDate === null
    ? false
    : new Date(announcementsData.value.closeDate) <= new Date()
}
</script>

<template>
  <div class="h-full bg-[#F4F4F4]">
    <div class="bg-[#F4F4F4] max-w-[72rem] m-auto">
      <div class="grid grid-cols-1 py-12">
        <!--      header-->
        <div class="grid grid-cols-10">
          <div class="grid content-center">
            <RouterLink
              class="w-fit no-underline text-black"
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
              <PageTitle first="Announcement" second="Detail" />
            </div>
          </div>
        </div>
        <!--      body-->

        <ContentSection
          class="-center grid grid-cols-[1fr_auto] w-full mt-12 border-2 border-black solidBoxShadow rounded-2xl bg-white"
        >
          <div
            class="w-full flex flex-row justify-between border-b border-r border-black"
          >
            <h2
              class="ann-title w-fit content-center px-6 py-5 text-2xl font-medium"
            >
              {{ announcementsData.announcementTitle }}
            </h2>

            <div
              v-if="checkClosedDate()"
              class="w-fit items-center justify-items-end content-center px-6 py-5 text-lg text-red-600 font-semibold"
            >
              <p class="ann-close-date justify-items-center">
                Closed on:
                <span class="text-black">
                  {{ useFormatTime(announcementsData.closeDate) }}</span
                >
              </p>
            </div>
          </div>
          <div
            class="ann-category w-64 border-b border-black content-center text-center py-5 text-2xl font-medium"
          >
            <p>
              {{ announcementsData.announcementCategory }}
            </p>
          </div>
          <div
            class="col-span-2 justify-items-center content-center text-base px-20 py-12"
          >
            <p
              class="ann-description ql-editor"
              v-html="announcementsData.announcementDescription"
            ></p>
          </div>
        </ContentSection>
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
