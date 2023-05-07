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
      <!--      <div class="pt-4 text-xl">SAS</div>-->
      <div class="text-4xl font-semibold py-8 tracking-wider">
        SIT<br />Announcement<br />
        <div class="flex flex-row items-center gap-3">
          System<span
            class="text-base px-4 mt-2 border border-black rounded-full"
            >SAS</span
          >
        </div>
      </div>
      <ContentSection>
        <div
          class="h-full w-full h-[50px] justify-between items-center flex flex-row"
        >
          <TimeZone />
          <router-link :to="{ name: 'admin-announcement-add' }">
            <SingleButton
              text="Add Announcement"
              class="ann-button transition bg-white border-black border rounded-md solidBoxShadowBtnHover hover:border-2 hover:-translate-x-1 ease-in-out active:bg-[#F4F4F4]"
            />
          </router-link>
        </div>

        <AnnouncementList class="" />
      </ContentSection>
    </div>
  </div>
</template>

<style scoped>
.solidBoxShadowBtnHover:hover {
  box-shadow: 0.25rem 0.25rem 0rem 0rem;
}
</style>
