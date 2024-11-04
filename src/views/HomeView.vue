<template>
    <section class="w-full h-full grid grid-cols-12 gap-2 text-orange-900 ">
        <div class="h-full p-3">
            <NavBar />
        </div>
        
        <div class="h-full col-span-7 p-3">
            <CenterBar />
        </div>

        <div class="h-full col-span-4 p-3">
            <RightBar />
        </div>
    </section>
</template>

<script setup>
import CenterBar from '@/components/sections/centerBar.vue';
import NavBar from '@/components/sections/navBar.vue';
import RightBar from '@/components/sections/rightBar.vue';


</script>