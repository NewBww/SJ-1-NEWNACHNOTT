<script setup>
defineProps({
  heading: {
    type: String,
    default: 'heading',
  },
  detail: {
    type: String,
    default: '-',
  },
})
</script>
<template>
  <div class="flex flex-col gap-1 w-fit">
    <h2 class="text-lg font-semibold">
      {{ heading }}
    </h2>
    <p class="text-base pl-4 text-justify">
      {{ detail }}
    </p>
  </div>
</template>
