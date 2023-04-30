<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button
    class="text-center w-fit py-1 px-2 border rounded text-base hover:text-grey"
  >
    {{ text }}
  </button>
</template>

<style scoped></style>
