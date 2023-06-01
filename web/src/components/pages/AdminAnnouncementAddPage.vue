<script setup>
import ContentSection from '@/components/UI/organisms/ContentSection.vue'

import PageTitle from '@/components/UI/atoms/PageTitle.vue'

import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import IconArrowBack from '@/components/UI/atoms/IconArrowBack.vue'
import { RouterLink } from 'vue-router'
import AnnouncementForm from '@/components/UI/organisms/AnnouncementForm.vue'
</script>

<template>
  <div
    class="max-w-[72rem] w-full h-full m-auto grid grid-cols-[8rem_1fr_8rem] gap-y-12 py-12"
  >
    <RouterLink
      class="w-fit h-fit no-underline text-black self-center justify-self-center"
      :to="{ name: 'admin-announcement-listing' }"
    >
      <SingleButton
        class="ann-button border border-black rounded-full w-fit hover:bg-gray-200 active:bg-black active:text-white"
        text="Back"
      >
        <template #before-text-icon>
          <IconArrowBack class="w-[22px]" />
        </template>
      </SingleButton>
    </RouterLink>

    <PageTitle first="Announcement" second="Add" class="col-start-2" />

    <ContentSection class="col-start-2">
      <div class="ann-*">
        <AnnouncementForm
          submit-text="Submit"
          cancel-text="Cancel"
          action="add"
        />
      </div>
    </ContentSection>
  </div>
</template>
