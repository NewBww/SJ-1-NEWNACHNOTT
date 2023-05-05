<script setup>
import Header2 from '@/components/UI/atoms/Header2.vue'
</script>

<template>
  <div class="flex flex-col gap-2">
    <Header2 header="Title" />
    <input
      class="px-2 py-1 rounded bg-purple-100 placeholder-purple-300 text-base w-6/12"
      v-model="text"
      placeholder="something"
    />
  </div>
</template>

<style scoped></style>
