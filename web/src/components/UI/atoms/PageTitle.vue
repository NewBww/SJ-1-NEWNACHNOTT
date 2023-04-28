<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h1 class="font-semibold text-center text-4xl p-8">{{ title }}</h1>
</template>
