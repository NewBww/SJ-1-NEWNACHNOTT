<script setup>
defineProps({
  attribute: {
    type: String,
    default: 'attribute',
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
      {{ attribute }}
    </h2>

    <p class="text-base pl-4">
      {{ detail }}
    </p>
  </div>
</template>

<style scoped></style>
