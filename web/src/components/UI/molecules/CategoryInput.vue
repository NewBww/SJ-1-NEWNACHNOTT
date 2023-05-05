<script setup>
import Header2 from '@/components/UI/atoms/Header2.vue'
</script>

<template>
  <div class="flex flex-col gap-2">
    <Header2 header="Category" />
    <select
      class="px-2 py-1 rounded text-base w-fit bg-purple-100 text-purple-300"
    >
      <option>Select Catagory</option>
    </select>
  </div>
</template>

<style scoped></style>
