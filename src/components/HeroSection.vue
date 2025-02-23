<template>
  <section class="relative w-full h-[80vh] flex items-center" data-aos="fade-up">
    <canvas id="floatingParticles" class="absolute top-0 inset-x-0 h-full w-full"></canvas>
    <!-- Gradient Background Effect -->
    <div class="absolute top-0 inset-x-0 h-64 flex items-start">
      <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl opacity-40"></div>
      <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl"></div>
    </div>

    <!-- Hero Content Container -->
    <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
      <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">
        <!-- Left Text Section -->
        <div class="text-center lg:text-left mx-auto max-w-2xl">
          <h1 class="text-white font-bold text-4xl md:text-5xl lg:text-6xl">
            Hi, I'm 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#F64668]">
              Tamanna
            </span>
          </h1>
          <p class="text-gray-300 pt-6">
            I'm a detail-oriented professional with experience in scientific research, project management, and full-stack development. I enjoy working with diverse teams, managing projects with Agile methods, and creating user-centered solutions. I'm passionate about solving complex problems and using technology to build meaningful, impactful solutions.
          </p>
          
          <!-- Buttons -->
          <div class="flex items-center gap-4 pt-8 flex-col sm:flex-row">
            <a href="#contact" class="px-6 py-3 bg-primary text-white rounded-full hover:scale-105 transition-transform duration-200">
              Contact Me
            </a>
            <a :href="resumePath" download="TamannaAnand_Resume.pdf" 
              class="border border-primary px-6 py-3 text-primary rounded-full flex items-center hover:scale-105 transition-transform duration-200">
              <svg class="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v12m0 0l-4-4m4 4l4-4M4 16v4h16v-4" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        <!-- Right Image Section -->
         <!-- updated UI to hide the profile image when on mobile to make the layout better -->
        <div class="lg:h-full md:flex hidden sm:block">
          <div class="flex w-full h-96 items-center relative">
            <div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl"></div>
            <div class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 right-10 rounded-full shadow-lg border border-primary">
              <img src="@/assets/undraw_profile_pic_re_iwgo.svg" alt="profile-img" class="w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted } from 'vue';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import resumePath from '@/assets/TamannaAnand_Resume.pdf';

// Canvas Particle Animation
onMounted(() => {
  const canvas = document.getElementById('floatingParticles');
  const ctx = canvas.getContext('2d');

  // Resize canvas to fill screen
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 5 + 1;  // Random size between 1 and 6
      this.speedX = Math.random() * 3 - 1.5;  // Random horizontal speed
      this.speedY = Math.random() * 3 - 1.5;  // Random vertical speed
      this.color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Create the effect of particles being generated from the center
      if (this.size > 0.2) this.size -= 0.1;  // Particle size decreases over time

      // Draw the particle
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear canvas for next frame

    // Generate new particles
    if (particles.length < 100) {
      particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    // Update and draw all particles
    particles.forEach(particle => {
      particle.update();
    });

    requestAnimationFrame(animateParticles);  // Keep animating
  }

  animateParticles();  // Start the animation
});
</script>

<style>
#floatingParticles {
  z-index: -1;
}
</style>
