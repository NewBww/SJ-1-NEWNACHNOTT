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
    class="text-center items-center justify-center w-fit py-2 px-3 text-base tracking-wider"
    :disabled="disabled"
  >
    <slot name="before-text-icon" />
    {{ text }}
    <slot name="after-text-icon" />
  </button>
</template>
