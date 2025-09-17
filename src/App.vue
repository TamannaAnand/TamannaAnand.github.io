<!-- cite: https://youtu.be/U10h8rrPe6g?si=tfjgNVyVT1gcuzNr -->
<template>
 <div class="bg-[#41436A] min-h-screen">
  <NavBar/>
  <HeroSection />
  <AboutSection />
  <EducationSection />
  <ExperienceSection />
  <ProjectSection />
  <!-- <GoalsSection /> -->
  <ContactSection />
  <FooterSection />
  <BackToTop />
 </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
//Import Components Asynchronously
const NavBar = defineAsyncComponent(()=>import('@/components/NavBar.vue'));
const HeroSection = defineAsyncComponent(()=>import('@/components/HeroSection.vue'));
const AboutSection = defineAsyncComponent(()=>import('@/components/AboutSection.vue'));
const EducationSection = defineAsyncComponent(()=>import('@/components/EducationSection.vue'));
const ExperienceSection = defineAsyncComponent(()=>import('@/components/ExperienceSection.vue'));
const ProjectSection = defineAsyncComponent(()=>import('@/components/ProjectSection.vue'));
// const GoalsSection = defineAsyncComponent(()=>import('@/components/GoalsSection.vue'));
const ContactSection = defineAsyncComponent(()=>import('@/components/ContactSection.vue'));
const FooterSection = defineAsyncComponent(()=>import('@/components/FooterSection.vue'));
const BackToTop = defineAsyncComponent(()=>import('@/components/BackToTop.vue'));
</script>