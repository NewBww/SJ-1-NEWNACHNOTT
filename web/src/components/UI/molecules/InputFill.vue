<script setup>
import Header2 from '@/components/UI/atoms/Header2.vue'

defineProps({
  header: String,
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <Header2 :header="header" />
    <slot></slot>
  </div>
</template>

<style scoped></style>
