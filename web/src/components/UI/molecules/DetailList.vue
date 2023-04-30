<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useFormatTime } from '@/composables/date.js'
import AnnouncementService from '@/services/announcementService'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'

const route = useRoute()
const announcementService = new AnnouncementService()
const announcementsData = ref([])
onMounted(async () => {
  try {
    const data = await announcementService.getAnnouncementById(
      `${route.params.id}`
    )
    if (data !== undefined && data.length !== 0) {
      announcementsData.value = data
    }
    // console.log(announcementsData.value)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div>
    <h4>Title</h4>
    <p>
      {{ announcementsData.announcementTitle }}
    </p>
    <h4>Category</h4>
    <p>
      {{ announcementsData.announcementCategory }}
    </p>
    <h4>Description</h4>
    <p>
      {{ announcementsData.announcementDescription }}
    </p>
    <h4>Publish Date</h4>
    <p>
      {{ useFormatTime(announcementsData.publishDate) }}
    </p>
    <h4>Close Date</h4>
    <p>
      {{ useFormatTime(announcementsData.closeDate) }}
    </p>
    <h4>Display</h4>
    <p>
      {{ announcementsData.announcementDisplay }}
    </p>
  </div>
  <div>
    <RouterLink :to="{ name: 'home' }">
      <SingleButton text="Back" />
    </RouterLink>
  </div>
  <!-- </div> -->
</template>
