<script setup>
import ContentSection from '@/components/UI/organisms/ContentSection.vue'
import PageTitle from '@/components/UI/atoms/PageTitle.vue'
import TimeZone from '@/components/UI/atoms/TimeZone.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import AnnouncementList from '@/components/UI/organisms/AnnouncementList.vue'
</script>

<template>
  <div class="h-screen bg-[#F4F4F4]">
    <div class="h-full max-w-[80rem] w-full m-auto flex flex-col">
      <!--      <PageTitle class="py-8" title="SIT Announcement System" />-->
      <div class="text-4xl font-semibold py-8 tracking-wider">
        SIT<br />Announcement<br />System
      </div>
      <ContentSection>
        <div class="h-fit w-full justify-between items-center flex flex-row">
          <TimeZone />
          <router-link :to="{ name: 'admin-announcement-add' }">
            <SingleButton
              text="Add Announcement"
              class="ann-button solidBoxShadown bg-white border-black border rounded-lg hover:bg-gray-300"
            />
          </router-link>
        </div>

        <AnnouncementList class="" />
      </ContentSection>
    </div>
  </div>
</template>

<style scoped>
.solidBoxShadown {
  box-shadow: 5px 5px 0px 0px;
}
</style>
