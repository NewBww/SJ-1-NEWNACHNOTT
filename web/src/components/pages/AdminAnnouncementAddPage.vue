<script setup>
import ContentSection from '@/components/UI/organisms/ContentSection.vue'

// import PageTitle from '@/components/UI/atoms/PageTitle.vue'

import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import IconArrowBack from '@/components/UI/atoms/IconArrowBack.vue'
// import { RouterLink } from 'vue-router'
import InputForm from '@/components/UI/organisms/InputForm.vue'
</script>

<template>
  <div class="h-full bg-[#F4F4F4]">
    <div class="bg-[#F4F4F4] max-w-[72rem] m-auto">
      <!--      <div class="flex flex-row items-center justify-center">-->
      <!--        <PageTitle title="Announcement Edit" />-->
      <!--      </div>-->
      <div class="grid grid-cols-1 pt-9">
        <div class="grid grid-cols-10">
          <div class="grid content-center">
            <RouterLink
              class="w-fit"
              :to="{ name: 'admin-announcement-listing' }"
            >
              <SingleButton
                class="ann-button border border-black rounded-full hover:bg-gray-200 active:bg-black active:text-white"
                text="Back"
              >
                <template #before-text-icon>
                  <IconArrowBack class="w-[22px]" />
                </template>
              </SingleButton>
            </RouterLink>
          </div>
          <div class="col-span-9">
            <div class="flex items-center gap-7 w-fit">
              <div class="text-4xl font-semibold tracking-wider">
                Announcement<br />Add
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-10 pt-10 justify-items-center">
          <div></div>
          <ContentSection class="grid col-span-8 w-full h-full content-center">
            <div class="ann-* flex flex-col w-full gap-6 h-full">
              <InputForm
                submit-text="Submit"
                cancel-text="Cancel"
                action="add"
              />
            </div>
          </ContentSection>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
