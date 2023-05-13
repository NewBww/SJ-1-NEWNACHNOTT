<script setup>
import { ref, watchEffect } from 'vue'
import { useAnnouncementStore } from '@/stores/AnnouncementStore'
import { storeToRefs } from 'pinia'

const announcementStore = useAnnouncementStore()
const { page } = storeToRefs(announcementStore)

const props = defineProps({
  totalPages: {
    type: Number,
    default: 0,
  },
  first: {
    type: Boolean,
    default: true,
  },
  last: {
    type: Boolean,
    default: true,
  },
})

const pageArr = ref([])
const maxPage = ref(0)
const MAX_PAGE = 10
watchEffect(() => {
  if (props.totalPages < MAX_PAGE) {
    maxPage.value = props.totalPages
  } else {
    maxPage.value = 10
  }
  pageArr.value = [...Array(maxPage.value).keys()].map((i) => i + 1)
})

const clickPageHandler = (pageNumber) => {
  page.value = pageNumber - 1
}

const nextPage = (next) => {
  const lastIndex = pageArr.value.length - 1
  if (next) {
    if (page.value < props.totalPages - 1) {
      if (page.value + 1 === pageArr.value[lastIndex]) {
        pageArr.value.push(pageArr.value[lastIndex] + 1)
        pageArr.value.shift()
      }
      page.value++
    }
  } else {
    //previous
    if (page.value > 0) {
      if (page.value + 1 === pageArr.value[0]) {
        pageArr.value.pop()
        pageArr.value.unshift(page.value)
      }
      page.value--
    }
  }
}
</script>

<template>
  <div v-if="totalPages > 1" class="flex flex-row w-fit gap-4 py-4">
    <button
      class="ann-page-prev"
      :class="first ? 'bg-black' : 'bg-zinc-400'"
      :disabled="first"
      @click="nextPage(false)"
    >
      Prev
    </button>
    <div class="flex flex-row border border-black">
      <button
        class="h-full w-12 px-4 py-2 border-r border-black"
        :class="[
          'ann-page-' + index,
          pageNumber === page + 1 ? 'bg-black text-white' : 'hover:bg-zinc-400',
        ]"
        @click="clickPageHandler(pageNumber)"
        v-for="(pageNumber, index) in pageArr"
        :key="pageNumber"
      >
        {{ pageNumber }}
      </button>
    </div>
    <button
      class="ann-page-next"
      @click="nextPage(true)"
      :disabled="last"
      :class="last ? 'bg-black' : 'bg-zinc-400'"
    >
      Next
    </button>
  </div>
</template>
