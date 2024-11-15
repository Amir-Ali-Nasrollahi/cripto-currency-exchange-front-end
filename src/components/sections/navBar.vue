<template>
    <section class="w-full lg:h-full h-14 lg:p-2">
        <div class="h-full w-full">
            <div
                class="h-full flex lg:flex-col flex-row justify-between py-8 items-center bg-gradient-to-b from-orange-400/85 to-amber-400/90 lg:rounded-2xl rounded-t-2xl shadow-lg">
                <div class="h-full w-full flex lg:flex-col flex-row items-center">
                    <h1 class="text-xl lg:block hidden text-center lg:mb-10 text-orange-100 bg-black p-1 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </h1>
                    <!-- nav bar items -->
                    <ul
                        class="lg:h-1/2 h-full lg:w-auto w-full flex lg:flex-col flex-row lg:items-start justify-around items-center">
                        <!-- home icon -->
                        <li @click="go_to('home')" :class="(icons == 'home') ? main_class : second_class">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </li>
                        <!-- end home icon -->

                        <!-- exchange icon -->
                        <li @click="go_to('exchange')" :class="(icons == 'exchange') ? main_class : second_class">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                            </svg>

                        </li>
                        <!-- end exchange icon -->


                        <!-- charts icon -->
                        <li @click="go_to('chart')" :class="(icons == 'chart') ? main_class : second_class">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                            </svg>
                        </li>
                        <!-- end chart icon -->

                        <!-- wallet icon -->
                        <li @click="go_to('wallet')" :class="(icons == 'wallet') ? main_class : second_class">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                            </svg>
                        </li>
                        <!-- end wallet icon -->

                    </ul>
                </div>
                <p
                    class="p-3 hover:cursor-pointer transition-all duration-50 ease-linear rounded-2xl bg-orange-100 text-orange-400 lg:block hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6 hover:drop-shadow-sm">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let prop = defineProps({
    item: String
})

const main_class = ref("p-3 hover:cursor-pointer transition-all duration-50 ease-linear rounded-2xl bg-orange-100")
const second_class = ref("p-3 hover:cursor-pointer transition-all duration-50 ease-linear rounded-2xl hover:bg-orange-100")
let icons = ref();
switch (prop.item) {
    case 'exchange':
        icons.value = 'exchange';
        break;
    case 'wallet':
        icons.value = 'wallet';
        break;
    case 'chart':
        icons.value = 'chart';
        break;

    default:
        icons.value = 'home';
        break;
}
const router = useRouter()
function go_to(name) {
    router.push({
        name: name
    })
}


</script>