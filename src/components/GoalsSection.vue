<template>
  <section class="text-white mt-18" id="goals">
      <!-- Background Decorative Elements -->
      <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
          <span class="flex opacity-20">
              <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
              <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
          </span>
      </div>

      <!-- Goals Section -->
      <div class="container mx-auto px-4 py-12 md:px-8 lg:px-16">
          <h2 class="text-4xl font-bold text-center mb-8">
              My <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Goals</span>
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div v-for="goal in goals" :key="goal.id" 
                  class="flex flex-col items-center text-center p-6 bg-[#1d1e2f] shadow-lg border border-[#2a2b3d] rounded-xl transition-transform transform hover:scale-105">
                  <div class="w-16 h-16 flex justify-center items-center bg-primary rounded-full mb-4">
                      <img :src="goal.icon" :alt="goal.title" class="w-10 h-10">
                  </div>
                  <h3 class="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                      {{ goal.title }}
                  </h3>
                  <p class="text-gray-400 text-lg">{{ goal.description }}</p>
              </div>
          </div>
      </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const goals = ref([
  {
      id: 1,
      title: 'Enhance Full-Stack Skills',
      description: 'Continue building expertise in modern web technologies, including Vue.js, React, and backend frameworks.',
      icon: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=ffffff'
  },
  {
      id: 2,
      title: 'Contribute to Open Source',
      description: 'Engage with the developer community by contributing to open-source projects and collaborating on GitHub.',
      icon: 'https://img.icons8.com/?size=100&id=74402&format=png&color=ffffff'
  },
  {
      id: 3,
      title: 'Build Scalable Applications',
      description: 'Develop high-performance applications with a focus on clean code, scalability, and best practices.',
      icon: 'https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=ffffff'
  },
  {
      id: 4,
      title: 'Advance in Agile & Project Management',
      description: 'Improve Agile methodologies, task tracking, and collaboration to become a well-rounded full-stack developer.',
      icon: 'https://img.icons8.com/?size=100&id=zlH55omVdm3v&format=png&color=ffffff'
  },
  {
      id: 5,
      title: 'Develop a SaaS Product',
      description: 'Work on creating a software-as-a-service product that solves a real-world problem.',
      icon: 'https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=ffffff'
  },
  {
      id: 6,
      title: 'Network and Learn',
      description: 'Engage with industry professionals, attend tech meetups, and expand knowledge through workshops.',
      icon: 'https://img.icons8.com/?size=100&id=KIcFwp9MNQL5&format=png&color=ffffff'
  }
]);
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
