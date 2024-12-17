<template>
    <section class="text-white mt-20" id="projects">
        <div class="px-4 xl:pl-16">
        <div class="mb-4 md:flex md:justify-between xl:pr-16">
            <h2 class="text-4xl font-bold text-white"> My Latest Projects</h2>
        </div>
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3" data-aos="fade-right">
                <div v-for="project in filteredProjects" :key="project.id">
                    <div class="h-52 md:h-[24rem] rounded-t-xl relative group" :style="{backgroundImage:'url('+project.img+')', backgroundSize: 'cover'}">
                    <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    </div>
                </div>
            <div class="text-white rounded-b-xl mt-0 bg-[#1d1e2f] shadow-lg border border-[#1d1e2f] py-6 px-4">
                <h3 class="text-lg font-semibold uppercase lg:text-xl"> {{ project.title }}</h3>
                <p class="text-[#ADB7BE]"> {{ project.description }}</p>
                <div class="flex flex-wrap p-2.5">
                    <div v-for="technology in project.technologies" :key="technology" class="text-center ml-1 mt-1 rounded-3xl bg-[#41436A]" 
                    style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border:1px solid #41436A; backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);"
                    >
                        <p class="px-1 py-2"> {{ technology }}</p>
                    </div>
                </div>
                </div>
            </div>
            </ul>
    </div>
    </section>
</template>
<script setup>

import { ref, computed } from 'vue';

    const projects = ref([
        {
            id: 1,
            category: 'Back-end',
            img:'src/assets/Backend_endpoint.png',
            title:'Chinook App Backend Enhancement',
            description:"I developed the backend for the Chinook App, focusing on Express.js endpoints to manage artists, albums, and tracks. I integrated new database features and ensured data integrity through validation schemas, demonstrating my ability to build scalable backend systems that seamlessly integrate with a pre-existing frontend.",
            technologies:['Express.js', 'Node.js', 'Javascript', 'SQL'],
            gitURL:'#',
            webURL:'#'
        },
        {
            id: 2,
            category: 'front-end',
            img:'src/assets/frontend_tailwind.png',
            title:'Interactive Website built with Advanced CSS Tools',
            description:'I created a responsive single-page website for Acme Creatives using Tailwind CSS, featuring sections for services, portfolio, and testimonials. The site includes an interactive HTML Canvas animation to enhance visual appeal.',
            technologies:['Tailwind CSS', 'HTML Canvas animation'],
            gitURL:'#',
            webURL:'#'
        },
        {
            id: 3,
            category: 'front-end',
            img:'src/assets/frontend_API.png',
            title:'3-in-a-Row Puzzle Game',
            description:"I developed a 3-in-a-row puzzle game using pure JavaScript and the DOM, retrieving puzzle data from a remote API. The game allows users to interact with the grid, change square states, and check the puzzle's status. Features include error display for incorrect squares and an innovative game-play enhancement, all implemented with unobtrusive JavaScript.",
            technologies:['HTML DOM', 'Javascript', 'API'],
            gitURL:'#',
            webURL:'#'
        }
    ])

    const selectedCategory=ref('all')
    const filteredProjects = computed(() => {
        if(selectedCategory.value === 'all') {
            return projects.value;
        }
        return projects.value.filter(project => project.category.toLocaleLowerCase() === selectedCategory.value.toLocaleLowerCase())
    })


</script>
