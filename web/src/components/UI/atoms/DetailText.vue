<script setup>
defineProps({
  heading: {
    type: String,
    default: 'heading',
  },
  detail: {
    type: String,
    default: 'detail',
  },
})
</script>
<template>
  <div>
    <h2 class="text-lg font-semibold">
      {{ heading }}
    </h2>
    <p class="text-base pl-4">
      {{ detail }}
    </p>
  </div>
</template>
