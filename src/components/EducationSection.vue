<template>
    <section class="text-white mt-18" id="education">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">
            <div data-aos="flip-right" >
                <h2 class="text-4xl font-bold text-white text-center md:mt-0">
                    My Education
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

            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white text-center">
                    More About 
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
                </h2>
                <p class="text-base text-center lg:text-lg py-10 md:py-20">
                    My education combines analytical expertise and technical proficiency, forming a strong foundation for a career in software development. At Dalhousie University, I developed critical thinking and problem-solving skills through a Bachelor of Science with a minor in Microbiology and Immunology. Currently, in the Full Stack Application Development program at NSCC, I am learning front-end and back-end technologies, secure application design, and software testing. This blend of skills positions me to create innovative, reliable, and user-focused software solutions.
                </p>
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
</script>
