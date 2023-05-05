<script setup>
import ContentSection from '@/components/UI/organisms/ContentSection.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'

import PageTitle from '@/components/UI/atoms/PageTitle.vue'
import { RouterLink } from 'vue-router'
import TitleInput from '@/components/UI/molecules/TitleInput.vue'
import DescriptionInput from '@/components/UI/molecules/DescriptionInput.vue'
import DateInput from '@/components/UI/molecules/PublishDate.vue'
import PublishDate from '@/components/UI/molecules/PublishDate.vue'
import CloseDate from '@/components/UI/molecules/CloseDate.vue'
import DisplayCheckBox from '@/components/UI/molecules/DisplayCheckBox.vue'
import CategoryInput from '@/components/UI/molecules/CategoryInput.vue'
</script>

<template>
  <div class="h-screen bg-[#f2f2f2]">
    <div class="h-full max-w-[72rem] w-full m-auto bg-white flex flex-col">
      <div class="flex flex-row items-center justify-center">
        <PageTitle title="Announcement Add" />
      </div>

      <ContentSection class="flex flex-col w-full h-full px-16 items-center">
        <div class="flex flex-col w-full gap-6 h-full">
          <TitleInput />
          <CategoryInput />
          <DescriptionInput />
          <PublishDate />
          <CloseDate />
          <DisplayCheckBox />
        </div>
      </ContentSection>

      <div class="flex flex-row px-16 py-6 w-fit gap-4">
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
