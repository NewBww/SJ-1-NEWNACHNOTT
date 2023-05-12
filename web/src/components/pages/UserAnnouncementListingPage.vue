<script setup>
import ContentSection from '@/components/UI/organisms/ContentSection.vue'
import TimeZone from '@/components/UI/atoms/TimeZone.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import UserAnnouncementList from '../UI/organisms/UserAnnouncementList.vue'
import { useAnnouncementStore } from '@/stores/AnnouncementStore'
import CategoryDropDown from '@/components/UI/atoms/CategoryDropDown.vue'

const announcementStore = useAnnouncementStore()

const { toggleMode, isModeActive } = announcementStore
</script>

<template>
  <div class="max-w-[80rem] w-full m-auto flex flex-col">
    <div class="text-4xl font-semibold py-8 tracking-wider">
      SIT<br />Announcement<br />
      <div class="flex flex-row items-center gap-3">
        System<span
          class="text-base w-fit px-4 mt-2 border border-black rounded-full"
          >SAS</span
        >
      </div>
    </div>
    <ContentSection>
      <div class="w-full h-12 justify-between items-center flex flex-row">
        <TimeZone />
        <div class="flex flex-row w-full h-10 justify-end gap-6">
          <CategoryDropDown />
          <SingleButton
            @click="toggleMode"
            :text="
              isModeActive() ? 'Closed Announcements' : 'Active Announcements'
            "
            class="ann-button transition w-fit bg-white border-black border rounded-md solidBoxShadowBtnHover hover:border-2 hover:-translate-x-1 hover:-translate-y-1 hover:active:translate-x-0 hover:active:translate-y-0 ease-in-out active:bg-[#F4F4F4]"
          />
        </div>
      </div>
      <UserAnnouncementList />
    </ContentSection>
  </div>
</template>

<style scoped>
.solidBoxShadowBtnHover:hover {
  box-shadow: 0.1rem 0.1rem, 0.2rem 0.2rem, 0.25rem 0.25rem;
}
.solidBoxShadowBtnHover:active {
  box-shadow: inset 0.1rem 0.1rem, inset 0.2rem 0.2rem, inset 0.25rem 0.25rem;
}
</style>
