<script setup>
defineProps({
  first: {
    type: String,
    required: true,
  },
  second: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <!--  <h1 class="font-semibold text-center text-4xl p-8">{{ title }}</h1>-->
  <h1 class="font-semibold tracking-wider text-4xl">
    {{ first }} <br />
    {{ second }}
  </h1>
</template>
