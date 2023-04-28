<script setup>
import AnnouncementList from '../UI/molecules/AnnouncementList.vue'
import ContentSection from '@/components/UI/organisms/ContentSection.vue'
import PageTitle from '@/components/UI/atoms/PageTitle.vue'
import TimeZone from '@/components/UI/atoms/TimeZone.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
</script>

<template>
  <div class="h-full max-w-[72rem] w-full m-auto bg-[#f2f2f2] flex flex-col">
    <PageTitle title="SIT Announcement System (SAS)" />
    <ContentSection>
      <div
        class="h-fit w-full pt-8 pb-4 pl-9 pr-9 justify-between items-center flex flex-row"
      >
        <TimeZone />
        <SingleButton text="Add Announcement" />
      </div>
      <AnnouncementList />
    </ContentSection>
  </div>
</template>
