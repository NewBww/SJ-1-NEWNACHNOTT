<script setup>
import ContentSection from '@/components/UI/organisms/ContentSection.vue'

import PageTitle from '@/components/UI/atoms/PageTitle.vue'

import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import IconArrowBack from '@/components/UI/atoms/IconArrowBack.vue'
import { RouterLink } from 'vue-router'
import InputForm from '@/components/UI/organisms/InputForm.vue'
</script>

<template>
  <div class="grid">
    <RouterLink class="w-fit" :to="{ name: 'admin-announcement-listing' }">
      <SingleButton
        class="ann-button border border-black rounded-full w-fit hover:bg-gray-200 active:bg-black active:text-white"
        text="Back"
      >
        <template #before-text-icon>
          <IconArrowBack class="w-[22px]" />
        </template>
      </SingleButton>
    </RouterLink>

    <PageTitle first="Announcement" second="Add" />
  </div>



  <ContentSection class="">
    <div class="ann-*">
      <InputForm submit-text="Submit" cancel-text="Cancel" action="add" />
    </div>
  </ContentSection>
</template>
