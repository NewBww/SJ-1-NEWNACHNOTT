<script setup>
import Header2 from '@/components/UI/atoms/Header2.vue'

defineProps({
  header: String,
})
</script>

<template>
  <div
    class="w-full h-fit grid grid-cols-[16rem_1fr] justify-start border border-black rounded-xl overflow-hidden"
  >
    <Header2 class="bg-white justify-center rounded-l-xl" :header="header" />
    <div class="p-3 bg-white w-full h-fit overflow-x-auto">
      <slot />
    </div>
  </div>
</template>
