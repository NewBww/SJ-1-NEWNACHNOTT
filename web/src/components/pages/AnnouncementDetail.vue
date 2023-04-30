<script setup>
// import { onMounted, ref } from 'vue'
// import { useRoute } from 'vue-router'
// import { useFormatTime } from '@/composables/date.js'
// import AnnouncementService from '@/services/announcementService'
// import SingleButton from '@/components/UI/atoms/SingleButton.vue'

import DetailList from '@/components/UI/molecules/DetailList.vue'
import PageTitle from '../UI/atoms/PageTitle.vue';
import ContentSection from '../UI/organisms/ContentSection.vue';

// const announcementService = new AnnouncementService()
// const announcementsData = ref([])

// onMounted(async () => {
//   try {
//     announcementsData.value = await announcementService.getAnnouncementById(
//       useRoute().params.id
//     )
//   } catch (error) {
//       console.log(error)
//   }
// })
</script>

<template>
  <PageTitle title="Announcement Detail"/>
  <ContentSection>
    <div>
      <DetailList/>
    </div>
  </ContentSection>
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
          <!-- <DetailListStatic
            attribute="Title"
            :detail="`${announcementsData.announcementTitle}`"
          />
          <DetailListStatic
            attribute="Category"
            v-for="category of announcementsData.announcementCategory"
            :key="category.id"
            :detail="`${category}`"
          />
          <DetailListStatic
            attribute="Description"
            :detail="`${announcementsData.announcementDescription}`"
          />
          <DetailListStatic
            attribute="Publish Date"
            :detail="`${announcementsData.publishDate}`"
          />
          <DetailListStatic
            attribute="Close Date"
            :detail="`${announcementsData.closeDate}`"
          />
          <DetailListStatic
            attribute="Display"
            :detail="`${announcementsData.announcementDisplay}`"
          /> -->
        <!-- </div> -->
      <!-- </div> -->
    <!-- </div>
  </div> -->
</template>

