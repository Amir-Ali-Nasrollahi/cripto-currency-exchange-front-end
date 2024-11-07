<template>
    <div
        class="relative flex flex-row items-center justify-between bg-gradient-to-br from-orange-100 to-amber-100 w-2/3 h-16 mt-2 rounded-2xl">

        <button class="z-10 w-1/2 text-lg" @click="TransferToggle">swap</button>
        <button class="z-10 w-1/2 text-lg" @click="TransferToggle">optional</button>

        <div class="bg-gradient-to-br from-orange-400/70 to-amber-400/70 transition-transform duration-200 ease-out z-0 w-1/2 h-4/5 rounded-2xl absolute"
            :class="{ 'translate-x-full': toggle }"></div>

    </div>

</template>

<script setup>
import { ref } from 'vue';



let toggle = ref(false)

function TransferToggle() {
    toggle.value = !toggle.value;
}
</script>