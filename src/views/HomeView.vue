<template>
    <section class="w-full h-full md:grid md:grid-cols-12 md:gap-2 flex flex-col text-orange-900 justify-between">
        <!-- make top bar -->
        <div class="lg:hidden block w-full fixed">
            <TopBar />
        </div>
        <!-- end make top bar -->

        <!-- navigation bar (Desktop) -->
        <div class="lg:h-full lg:col-span-1 lg:block hidden p-3">
            <NavBar />

        </div>
        <!-- end make navigation bar(Desktop) -->

        <!-- centers items -->
        <div class="h-full lg:col-span-7 lg:mt-0 mt-10 md:col-span-12 p-3">
            <CenterBar />
        </div>
        <!-- end make centers items -->

        <!-- right bar -->
        <div class="h-full lg:block hidden lg:col-span-4 p-3">
            <RightBar />
        </div>
        <!-- end make righ bar -->

        <!-- navigation bar for mobile -->
        <div class="lg:hidden top-full -translate-y-full fixed w-full h-fit">
            <NavBar class="mb-1" />
        <!--  navigation for mobile <end>  -->
        </div>
    </section>
</template>

<script setup>
import CenterBar from '@/components/sections/centerBar.vue';
import NavBar from '@/components/sections/navBar.vue';
import RightBar from '@/components/sections/rightBar.vue';
import TopBar from '@/components/sections/topBar.vue';


</script>