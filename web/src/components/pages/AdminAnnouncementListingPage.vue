<script setup>
import ContentSection from '@/components/UI/organisms/ContentSection.vue'
import PageTitle from '@/components/UI/atoms/PageTitle.vue'
import TimeZone from '@/components/UI/atoms/TimeZone.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import AnnouncementList from '@/components/UI/organisms/AnnouncementList.vue'
</script>

<template>
  <div class="h-screen bg-[#f2f2f2]">
    <div class="h-full max-w-[80rem] w-full m-auto bg-white flex flex-col">
      <PageTitle title="SIT Announcement System (SAS)" />
      <ContentSection>
        <div
          class="h-fit w-full pt-8 pb-4 pl-9 pr-9 justify-between items-center flex flex-row"
        >
          <TimeZone />
          <router-link :to="{ name: 'admin-announcement-add' }">
            <SingleButton
              text="Add Announcement"
              class="ann-button bg-gray-400 hover:bg-gray-300"
            />
          </router-link>
        </div>
        <AnnouncementList />
      </ContentSection>
    </div>
  </div>
</template>
