<script setup>
import { ref } from 'vue'

const timeZone = ref('')
timeZone.value = Intl.DateTimeFormat().resolvedOptions().timeZone
</script>

<template>
  <div>
      <div class="flex items-center">
        <h3 class="text-base">Date/Time shown in Timezone : {{ timeZone }}</h3>
      </div>
  </div>
</template>
