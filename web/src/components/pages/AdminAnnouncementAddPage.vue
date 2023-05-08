<script setup>
import ContentSection from '@/components/UI/organisms/ContentSection.vue'

import PageTitle from '@/components/UI/atoms/PageTitle.vue'
import InputForm from '@/components/UI/organisms/InputForm.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import IconArrowBack from '@/components/UI/atoms/IconArrowBack.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="h-full bg-[#F4F4F4]">
    <div class="h-fit bg-[#F4F4F4]">
      <div class="max-w-[72rem] w-full m-auto">
        <!--      header-->
        <div class="flex flex-row items-center pt-12 gap-7">
          <RouterLink :to="{ name: 'admin-announcement-listing' }">
            <SingleButton
              class="ann-button border border-black rounded-full gap-1 hover:bg-gray-200 active:bg-black active:text-white"
              text="Back"
            >
              <template #before-text-icon>
                <IconArrowBack />
              </template>
            </SingleButton>
          </RouterLink>

          <!--        <PageTitle title="Announcement Detail" />-->
          <div class="text-4xl font-semibold tracking-wider">
            Announcement<br />Add
          </div>
        </div>

        <ContentSection class="flex flex-row items-center w-full pt-10">
          <div class="w-4/5 pb-5 px-12 rounded-3xl">
            <div class="ann-* flex flex-col w-full gap-6 h-full">
              <InputForm
                submit-text="Submit"
                cancel-text="Cancel"
                action="add"
              />
            </div>
          </div>
          <!--            class="flex flex-col w-full h-full px-16 items-center"-->
          <!--            <div class="flex flex-row items-center justify-center">-->
          <!--              <PageTitle title="Announcement Add" />-->
          <!--            </div>-->
        </ContentSection>
      </div>
    </div>
  </div>
</template>
