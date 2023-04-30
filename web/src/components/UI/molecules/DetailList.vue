<script setup>
const props = defineProps({
  attribute: {
    type: String,
    default: 'attribute',
  },
  detail: {
    type: String,
    default: 'detail',
  },
})

const atbHeader = () => {
  let atb = props.attribute
  if (props.attribute.includes('announcement')) {
    return atb.substring(12)
  } else if (props.attribute.includes('Date')) {
    return atb
      .replace(atb.charAt(0), atb.charAt(0).toUpperCase())
      .replace('D', ' D')
  }
  return atb
}
</script>

<template>
  <div>
    
    <h2 class="text-lg font-semibold" v-if="!attribute.includes('id')">
      {{ atbHeader() }}
    </h2>
    <!--        <p class="text-base" v-if="attribute.includes('id')"></p>-->
    <!--        <p class="text-base" v-else-if="attribute.includes('Category')">{{detail.categoryName}}</p>-->
    <!--        <p class="text-base" v-else-if="props.detail===null">-</p>-->
    <!--        <p class="text-base" v-else>{{detail}}</p>-->
    <p class="text-base" v-if="attribute.includes('id')"></p>
    <p class="text-base" v-else-if="attribute.includes('Category')">
      {{ detail.categoryName }}
    </p>
    <p class="text-base" v-else-if="props.detail === null">-</p>
    <p class="text-base" v-else>{{ detail }}</p>
  </div>
</template>
