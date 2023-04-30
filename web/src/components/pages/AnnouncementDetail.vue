<script setup>
import AnnouncementService from '@/services/announcementService'
import { onMounted, ref } from 'vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
<<<<<<< HEAD
import DetailListStatic from '@/components/UI/molecules/DetailListStatic.vue'
import { useRoute } from 'vue-router'
=======
import DetailList from '@/components/UI/molecules/DetailList.vue'
import { useRoute } from "vue-router";
>>>>>>> origin/dev

const announcementService = new AnnouncementService()
const announcementsData = ref([])

onMounted(async () => {
  try {
    announcementsData.value = await announcementService.getAnnouncementById(
      useRoute().params.id
    )
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="flex flex-col gap-4 w-6/12 mb-36 p-8">
      <!-- Title -->
      <div class="flex w-full justify-between items-center">
        <h1 class="text-xl font-bold">Announcement Detail</h1>
      </div>

      <!-- Content -->
      <div class="py-4 px-12 border">
        <div class="flex flex-col gap-6 py-6">
          <DetailListStatic
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
          />
        </div>
      </div>

      <RouterLink :to="{ name: 'home' }">
        <SingleButton text="Back" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
