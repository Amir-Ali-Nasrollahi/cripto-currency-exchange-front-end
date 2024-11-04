<template>
    <section class="w-full h-full grid grid-cols-2 grid-rows-2 gap-3 ">
        <div
            class="bg-gradient-to-br from-orange-400/80 to-amber-400/80 rounded-3xl shadow-md flex flex-col items-center justify-around p-5">
            <div class="flex flex-col items-center">
                <h4 class="text-xl my-4">my wallet</h4>

                <h1 class="text-5xl">$127,439</h1>

                <h4 class="text-xs mt-1">the last update in 2003</h4>
            </div>

            <div class=" text-white w-full flex flex-row justify-around">
                <div>
                    <button class="bg-black rounded-2xl p-2 mx-1 shadow-md hover:shadow-sm transition-shadow duration-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                        </svg>
                    </button>
    
                    <button class="bg-black rounded-2xl p-2 mx-1 shadow-md hover:shadow-sm transition-shadow duration-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-10">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                </div>


                <button class="bg-orange-100 rounded-2xl p-2 mx-1 shadow-md hover:shadow-sm transition-shadow duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-10 text-orange-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                </button>
            </div>
        </div>

        <div class="rounded-lg p-2 grid grid-rows-4 gap-3">
            <div class="w-full border border-orange-300 h-16 rounded-2xl"></div>
            <div class="w-full border border-orange-300 h-16 rounded-2xl"></div>
            <div class="w-full border border-orange-300 h-16 rounded-2xl"></div>
            <div class="w-full border border-orange-300 h-16 rounded-2xl"></div>
        </div>


        <div class="col-span-2 rounded-2xl">

        </div>
    </section>
</template>

<script setup>

</script>