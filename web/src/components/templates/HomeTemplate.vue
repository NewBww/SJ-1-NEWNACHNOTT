<script setup>
import PageTitle from '@/components/UI/atoms/PageTitle.vue'
import AnnouncementList from '@/components/UI/molecules/AnnouncementList.vue'
import ContentSection from '@/components/UI/organisms/ContentSection.vue'
import TimeZone from '@/components/UI/atoms/TimeZone.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
</script>

<template>
  <div class="h-full w-[60%] m-auto bg-[#f2f2f2] flex flex-col">
    <PageTitle title="Page Title" />
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
