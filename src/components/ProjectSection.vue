<template>
  <section class="text-white mt-20" id="projects">
    <div class="px-4 xl:pl-16">
      <div class="md:flex md:justify-between xl:pr-16">
        <h2 class="text-4xl font-bold md:m-auto">My Latest Projects</h2>
      </div>
      <ul
        class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
        data-aos="fade-right"
      >
        <li v-for="project in filteredProjects" :key="project.id" class="group">
          <div
            class="h-52 md:h-[24rem] rounded-t-xl relative bg-cover"
            :style="{ backgroundImage: `url(${project.img})` }"
          >
            <div
              class="absolute inset-0 flex items-center justify-center bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"
            >
              <a v-for="(link, index) in projectLinks(project)" :key="index" :href="link.href" target="_blank" 
                class="h-14 w-14 mr-2 border-2 rounded-full border-[#AB7BE] hover:border-white flex items-center justify-center">
                <img :src="link.icon" width="32" height="32" alt="project link" />
              </a>
            </div>
          </div>
          <div class="text-white bg-[#1d1e2f] shadow-lg border border-[#1d1e2f] py-6 px-4 rounded-b-xl">
            <h3 class="text-lg font-semibold uppercase lg:text-xl">{{ project.title }}</h3>
            <p class="text-[#ADB7BE]">{{ project.description }}</p>
            <div class="flex flex-wrap p-2.5">
              <span
                v-for="tech in project.technologies" :key="tech"
                class="text-center ml-1 mt-1 rounded-3xl bg-[#41436A] px-2 py-1 border border-[#41436a] backdrop-blur-md"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from "vue";
import SafeCampusImage from '@/assets/SafecampusImg.png'
import BackendImage from "@/assets/backend.png";
import FrontendImage from "@/assets/frontend_tailwind.png";
import FrontendApiImage from "@/assets/api.png";
import PlatformImage from "@/assets/PhaserGame.png";
import firstPortfolioImg from "@/assets/staticPortfolio.png";

const projects = ref([
  {
    id: 1,
    category: "Back-end",
    img: SafeCampusImage,
    title: "SafeCampus Dashboard",
    description:
      "SafeCampus is a web-based application that simplifies campus safety inspections by offering real-time visibility into task completion through an intuitive dashboard. Principals can track inspection progress, identify incomplete tasks, and streamline the inspection process, with plans for future enhancements like real-time updates and multi-campus integration.",
    technologies: ["Express.js", "Node.js", "SQLite", "Bootstrap"],
    gitURL: "https://github.com/TamannaAnand/HackathonProjectRepo",
    webURL: "https://safetysystem-testdeploy.onrender.com/",
  },
  {
    id: 2,
    category: "Back-end",
    img: BackendImage,
    title: "Chinook App Backend Enhancement",
    description:
      "I developed the backend for the Chinook App, focusing on Express.js endpoints to manage artists, albums, and tracks. I integrated new database features and ensured data integrity through validation schemas, demonstrating my ability to build scalable backend systems that seamlessly integrate with a pre-existing frontend.",
    technologies: ["Express.js", "Node.js", "Javascript", "SQL"],
    gitURL: "https://github.com/TamannaAnand/ChinookApp",
    webURL: "https://chinookapp-5skd.onrender.com",
  },
  {
    id: 3,
    category: "front-end",
    img: FrontendImage,
    title: "Interactive Website built with Advanced CSS Tools",
    description:
      "I created a responsive single-page website for Acme Creatives using Tailwind CSS, featuring sections for services, portfolio, and testimonials. The site includes an interactive HTML Canvas animation to enhance visual appeal.",
    technologies: ["Tailwind CSS", "HTML Canvas animation"],
    gitURL: "https://github.com/TamannaAnand/AdvancedCSSTechniques",
    webURL: "https://tamannaanand.github.io/AdvancedCSSTechniques/",
  },
  {
    id: 4,
    category: "front-end",
    img: FrontendApiImage,
    title: "3-in-a-Row Puzzle Game",
    description:
      "I developed a 3-in-a-row puzzle game using pure JavaScript and the DOM, retrieving puzzle data from a remote API. The game allows users to interact with the grid, change square states, and check the puzzle's status. Features include error display for incorrect squares and an innovative game-play enhancement, all implemented with unobtrusive JavaScript.",
    technologies: ["HTML DOM", "Javascript", "API"],
    gitURL: "https://github.com/TamannaAnand/3InARowPuzzleGame",
    webURL: "https://tamannaanand.github.io/3InARowPuzzleGame/",
  },
  {
    id: 5,
    category: "front-end",
    img: PlatformImage,
    title: "2D-Platformer Game",
    description:
      "A 2D platformer game built with Phaser.js, featuring dynamic level progression, physics-based gameplay, and interactive UI elements. Players collect stars, avoid bombs, and progress through levels, with real-time score updates and a custom 'Game Over' screen. This project highlights my skills in JavaScript and game development.",
    technologies: ["HTML DOM", "Phaser.js", "Javascript"],
    gitURL: "https://github.com/TamannaAnand/PhaserGame",
    webURL: "https://tamannaanand.github.io/PhaserGame/",
  },
  {
    id: 6,
    category: "front-end",
    img: firstPortfolioImg,
    title: "First Portfolio",
    description:
      "My first portfolio was a simple, multi-page site built with HTML and CSS. It had a grid layout for desktop and a single-column layout for mobile, making it responsive. It was a fun way to showcase my early web development projects and get a feel for building websites.",
    technologies: ["HTML", "CSS"],
    gitURL: "https://github.com/TamannaAnand/Static-Portfolio",
    webURL: "https://tamportfolio.netlify.app/",
  },
]);

const selectedCategory = ref("all");
const filteredProjects = computed(() => {
  if (selectedCategory.value === "all") {
    return projects.value;
  }
  return projects.value.filter(
    (project) =>
      project.category.toLocaleLowerCase() ===
      selectedCategory.value.toLocaleLowerCase()
  );
});
</script>
