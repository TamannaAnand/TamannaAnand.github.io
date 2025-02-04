<template>
    <section class="text-white mt-20" id="about">
        <div class="px-4 xl:pl-16">
            <h2 class="text-4xl font-bold mt-4 text-center">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    About
                </span> 
                Me
            </h2>
        </div>
        <div class="py-8 px-4 sm:py-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:gap-16 lg:grid-cols-3">
            <div v-for="item in about" :key="item.id" data-aos="fade-up"
                 class="px-6 py-8 rounded-xl bg-[#1d1e2f] shadow-lg border border-[#2a2b3d] hover:border-primary hover:shadow-xl transition-all duration-300"
            >
                <div class="flex justify-center">
                    <div class="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary p-3">
                        <img :src="item.icon" alt="item-icon" class="w-16 h-16">
                    </div>
                </div>
                <div class="text-center mt-6">
                    <h3 class="text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                        {{ item.name }}
                    </h3>
                    <p class="text-gray-300 mt-4 text-lg md:text-lg leading-relaxed">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
   import { ref } from 'vue'; 
   const about = ref([
    {
        id: 1,
        icon: "https://img.icons8.com/ffffff/ios-filled/100/cat-footprint.png",
        name:'Cat Mom',
        description:'As a proud cat mom, My and my partners life revolves around the playful furballs. From mischievous antics to cozy snuggles, every moment is an adventure. I love finding new toys and cozy spots for my cats, embracing all their quirky behaviors along the way.'
    },
    {
        id: 2,
        icon: "https://img.icons8.com/ffffff/ios-filled/100/camping-tent.png",
        name:'Outdoor Dabbler',
        description:"I enjoy exploring the great outdoors, even if I’m no expert. Whether it’s a leisurely hike or a picnic in the park, I love soaking in nature's beauty. I might stumble into a few surprises, but I’m always up for an adventure and eager to learn!"
    },
    {
        id: 3,
        icon: "https://img.icons8.com/ffffff/ios-filled/100/trust--v1.png",
        name:'Personable Pal',
        description:'I’m a personable pal dedicated to helping others. Whether it’s offering a listening ear or practical support, friends know they can rely on me in tough times. I love uplifting those around me and being a positive force in their lives.'
    }
   ])
</script>
