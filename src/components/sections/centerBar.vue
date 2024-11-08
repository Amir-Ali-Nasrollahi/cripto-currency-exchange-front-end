<template>
    <section class="w-full h-full md:grid md:grid-cols-4 md:grid-rows-4 flex flex-col lg:grid-cols-2 lg:grid-rows-2 md:gap-3 ">
        <WalletCard  class="lg:col-span-1 col-span-2 row-span-1" />

        <WatchList class="lg:col-span-1 md:row-span-1 md:col-span-2" />

        <div class="w-full lg:col-span-2 md:col-span-4 lg:row-span-1 md:row-span-2 row-4">
            <!-- <div class="w-full flex flex-row items-center justify-center h-full text-3xl text-orange-900/30">
                we make a chart in this place
            </div> -->

            <MainChart />
        </div>
    </section>
</template>

<script setup>
import MainChart from '../piece/mainChart.vue';
import WalletCard from '../piece/walletCard.vue';
import WatchList from '../piece/watchList.vue';


</script>