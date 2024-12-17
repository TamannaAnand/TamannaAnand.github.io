<template>
    <section class="text-white mt-20" id="goals" data-aos="zoom-in">
        <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">Goals</h2>
        <div class="px-4 xl:px-16">
            <Carousel v-bind="settings" :breakpoints="breakpoints">
                <Slide v-for="element in goals" :key="element.id">
                    <div class="carousel_item  p-4">
                        <div class="w-full mx-auto bg-[#1d1e2f] shadow-lg border border-[#1d1e2f] p-5 text-white font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <h6 class="ml-4 font-bold text-sm uppercase text-white">
                                    {{ element.title }}
                                </h6>
                            </div>
                            <div class="w-full">
                                <p class="text-sm">
                                    <span class="text-sm font-bold uppercase text-white">
                                        {{ element.description }}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'
//carousel settings
const settings = ref({
    itemsToShow: 1,
    snapAlign:'center',
    wrapAround: true,
    breakpointMode: 'carousel'
})

//breakpoints
const breakpoints = {
    768: { 
        itemsToShow: 2.5,
        snapAlign: 'center'
     },
    1024: { 
        itemsToShow: 3,
        snapAlign: 'start'
    },
};


//goals
const goals = ref([
    {
        id:1,
        title:'Front-End Frameworks',
        description:'Get comfortable with building websites using popular tools like React or Angular.'
    },
    {
        id:2,
        title:'Back-End Development',
        description:'Continue learning a server-side languages and build an application incorporating backend-logic'
    },
    {
        id:3,
        title:'Understand Databases',
        description:'Continue to learn how to work with databases and build a database for an application.'
    },
    {
        id:4,
        title:'DevOps',
        description:'Learn how to streamline the dev process using tools that help deploy and manage applications.'
    },
    {
        id:5,
        title:'Personal Project',
        description:"Develop a full-stack application with a user-friendly frontend and a robust backend."
    },

])
</script>
<style>

</style>
