<template>
  <section class="text-white mt-18" id="goals">
    <!-- Background Decorative Elements -->
    <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
      <span class="flex opacity-20">
        <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
        <span
          class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"
        ></span>
      </span>
    </div>

    <!-- Goals Section -->
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-16">
      <h2 class="text-4xl font-bold text-center mb-8">
        My
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >Goals</span
        >
      </h2>

      <!-- Carousel -->
      <Carousel v-bind="carouselConfig" class="full-width-carousel">
        <Slide v-for="goal in goals" :key="goal.id">
          <div class="goal-card">
            <div class="icon-container">
              <img :src="goal.icon" :alt="goal.title" class="w-15 h-15" />
            </div>
            <h3 class="goal-title">{{ goal.title }}</h3>
            <p class="goal-description">{{ goal.description }}</p>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const goals = ref([
  {
    id: 1,
    title: "Enhance Full-Stack Skills",
    description:
      "Continue building expertise in modern web technologies, including Vue.js, React, and backend frameworks.",
    icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=ffffff",
  },
  {
    id: 2,
    title: "Contribute to Open Source",
    description:
      "Engage with the developer community by contributing to open-source projects and collaborating on GitHub.",
    icon: "https://img.icons8.com/?size=100&id=bprXkvrC7p9W&format=png&color=000000",
  },
  {
    id: 3,
    title: "Build Scalable Applications",
    description:
      "Develop high-performance applications with a focus on clean code, scalability, and best practices.",
    icon: "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=ffffff",
  },
  {
    id: 4,
    title: "Advance in Project Management",
    description:
      "Improve Agile methodologies, task tracking, and collaboration to become a well-rounded full-stack developer.",
    icon: "https://img.icons8.com/?size=100&id=zlH55omVdm3v&format=png&color=ffffff",
  },
  {
    id: 5,
    title: "Develop a SaaS Product",
    description:
      "Work on designing, developing, and launching a full-featured software-as-a-service product that addresses a real-world problem.",
    icon: "https://img.icons8.com/?size=100&id=RnMbj3WtSucc&format=png&color=000000",
  },
  {
    id: 6,
    title: "Network and Learn",
    description:
      "Engage with industry professionals, attend tech meetups, and expand knowledge through workshops.",
    icon: "https://img.icons8.com/?size=100&id=xu6jQCvncRna&format=png&color=000000",
  },
]);

const carouselConfig = {
  itemsToShow: 1, // Adjust based on screen size
  wrapAround: true,
};
</script>

<style scoped>
.goals-carousel {
  margin: auto;
}

.goal-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;
  background: #1d1e2f;
  border: 1px solid #2a2b3d;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  color: white; /* Change this to any color */
  background-color: rgba(255, 255, 255, 0.2); /* Light background */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: background 0.3s ease-in-out;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: rgba(255, 255, 255, 0.4); /* Brighter on hover */
}

.icon-container {
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  border-radius: 50%;
  margin-bottom: 16px;
}

.goal-title {
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  margin-bottom: 8px;
}

.goal-description {
  color: #b0b0b0;
  font-size: 1rem;
}
</style>
