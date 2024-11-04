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
                    <button
                        class="bg-black rounded-2xl p-2 mx-1 shadow-md hover:shadow-sm transition-shadow duration-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-10">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                        </svg>
                    </button>

                    <button
                        class="bg-black rounded-2xl p-2 mx-1 shadow-md hover:shadow-sm transition-shadow duration-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-10">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                </div>


                <button
                    class="bg-orange-100 rounded-2xl p-2 mx-1 shadow-md hover:shadow-sm transition-shadow duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-10 text-orange-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                </button>
            </div>
        </div>

        <section class="p-2">
            <div class="m-1 text-lg">watch list</div>
            <div class="rounded-lg grid grid-rows-4 gap-3">
                <div
                    class="w-full border-2 border-orange-200 h-14 rounded-2xl flex flex-row items-center justify-start p-2">
                    <h3 class="bg-gradient-to-b from-orange-400 to-amber-400 w-fit rounded-xl text-orange-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </h3>
                    <div class="mx-1 text-xs">
                        <p class="text-sm">BitCoin</p>
                        <p class="text-orange-300">BTC</p>
                    </div>
                    <div class="w-1/2 text-center">this is showing a chart</div>
                    <div class="flex flex-col items-center w-1/4">
                        <h1 class="text-sm">54,343,000</h1>
                        <h1 class="text-xs">last price</h1>
                    </div>
                </div>
                <div
                    class="w-full border-2 border-orange-200 h-14 rounded-2xl flex flex-row items-center justify-start p-2">
                    <h3 class="bg-gradient-to-b from-orange-400 to-amber-400 w-fit rounded-xl text-orange-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </h3>
                    <div class="mx-1 text-xs">
                        <p class="text-sm">BitCoin</p>
                        <p class="text-orange-300">BTC</p>
                    </div>
                    <div class="w-1/2 text-center">this is showing a chart</div>
                    <div class="flex flex-col items-center w-1/4">
                        <h1 class="text-sm">54,343,000</h1>
                        <h1 class="text-xs">last price</h1>
                    </div>
                </div>
                <div
                    class="w-full border-2 border-orange-200 h-14 rounded-2xl flex flex-row items-center justify-start p-2">
                    <h3 class="bg-gradient-to-b from-orange-400 to-amber-400 w-fit rounded-xl text-orange-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </h3>
                    <div class="mx-1 text-xs">
                        <p class="text-sm">BitCoin</p>
                        <p class="text-orange-300">BTC</p>
                    </div>
                    <div class="w-1/2 text-center">this is showing a chart</div>
                    <div class="flex flex-col items-center w-1/4">
                        <h1 class="text-sm">54,343,000</h1>
                        <h1 class="text-xs">last price</h1>
                    </div>
                </div>
                <div
                    class="w-full border-2 border-orange-200 h-14 rounded-2xl flex flex-row items-center justify-start p-2">
                    <h3 class="bg-gradient-to-b from-orange-400 to-amber-400 w-fit rounded-xl text-orange-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </h3>
                    <div class="mx-1 text-xs">
                        <p class="text-sm">BitCoin</p>
                        <p class="text-orange-300">BTC</p>
                    </div>
                    <div class="w-1/2 text-center">this is showing a chart</div>
                    <div class="flex flex-col items-center w-1/4">
                        <h1 class="text-sm">54,343,000</h1>
                        <h1 class="text-xs">last price</h1>
                    </div>
                </div>
            </div>
        </section>


        <div class="w-full col-span-2">
            <h1>trade list</h1>
            <div>
        
                <div class="w-full h-16 mb-2 rounded-2xl bg-gradient-to-br from-orange-400/40 to-amber-400/40"></div>
                <div class="w-full h-16 mb-2 rounded-2xl bg-gradient-to-br from-orange-400/40 to-amber-400/40"></div>
                <div class="w-full h-16 mb-2 rounded-2xl bg-gradient-to-br from-orange-400/40 to-amber-400/40"></div>
                <div class="w-full h-16 mb-2 rounded-2xl bg-gradient-to-br from-orange-400/40 to-amber-400/40"></div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>