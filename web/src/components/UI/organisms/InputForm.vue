<script setup>
import TitleInput from '@/components/UI/molecules/TitleInput.vue'
import PublishDate from '@/components/UI/molecules/PublishDate.vue'
import DescriptionInput from '@/components/UI/molecules/DescriptionInput.vue'
import DisplayCheckBox from '@/components/UI/molecules/DisplayCheckBox.vue'
import CategoryInput from '@/components/UI/molecules/CategoryInput.vue'
import CloseDate from '@/components/UI/molecules/CloseDate.vue'

// const newAnnouncement = {}
</script>

<template>
  <TitleInput />
  <CategoryInput />
  <DescriptionInput />
  <PublishDate />
  <CloseDate />
  <DisplayCheckBox />
</template>

<style scoped></style>
