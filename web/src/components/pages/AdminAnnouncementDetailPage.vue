<script setup>
import DetailList from '@/components/UI/molecules/DetailList.vue'
import PageTitle from '../UI/atoms/PageTitle.vue'
import ContentSection from '../UI/organisms/ContentSection.vue'
import { RouterLink } from 'vue-router'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import IconArrowBack from '@/components/UI/atoms/IconArrowBack.vue'
import IconPencilEdit from '@/components/UI/atoms/IconPencilEdit.vue'
</script>

<template>
  <div class="h-screen bg-[#f2f2f2]">
    <div class="h-full max-w-[72rem] w-full m-auto bg-white flex flex-col">
      <div class="flex flex-row items-center justify-between">
        <RouterLink :to="{ name: 'admin-announcement-listing' }">
          <SingleButton class="ann-button" text="Back">
            <template #before-text-icon>
              <IconArrowBack />
            </template>
          </SingleButton>
        </RouterLink>
        <PageTitle title="Announcement Detail" />
        <RouterLink :to="{ name: 'admin-announcement-add' }">
          <SingleButton class="ann-button gap-1" text="Edit">
            <template #before-text-icon>
              <IconPencilEdit />
            </template>
          </SingleButton>
        </RouterLink>
      </div>

      <ContentSection class="flex flex-col w-full px-16 items-center">
        <div class="flex flex-col w-full gap-6">
          <DetailList />
        </div>
      </ContentSection>
    </div>
  </div>
</template>
