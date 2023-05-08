<script setup>
import Header2 from '@/components/UI/atoms/Header2.vue'

defineProps({
  header: String,
})
</script>

<template>
  <div
    class="flex flex-col bg-white w-full pb-2 border border-black rounded-xl"
  >
    <Header2
      class="w-fit px-4 border-r border-black rounded-t-lg"
      :header="header"
    />
    <slot></slot>
  </div>
</template>
