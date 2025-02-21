<template>
    <header class="flex justify-between items-center p-6 bg-opacity-50 z-20">
        <!-- Animated Canvas Logo - CHATGPT -->
        <div class="relative flex items-center">
            <canvas ref="canvas" class="w-16 h-16"></canvas>
        </div>
        <!-- MOBILE TOGGLE BUTTON -->
        <div class="md:hidden z-30">
            <button type="button" 
            class="block focus:outline-none"
            @click="isMenuOpen = !isMenuOpen">
                <span v-if="isMenuOpen" class="text-5xl">
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close" width="50" height="50">
                </span>
                <span v-else class="text-5xl">
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="menu" width="50" height="50">
                </span>
            </button>
        </div>

        <!-- NavBar Links -->
        <nav
        :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row', isMenuOpen ? 'block':'hidden']"
        >
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                <li v-for="item in menu" :key="item.name">
                    <a :href="item.href" 
                    class="block text-white transition hover:text-primary ease-linear text-2xl md:text-lg"
                    @click="scrollToSection(item.href)">
                         {{ item.name }}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const menu = ref([
    { name: 'About Me', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Goals', href: '#goals' },
    { name: 'Contact', href: '#contact' }
]);

const isMenuOpen = ref(false);
const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

// Canvas animation logic
const canvas = ref(null);

const drawLogoAnimation = () => {
    const ctx = canvas.value.getContext('2d');
    const radius = 30;
    let angle = 0;

    // Create a gradient for the circle
    const gradient = ctx.createRadialGradient(50, 50, 10, 50, 50, radius);
    gradient.addColorStop(0, 'rgba(254, 150, 119, 0.8)');  // Cyan color at the center
    gradient.addColorStop(1, 'rgba(246, 70, 104, 0.6)');    // Blue color at the outer edges

    const draw = () => {
        ctx.clearRect(0, 0, canvas.value.width, canvas.value.height); // Clear canvas

        // Draw the circle with the gradient
        ctx.beginPath();
        ctx.arc(50, 50, radius, 0, 2 * Math.PI);
        ctx.fillStyle = gradient;
        ctx.fill();

          // Create a small circle moving around the larger circle
        angle += 0.02;
        const movingCircleRadius = 6; // Radius of the moving circle
        const x = 50 + Math.cos(angle) * 40; // X-coordinate of the moving circle
        const y = 50 + Math.sin(angle) * 40; // Y-coordinate of the moving circle

        ctx.beginPath();
        ctx.arc(x, y, movingCircleRadius, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // White color for the moving circle
        ctx.fill();

        requestAnimationFrame(draw); // Repeat the animation
    };

    draw(); // Start drawing
};

// Set up canvas size and start animation on mounted
onMounted(() => {
    canvas.value.width = 100; // Set canvas width
    canvas.value.height = 100; // Set canvas height
    drawLogoAnimation(); // Start the animation
});
</script>
