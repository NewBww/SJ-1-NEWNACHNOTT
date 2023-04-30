<script setup>
import IconArrowBack from '@/components/UI/atoms/IconArrowBack.vue'

defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button
    class="flex flex-row px-4 items-center text-center w-fit py-1 text-base hover:text-zinc-600"
  >
    <IconArrowBack />
    {{ text }}
  </button>
</template>

<style scoped></style>
