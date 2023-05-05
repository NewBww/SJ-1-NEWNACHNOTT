<script setup>
import ContentSection from '@/components/UI/organisms/ContentSection.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'

import PageTitle from '@/components/UI/atoms/PageTitle.vue'
import { RouterLink } from 'vue-router'
import InputForm from '@/components/UI/organisms/InputForm.vue'
</script>

<template>
  <div class="h-screen bg-[#f2f2f2]">
    <div class="h-full max-w-[72rem] w-full m-auto bg-white flex flex-col">
      <div class="flex flex-row items-center justify-center">
        <PageTitle title="Announcement Add" />
      </div>

      <ContentSection class="flex flex-col w-full h-full px-16 items-center">
        <div class="flex flex-col w-full gap-6 h-full">
          <InputForm />
        </div>
      </ContentSection>
    </div>
  </div>
</template>

<style scoped></style>
