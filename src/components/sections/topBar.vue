<template>
    <section class="w-full h-14 flex flex-row items-center p-1 bg-gradient-to-r from-orange-200/30 to-amber-200/30 text-orange-100 rounded-b-2xl justify-between px-2">
        <button class="bg-gradient-to-r from-orange-200 to-amber-200 text-orange-900 rounded-xl p-1 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-9">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

        </button>

        <!-- <h1 class="bg-black w-1/3 h-2/3 rounded-xl text-center flex flex-row items-center justify-center text-xl">CRP</h1> -->

        <!--  -->
        <SearchBoxMobile />

        <button class="bg-gradient-to-r from-orange-200 to-amber-200 text-orange-800 rounded-xl p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-9 rotate-12">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>

        </button>
    </section>
</template>

<script setup>
import SearchBoxMobile from '../piece/searchBoxMobile.vue';


</script>