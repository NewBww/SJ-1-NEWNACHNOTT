<script setup>
import { ref } from 'vue'

const timeZone = ref('')
timeZone.value = Intl.DateTimeFormat().resolvedOptions().timeZone
</script>

<template>
  <div>
    <div class="flex items-center">
      <h3 class="flex flex-row items-center text-lg gap-2">
        <span class="underline underline-offset-4 tracking-wider"
          >Timezone</span
        >:
        <span
          class="px-3 py-1 border border-black bg-gradient-to-r from-[#FFE28A] to-[#F0E7FE] rounded-2xl tracking-wider font-mono"
          >{{ timeZone }}</span
        >
      </h3>
    </div>
  </div>
</template>
