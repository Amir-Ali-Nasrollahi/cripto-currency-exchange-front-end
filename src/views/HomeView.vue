<template>
    <section class="w-full h-full md:grid md:grid-cols-12 md:gap-2 flex flex-col text-orange-900 ">
        <div class="h-full lg:col-span-1 md:col-span-2 md:block hidden p-3">
            <NavBar />
        </div>
            
        <div class="h-full lg:col-span-7 md:col-span-10 p-3">
            <CenterBar />
        </div>

        <div class="h-full lg:block hidden lg:col-span-4 p-3">
            <RightBar />
        </div>

        <div class="md:hidden block w-full">
            <NavBar class="fixed"/>
        </div>
    </section>
</template>

<script setup>
import CenterBar from '@/components/sections/centerBar.vue';
import NavBar from '@/components/sections/navBar.vue';
import RightBar from '@/components/sections/rightBar.vue';


</script>