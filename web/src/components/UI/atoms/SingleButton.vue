<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <button
    class="flex flex-row items-center justify-center py-2 px-3 text-base tracking-wider"
    :disabled="disabled"
  >
    <slot name="before-text-icon" />
    <span>{{ text }}</span>
    <slot name="after-text-icon" />
  </button>
</template>
