<script setup>
import AnnouncementService from '@/services/announcementService'
import { onMounted, ref } from 'vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import DetailListStatic from '@/components/UI/molecules/DetailListStatic.vue'
import { useRoute } from 'vue-router'

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
      <div class="flex w-full justify-between items-center">
        <h1 class="text-xl font-bold">Announcement Detail</h1>
      </div>

      <div class="py-4 px-12 border">
        <div class="flex flex-col gap-4">
          <DetailListStatic
            attribute="Attribute Name"
            :detail="Deatiail Data"
          />
          <DetailListStatic
            attribute="Attribute Name"
            :detail="Deatiail Data"
          />
          <DetailListStatic
            attribute="Attribute Name"
            :detail="Deatiail Data"
          />
          <DetailListStatic
            attribute="Attribute Name"
            :detail="Deatiail Data"
          />
          <DetailListStatic
            attribute="Attribute Name"
            :detail="Deatiail Data"
          />
          <DetailListStatic
            attribute="Attribute Name"
            :detail="Deatiail Data"
          />
          <DetailListStatic
            attribute="Attribute Name"
            :detail="Deatiail Data"
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
