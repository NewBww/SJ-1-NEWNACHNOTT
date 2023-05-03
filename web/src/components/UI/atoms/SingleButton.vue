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
    class="text-center items-center w-fit flex flex-row py-2 px-4 text-base rounded"
  >
    <slot name="before-text-icon" />
    {{ text }}
    <slot name="after-text-icon" />
  </button>
</template>
