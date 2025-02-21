<template>
    <section class="text-white mt-18" id="experience">
        <!-- Background Decorative Elements -->
        <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
            <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>

        <!-- Updated grid layout for better alignment -->
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">
            <!-- Tools & Technologies -->
            <div data-aos="flip-right" class="text-center flex flex-col z-10 h-full w-full md:w-[80%]">
                <h2 class="text-4xl font-bold text-white mb-6">
                    Tools 
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">&</span> 
                    Technologies
                </h2>

                <!-- Skills Grid -->
                <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
                    <div v-for="skill in skills" :key="skill.id" class="flex flex-col items-center transition-all duration-300 hover:scale-105">
                        <img :src="skill.img" :alt="skill.name" class="w-16 h-16">
                        <p class="mt-2 text-lg">{{ skill.name }}</p>
                    </div>
                </div>
            </div>

            <!-- Experiences Section -->
            <div class="flex flex-col z-10 h-full w-full" data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white mb-6 text-center">
                    Experiences
                </h2>
                <div class="space-y-6">
                    <div v-for="element in experiences" :key="element.id"
                        class="flex items-center rounded-xl p-5 bg-[#1d1e2f] shadow-lg border border-[#2a2b3d] hover:border-primary transition-all duration-300 hover:scale-105">
                        <div class="w-1/5 flex justify-center">
                            <img src="https://img.icons8.com/?size=100&id=123839&format=png&color=ffffff" alt="icon" class="w-12 h-12">
                        </div>
                        <div class="w-4/5 pl-4">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                {{ element.name }}
                            </h3>
                            <p class="text-white text-lg">{{ element.business }}</p>
                            <p class="text-gray-400">{{ element.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';

const skills = ref([
    { id: 1, name: 'JavaScript', img: 'https://img.icons8.com/color/48/javascript.png' },
    { id: 2, name: 'Vue.js', img: 'https://img.icons8.com/color/48/vue-js.png' },
    { id: 3, name: 'Tailwind CSS', img: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000' },
    { id: 4, name: 'HTML5', img: 'https://img.icons8.com/color/48/html-5.png' },
    { id: 5, name: 'CSS3', img: 'https://img.icons8.com/color/48/css3.png' },
    { id: 6, name: 'Node.js', img: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000' },
    { id: 7, name: 'Git', img: 'https://img.icons8.com/color/48/git.png' },
    { id: 8, name: 'React', img: 'https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000' },
    { id: 9, name: 'MongoDB', img: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000' },
    { id: 10, name: 'Postman Api', img: 'https://img.icons8.com/?size=100&id=KIcFwp9MNQL5&format=png&color=E48C19' },
    { id: 11, name: 'Express.js', img: 'https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000' },
    { id: 12, name: 'Microsoft SQL Server', img: 'https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000' },
    { id: 13, name: 'PowerShell', img: 'https://img.icons8.com/?size=100&id=FwaVI1qCE7hQ&format=png&color=000000' },
    { id: 14, name: 'Agile', img: 'https://img.icons8.com/?size=100&id=zlH55omVdm3v&format=png&color=000000' },
    { id: 15, name: 'Jira', img: 'https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000' },
    
]);

const experiences = ref([
    { id: 1, name: 'Brand Associate', business: 'Old Navy Inc', year: 'Present' },
    { id: 2, name: 'Research Assistant', business: 'DeNova Inc', year: '2021-2023' },
]);
</script>