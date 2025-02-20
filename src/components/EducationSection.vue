<template>
    <section class="text-white mt-18" id="education">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">
            <div data-aos="flip-right" >
                <h2 class="text-4xl font-bold text-white text-center md:mt-0">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">My</span>
                    Education
                </h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in education" :key="element.id"
                    class="flex items-center rounded-xl p-5 bg-[#1d1e2f] shadow-lg border border-[#2a2b3d] hover:border-primary transition-all duration-300">
                        <div class="w-1/4">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png" alt="graduation-cap">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                {{ element.School }}
                            </h3>
                            <p class="text-white">{{ element.Program }}</p>
                            <p class="text-white">{{ element.Year }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="flip-right" class="text-center flex flex-col z-10 h-full w-full">
                <h2 class="text-4xl font-bold text-white mb-6">
                    Personal
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
                </h2>
                <!-- Skills Grid -->

                <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
                    <div v-for="skill in skills" :key="skill.id" class="flex flex-col items-center transition-all duration-300 hover:scale-105">
                        <img :src="skill.img" :alt="skill.name" class="w-16 h-16">
                        <p class="mt-2 text-lg">{{ skill.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const education = ref([
    {
        id:1,
        School: 'Nova Scotia Community College',
        Program: 'Full Stack Application Development',
        Year: 'Present'
    },
    {
        id:2,
        School: 'Dalhousie University',
        Program: 'Bachelor of Science',
        Year: '2017 - 2021'
    }
]);

const skills = ref([
    {
        id: 1,
        name:'Stakeholder Communication',
        img: 'https://img.icons8.com/?size=100&id=IVtLRVtgqH1u&format=png&color=000000'
    },
    {
        id: 2,
        name:'Project Management',
        img: 'https://img.icons8.com/?size=100&id=11tClwRPBj0X&format=png&color=000000'
    },
    {
        id: 3,
        name:'Critical Thinking',
        img: 'https://img.icons8.com/?size=100&id=tqtACRW82n1P&format=png&color=000000'
    },
    {
        id: 4,
        name:'Inventory Management',
        img: 'https://img.icons8.com/?size=100&id=46937&format=png&color=000000'
    },
    {
        id: 5,
        name:'Teamwork',
        img: 'https://img.icons8.com/?size=100&id=104316&format=png&color=000000'
    },

])
</script>
