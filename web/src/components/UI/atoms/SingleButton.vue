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
    class="text-center py-1 px-2 border rounded bg-gray-400 text-base hover:bg-gray-300"
  >
    {{ text }}
  </button>
</template>
