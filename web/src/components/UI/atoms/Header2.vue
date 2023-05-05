<script setup>
defineProps({
  header: {
    type: String,
    default: 'heading',
  },
})
</script>

<template>
  <h2 class="text-lg font-semibold">
    {{ header }}
  </h2>
</template>

<style scoped></style>
