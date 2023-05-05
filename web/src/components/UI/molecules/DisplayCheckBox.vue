<script setup>
import Header2 from '@/components/UI/atoms/Header2.vue'
</script>

<template>
  <div class="flex flex-col gap-2">
    <Header2 header="Display" />
    <div class="flex flex-row items-center gap-4">
      <input
        class="px-2 py-1 rounded bg-purple-100 placeholder-purple-300 text-base text-center"
        type="checkbox"
      />
      <label>Show announcement</label>
    </div>
  </div>
</template>

<style scoped></style>
