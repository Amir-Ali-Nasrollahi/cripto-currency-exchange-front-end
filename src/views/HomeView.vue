<template>
    <section class="w-full h-full md:grid md:grid-cols-12 md:gap-2 flex flex-col text-orange-900 justify-between">
        <!-- make top bar -->
        <div class="lg:hidden block w-full fixed">
            <TopBar />
        </div>
        <!-- end make top bar -->

        <!-- navigation bar (Desktop) -->
        <div class="lg:h-full lg:col-span-1 lg:block hidden p-3">
            <NavBar :item="'home'" />
        </div>
        <!-- end make navigation bar(Desktop) -->

        <!-- centers items -->
        <div class="h-full lg:col-span-7 lg:mt-0 mt-10 md:col-span-12 p-3">
            <CenterBar />
        </div>
        <!-- end make centers items -->

        <!-- right bar -->
        <div class="h-full lg:block hidden lg:col-span-4 p-3">
            <right-bar>

                <!--  -->
                <div class="flex flex-row items-center justify-between w-full p-2">
                    <SearchBox />

                    <ContactUsIcon />

                </div>

                <!-- make toggle for transfer card -->
                <ToggleTransfer />

                <!-- make transfer card -->
                <TradeCard />
            </right-bar>
        </div>
        <!-- end make righ bar -->

        <!-- navigation bar for mobile -->
        <div class="lg:hidden top-full -translate-y-full fixed w-full h-fit">
            <NavBar class="mb-1" :item="'home'" />
        </div>
        <!--  navigation for mobile <end>  -->
    </section>
</template>

<script setup>
import ContactUsIcon from '@/components/piece/contactUsIcon.vue';
import SearchBox from '@/components/piece/searchBox.vue';
import ToggleTransfer from '@/components/piece/toggleTransfer.vue';
import TradeCard from '@/components/piece/tradeCard.vue';
import CenterBar from '@/components/sections/centerBar.vue';
import NavBar from '@/components/sections/navBar.vue';
import RightBar from '@/components/sections/rightBar.vue';
import TopBar from '@/components/sections/topBar.vue';


</script>