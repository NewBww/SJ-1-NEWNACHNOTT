<script setup>
import Header2 from '@/components/UI/atoms/Header2.vue'
</script>

<template>
  <div class="flex flex-col gap-2">
    <Header2 header="Publish Date" />
    <div class="flex flex-row items-center gap-4">
      <input
        class="px-2 py-1 rounded bg-purple-100 placeholder-purple-300 text-base w-28 text-center"
        type="text"
        placeholder="select date"
        onblur="type='text'"
        onfocus="type='date'"
      />
      <input
        class="px-2 py-1 rounded bg-purple-100 placeholder-purple-300 text-base w-28 text-center"
        type="text"
        placeholder="select time"
        onblur="type='text'"
        onfocus="type='time'"
      />
    </div>
  </div>
</template>

<style scoped></style>
