<script setup>
import Header2 from '@/components/UI/atoms/Header2.vue'

defineProps({
  header: String,
})
</script>

<template>
  <div
    class="flex flex-row w-fit border border-black rounded-xl overflow-hidden"
  >
    <Header2
      class="flex flex-row bg-white justify-center w-32 rounded-l-xl"
      :header="header"
    />
    <div class="p-3 bg-white w-fit"><slot></slot></div>
  </div>
</template>
