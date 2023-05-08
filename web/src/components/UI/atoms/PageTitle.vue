<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!--  <h1 class="font-semibold text-center text-4xl p-8">{{ title }}</h1>-->
  <h1 class="font-semibold flex flex-row text-4xl">{{ title }}</h1>
</template>
