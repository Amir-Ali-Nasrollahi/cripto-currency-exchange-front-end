<script setup>
import WalletCard from '@/components/piece/walletCard.vue';
import NavBar from '@/components/sections/navBar.vue';
import RightBar from '@/components/sections/rightBar.vue';
import TopBar from '@/components/sections/topBar.vue';
</script>

<template>

    <section class="w-full h-full md:grid md:grid-cols-12 md:gap-2 flex flex-col text-orange-900 justify-between">

        <!-- make top bar -->
        <div class="lg:hidden block w-full fixed">
            <TopBar />
        </div>
        <!-- end make top bar -->

        <!-- navigation bar (Desktop) -->
        <div class="lg:h-full lg:col-span-1 lg:block hidden p-3">
            <NavBar :item="'wallet'" />
        </div>
        <!-- end make navigation bar(Desktop) -->

        <div class="lg:mb-0 mb-10 h-full lg:col-span-7 lg:col-start-2 lg:mt-0 mt-10 md:col-span-12 p-4 overflow-scroll">
            <WalletCard />
            <h1 class="mt-5 text-xl">trans-actions</h1>
            <div
                class="w-full h-16 rounded-2xl bg-gradient-to-r from-transparent to-[#f78b55] my-2 hover:cursor-pointer flex flex-row items-center justify-around">
                <h1 class="w-1/6">1- BTC</h1>
                <h1 class="w-1/6">21.32123</h1>
                <h1 class="w-1/6">1402/3/4</h1>
                <h1 class="w-1/6">1402/3/4</h1>
                <h1 class="w-1/6">Sell</h1>
            </div>
            <div
                class="w-full h-16 rounded-2xl bg-gradient-to-r to-[#aec464] my-2 hover:cursor-pointer flex flex-row items-center justify-around from-transparent ">
                <h1 class="w-1/6">2- TTR</h1>
                <h1 class="w-1/6">873.3</h1>
                <h1 class="w-1/6">1402/3/4</h1>
                <h1 class="w-1/6">1402/3/4</h1>
                <h1 class="w-1/6">Buy</h1>
            </div>

            <div
                class="w-full h-16 rounded-2xl bg-gradient-to-r to-[#aec464] my-2 hover:cursor-pointer flex flex-row items-center justify-around from-transparent">
                <h1 class="w-1/6">2- TTR</h1>
                <h1 class="w-1/6">873.3</h1>
                <h1 class="w-1/6">1402/3/4</h1>
                <h1 class="w-1/6">1402/3/4</h1>
                <h1 class="w-1/6">Buy</h1>
            </div>
            <div
                class="w-full h-16 rounded-2xl bg-gradient-to-r to-[#aec464] my-2 hover:cursor-pointer flex flex-row items-center justify-around from-transparent">
                <h1 class="w-1/6">2- TTR</h1>
                <h1 class="w-1/6">873.3</h1>
                <h1 class="w-1/6">1402/3/4</h1>
                <h1 class="w-1/6">1402/3/4</h1>
                <h1 class="w-1/6">Buy</h1>
            </div>
            <div
                class="w-full h-16 rounded-2xl bg-gradient-to-r from-transparent to-[#f78b55] my-2 hover:cursor-pointer flex flex-row items-center justify-around">
                <h1 class="w-1/6">1- BTC</h1>
                <h1 class="w-1/6">21.32123</h1>
                <h1 class="w-1/6">1402/3/4</h1>
                <h1 class="w-1/6">1402/3/4</h1>
                <h1 class="w-1/6">Sell</h1>
            </div>
            <div
                class="w-full h-16 rounded-2xl bg-gradient-to-r from-transparent to-[#f78b55] my-2 hover:cursor-pointer flex flex-row items-center justify-around">
                <h1 class="w-1/6">1- BTC</h1>
                <h1 class="w-1/6">21.32123</h1>
                <h1 class="w-1/6">1402/3/4</h1>
                <h1 class="w-1/6">1402/3/4</h1>
                <h1 class="w-1/6">Sell</h1>
            </div>

        </div>


        <!-- right bar -->
        <div class="h-full lg:block hidden lg:col-span-4 p-3">
            <right-bar>
                <div
                    class="flex flex-row items-center w-full h-full justify-center text-3xl text-orange-900/50 capitalize">
                    nothing to show :/</div>
            </right-bar>
        </div>
        <!-- end make righ bar -->

        <!-- navigation bar for mobile -->
        <div class="lg:hidden top-full -translate-y-full fixed w-full h-fit">
            <NavBar class="mb-1" :item="'wallet'" />
        </div>
        <!--  navigation for mobile <end>  -->


    </section>
</template>