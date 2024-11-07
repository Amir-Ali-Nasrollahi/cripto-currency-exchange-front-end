<template>
    <section
        class="w-full h-full bg-gradient-to-tr from-orange-400/80 to-amber-400/80 p-2 rounded-2xl shadow-xl flex flex-col items-center justify-between">

        <!--  -->
        <div class="flex flex-row items-center justify-between w-full p-2">
            <SearchBox />
            
            <ContactUsIcon />

        </div>

        <!-- make toggle for transfer card -->
        <ToggleTransfer />

        <!-- make transfer card -->
        <TradeCard />


    </section>
</template>

<script setup>
import ContactUsIcon from '../piece/contactUsIcon.vue';
import SearchBox from '../piece/searchBox.vue';
import ToggleTransfer from '../piece/toggleTransfer.vue';
import TradeCard from '../piece/tradeCard.vue';


</script>