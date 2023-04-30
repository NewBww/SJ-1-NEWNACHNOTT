<script setup>
import DetailList from '@/components/UI/molecules/DetailList.vue'
import PageTitle from '../UI/atoms/PageTitle.vue'
import ContentSection from '../UI/organisms/ContentSection.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="h-screen bg-[#f2f2f2]">
    <div class="h-full max-w-[72rem] w-full m-auto bg-white flex flex-col">
      <div class="flex flex-row">
        div
        <PageTitle title="Announcement Detail" />
      </div>

      <ContentSection>
        <div>
          <DetailList />
        </div>
        <RouterLink :to="{ name: 'home' }">
          <SingleButton text="Back" />
        </RouterLink>
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
