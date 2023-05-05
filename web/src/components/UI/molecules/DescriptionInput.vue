<script setup>
import Header2 from '@/components/UI/atoms/Header2.vue'
</script>

<template>
  <div class="flex flex-col gap-2 h-2/5">
    <Header2 header="Descripiton" />
    <textarea
      class="h-full px-2 py-1 rounded bg-purple-100 placeholder-purple-300 text-base"
      placeholder="something"
    ></textarea>
  </div>
</template>

<style scoped></style>
