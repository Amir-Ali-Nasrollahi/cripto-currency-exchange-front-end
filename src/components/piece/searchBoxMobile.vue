<template>
    <section class="flex flex-row items-center justify-center text-orange-800 w-1/2 p-2">
            <div
                class="flex flex-row items-center bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl px-2 w-full">
                <label for="search">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </label>

                <input type="text" id="search"
                    class="placeholder-orange-800/35 px-2  focus:outline-none w-full focus:border-2 focus:border-orange-800 transition-all duration-75 bg-transparent rounded-xl h-10"
                    placeholder="search wallet">

            </div>

    </section>
</template>