<script setup>
import DetailList from '@/components/UI/molecules/DetailList.vue'
import PageTitle from '../UI/atoms/PageTitle.vue'
import ContentSection from '../UI/organisms/ContentSection.vue'
import { RouterLink } from 'vue-router'
import TextButton from '@/components/UI/atoms/TextButton.vue'
</script>

<template>
  <div class="h-screen bg-[#f2f2f2]">
    <div class="h-full max-w-[72rem] w-full m-auto bg-white flex flex-col">
      <div class="flex flex-row items-center justify-between">
        <RouterLink :to="{ name: 'admin-announcement-listing' }">
          <TextButton class="ann-button" text="Back" />
        </RouterLink>
        <PageTitle title="Announcement Detail" />
        <div class="w-[83.73px]"></div>
      </div>

      <ContentSection class="flex flex-col w-full px-16 items-center">
        <div class="flex flex-col w-full gap-6">
          <DetailList />
        </div>
      </ContentSection>
    </div>
  </div>

  <!-- <div class="w-screen h-screen flex justify-center items-center"> -->
  <!-- <div class="flex flex-col gap-4 w-6/12 mb-36 p-8"> -->
  <!-- <div class="flex w-full justify-between items-center"> -->
  <!--                <div class="flex w-5 justify-center"><img class="h-4" src="src/assets/backIcon.svg"></div>-->
  <!-- <h1 class="text-xl font-bold">Announcement Detail</h1> -->
  <!--                <div class="flex w-5 justify-center"><img class="h-4" src="src/assets/editIcon.svg"></div>-->
  <!-- </div> -->
  <!-- Content -->
  <!-- <div class="py-4 px-12 border"> -->
  <!-- <div class="flex flex-col gap-6 py-6"> -->

  <!-- </div> -->
  <!-- </div> -->
  <!-- </div>
  </div> -->
</template>
