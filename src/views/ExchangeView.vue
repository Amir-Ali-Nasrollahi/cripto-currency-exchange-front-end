<template>
    <section class="w-full h-full md:grid md:grid-cols-12 md:gap-2 flex flex-col text-orange-900 justify-between">

        <!-- make top bar -->
        <div class="lg:hidden block w-full fixed">
            <TopBar />
        </div>
        <!-- end make top bar -->

        <!-- navigation bar (Desktop) -->
        <div class="lg:h-full lg:col-span-1 lg:block hidden p-3">
            <NavBar :item="'exchange'" />
        </div>
        <!-- end make navigation bar(Desktop) -->

        <!-- navigation bar for mobile -->
        <div class="lg:hidden top-full -translate-y-full fixed w-full h-fit">
            <NavBar class="mb-1" :item="'exchange'" />
        </div>
        <!--  navigation for mobile <end>  -->


    </section>
</template>

<script setup>

import NavBar from '@/components/sections/navBar.vue';
import TopBar from '@/components/sections/topBar.vue';


</script>