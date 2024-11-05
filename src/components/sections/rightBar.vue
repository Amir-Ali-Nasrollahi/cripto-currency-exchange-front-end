<template>
    <section
        class="w-full h-full bg-gradient-to-tr from-orange-400/80 to-amber-400/80 p-2 rounded-2xl shadow-xl flex flex-col items-center justify-start">

        
        <div class="flex flex-row items-center justify-between w-full p-2">
            <div class="flex flex-row items-center">
                <label for="search">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </label>

                <input type="text" id="search"
                    class="placeholder-orange-800/35 px-2 focus:outline-none focus:border-2 focus:border-orange-100 transition-all duration-75 bg-transparent rounded-xl h-10"
                    placeholder="search wallet">

            </div>
            <div class="flex flex-row w-fit hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                <h1 class="mx-1 text-orange-900/70">Contact Us</h1>
            </div>

        </div>

        <!-- make toggle for transfer card -->
         <div class="relative flex flex-row items-center justify-between bg-gradient-to-br from-orange-100 to-amber-100 w-2/3 h-16 mt-2 rounded-2xl">

             <button class="z-10 w-1/2 text-lg" @click="TransferToggle">swap</button>
             <button class="z-10 w-1/2 text-lg" @click="TransferToggle">optional</button>

            <div class="bg-gradient-to-br from-orange-400/70 to-amber-400/70 transition-transform duration-200 ease-out z-0 w-1/2 h-4/5 rounded-2xl absolute" :class="{'translate-x-full' : toggle}"></div>

         </div>


         <!-- make transfer card -->
          <div class="bg-gradient-to-br from-orange-100 to-amber-100 w-full h-28">
            
          </div>


    </section>
</template>

<script setup>
import { ref } from 'vue';


let toggle = ref(false)

function TransferToggle() {
    toggle.value = !toggle.value;
}

</script>