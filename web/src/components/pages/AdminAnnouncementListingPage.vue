<script setup>
import { RouterLink } from 'vue-router'
import ContentSection from '@/components/UI/organisms/ContentSection.vue'
import TimeZone from '@/components/UI/atoms/TimeZone.vue'
import SingleButton from '@/components/UI/atoms/SingleButton.vue'
import AnnouncementList from '@/components/UI/organisms/AnnouncementList.vue'
</script>

<template>
  <div class="max-w-[80rem] w-full m-auto flex flex-col">
    <div class="text-4xl font-semibold py-8 tracking-wider">
      SIT<br />Announcement<br />
      <div class="flex flex-row items-center gap-3">
        System<span
          class="text-base w-fit px-4 mt-2 border border-black rounded-full"
          >SAS</span
        >
      </div>
    </div>
    <ContentSection>
      <div class="w-full h-12 justify-between items-center flex flex-row">
        <TimeZone />
        <RouterLink
          class="w-fit no-underline text-black"
          :to="{ name: 'admin-announcement-add' }"
        >
          <SingleButton
            text="Add Announcement"
            class="ann-button transition bg-white border-black border rounded-md solidBoxShadowBtnHover hover:border-2 hover:-translate-x-1 hover:-translate-y-1 hover:active:translate-x-0 hover:active:translate-y-0 ease-in-out active:bg-[#F4F4F4]"
          />
        </RouterLink>
      </div>
      <AnnouncementList />
    </ContentSection>
  </div>
</template>

<style scoped>
.solidBoxShadowBtnHover:hover {
  box-shadow: 0.1rem 0.1rem, 0.2rem 0.2rem, 0.25rem 0.25rem;
}
.solidBoxShadowBtnHover:active {
  box-shadow: inset 0.1rem 0.1rem, inset 0.2rem 0.2rem, inset 0.25rem 0.25rem;
}
.box {
  width: 300px;
  margin: 50px auto;
  height: 100px;
  background: red;
  box-shadow: -1px 0px 0px #000, -0px 1px 0px #000, -2px 1px 0px #000,
    -1px 2px 0px #000, -3px 2px 0px #000, -2px 3px 0px #000, -4px 3px 0px #000,
    -3px 4px 0px #000, -5px 4px 0px #000, -4px 5px 0px #000, -6px 5px 0px #000,
    -5px 6px 0px #000, -7px 6px 0px #000, -6px 7px 0px #000, -8px 7px 0px #000,
    -7px 8px 0px #000, -9px 8px 0px #000, -8px 9px 0px #000, -10px 9px 0px #000,
    -9px 10px 0px #000, -11px 10px 0px #000, -10px 11px 0px #000,
    -12px 11px 0px #000, -11px 12px 0px #000, -13px 12px 0px #000,
    -12px 13px 0px #000, -14px 13px 0px #000, -13px 14px 0px #000,
    -15px 14px 0px #000, -14px 15px 0px #000, -16px 15px 0px #000,
    -15px 16px 0px #000, -17px 16px 0px #000, -16px 17px 0px #000,
    -18px 17px 0px #000, -17px 18px 0px #000, -19px 18px 0px #000,
    -18px 19px 0px #000, -20px 19px 0px #000, -19px 20px 0px #000,
    -21px 20px 0px #000, -20px 21px 0px #000, -22px 21px 0px #000,
    -21px 22px 0px #000, -23px 22px 0px #000, -22px 23px 0px #000,
    -24px 23px 0px #000, -23px 24px 0px #000, -25px 24px 0px #000,
    -24px 25px 0px #000, -26px 25px 0px #000, -25px 26px 0px #000,
    -27px 26px 0px #000, -26px 27px 0px #000, -28px 27px 0px #000,
    -27px 28px 0px #000, -29px 28px 0px #000, -28px 29px 0px #000,
    -30px 29px 0px #000, -29px 30px 0px #000;
}
</style>
