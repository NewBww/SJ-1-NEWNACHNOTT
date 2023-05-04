<script setup>
import ContentSection from '@/components/UI/organisms/ContentSection.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'

import DetailList from '@/components/UI/molecules/DetailList.vue'
import PageTitle from '@/components/UI/atoms/PageTitle.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="h-screen bg-[#f2f2f2]">
    <div class="h-full max-w-[72rem] w-full m-auto bg-white flex flex-col">
      <div class="flex flex-row items-center justify-between">
        <PageTitle title="Announcement Detail" />
        <div class="w-[83.73px]"></div>
      </div>

      <ContentSection class="flex flex-col w-full px-16 items-center">
        <div class="flex flex-col w-full gap-6">
          <DetailList />
        </div>
      </ContentSection>

      <div class="flex flex-row px-16 py-6">
        <RouterLink :to="{ name: 'admin-announcement-listing' }">
          <SingleButton
            class="ann-button bg-white border border-rose-500 text-rose-500 rounded-lg"
            text="Cancel"
          />
        </RouterLink>
        <SingleButton
          class="ann-button bg-violet-500 text-white rounded-lg w-[83px]"
          text="Add"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
