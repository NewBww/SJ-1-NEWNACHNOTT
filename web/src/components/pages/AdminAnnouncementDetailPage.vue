<script setup>
import { RouterLink } from 'vue-router'
import DetailList from '@/components/UI/molecules/DetailList.vue'
import ContentSection from '../UI/organisms/ContentSection.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import IconArrowBack from '@/components/UI/atoms/IconArrowBack.vue'
import IconPencilEdit from '@/components/UI/atoms/IconPencilEdit.vue'
</script>

<template>
  <div class="h-full">
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
        <div class="text-4xl font-semibold tracking-wider">
          Announcement<br />Detail
        </div>
      </div>

      <ContentSection class="flex flex-row items-center w-full pt-10">
        <div
          class="bg-[#F9EBFF] border border-black w-4/5 pb-5 pt-0 pl-16 pr-12 rounded-3xl"
        >
          <RouterLink
            class="flex flex-row justify-end h-11"
            :to="{ name: 'admin-announcement-edit' }"
          >
            <SingleButton
              class="ann-button transition ease-in-out gap-2 bg-white rounded-b-xl border-b border-r border-l border-black solidBoxShadowBtnHover hover:border-b-2 hover:border-r-2 hover:border-l-2 active:border-b-2 active:border-r-2 active:border-l-2 hover:-translate-x-2 hover:active:translate-x-0"
              text="Edit"
            >
              <template #before-text-icon>
                <IconPencilEdit />
              </template>
            </SingleButton>
          </RouterLink>
          <!--        detail-->
          <div class="flex flex-col w-full gap-6">
            <DetailList />
          </div>
        </div>
      </ContentSection>
    </div>
  </div>
</template>

<style scoped>
.solidBoxShadowBtnHover:hover {
  box-shadow: 0.5rem 0 0 0;
}
.solidBoxShadowBtnHover:active {
  box-shadow: inset 0.5rem 0 0 0;
}
</style>
