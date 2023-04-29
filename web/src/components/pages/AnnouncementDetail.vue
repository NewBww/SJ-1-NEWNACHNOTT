<script setup>


import AnnouncementService from "@/services/announcementService";
import { onMounted, ref} from "vue";
import SingleButton from "@/components/UI/atoms/SingleButton.vue";
import DetailList from "@/components/UI/molecules/DetailList.vue";

const announcementService = new AnnouncementService()

const announcementsData = ref([])
const ancmAll = ref([])

onMounted(async () => {
    announcementsData.value = await announcementService.getAnnouncementById(1)
    ancmAll.value = await announcementService.getAllAnnouncements()
})

console.log( announcementsData)
console.log( ancmAll)
</script>

<template>
    <div class="w-screen h-screen flex justify-center items-center">

        <div class="flex flex-col gap-4 w-6/12 mb-36 p-8">
            <div class="flex w-full justify-between items-center">
                <!--                <div class="flex w-5 justify-center"><img class="h-4" src="src/assets/backIcon.svg"></div>-->
                <h1 class="text-xl font-bold">Announcement Detail</h1>
                <!--                <div class="flex w-5 justify-center"><img class="h-4" src="src/assets/editIcon.svg"></div>-->
            </div>

            <div class="py-4 px-12 border">
                <div class="flex flex-col gap-4" >
<!--                    {{ announcementsData}}-->
                    <DetailList v-for="(ancm,key) of announcementsData" :attribute="key" :detail="ancm"/>
                </div>
            </div>

            <div><SingleButton text="Back"/></div>



        </div>



    </div>

</template>

<style scoped></style>
