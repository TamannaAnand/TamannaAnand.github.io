<template>
    <section class="text-white mt-20" id="contact" data-aos="fade-up">
        <h2 class="text-4xl font-bold text-white md:text-left text-center mb-4 px-4 xl:pl-16">Let's Connect</h2>
        <div class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
            <div>
                <p class="text-[#adb7be] md:text-left text-center">I’d love to hear from you! Whether you have a project in mind, want to collaborate, or just feel like chatting about tech, design, or anything creative, I’m all ears. Drop me a message, and let’s make something awesome together! 🚀</p>
                <div class="col-lg-4 col-md-4 mb-lg-0 mt-5">
                    <div class="flex mb-10 items-center">
                        <div class="p-2" style="background: #1d1e2f; width: 50px; height: 46px; display: flex; justify-content: center; border-radius: 50%; overflow: hidden; border: 1px solid #111a3e; backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);"
                        >
                            <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="new-post" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Email</h4>
                            <p>anandtamanna9@gmail.com</p>
                        </div>
                    </div>
                    <!-- phone number removed -->
                    <div class="flex mb-10 items-center">
                        <div class="p-2" style="background: #1d1e2f; width: 50px; height: 46px; display: flex; justify-content: center; border-radius: 50%; overflow: hidden; border: 1px solid #111a3e; backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);"
                        >
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>LinkedIn</h4>
                            <p><a href="https://www.linkedin.com/in/tamanna-anand-941a35212" target="_blank">LinkedIn Profile</a></p>
                        </div>
                    </div>
                </div>
            </div>
                <div
                style="background: #1d1e2f; width: 100%; height: 100%; border-radius: 20px; overflow: hidden; border: 1px solid #111a3e; backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);">
                <form class="flex flex-col p-2" data-aos="zoom-in-up" action="mailto:anandtamanna9@gmail.com" method="get" enctype="text/plain">
                    <div class="mb-6">
                        <label for="subject" class="text-white block mb-2 text-sm font-medium">Subject</label>
                        <input type="text" id="subject" class="bg-[#41436A] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Your Name" name="subject">
                    </div>
                    <div class="mb-6">
                        <label for="email" class="text-white block mb-2 text-sm font-medium">Email</label>
                        <input type="email" id="email" class="bg-[#41436A] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Your Email" name="email">
                    </div>
                    <div class="mb-6">
                        <label for="message" class="text-white block mb-2 text-sm font-medium">Message</label>
                        <textarea type="message" id="message" rows="5" cols="30" class="bg-[#41436A] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Let's talk about..."name="body"></textarea>
                    </div>
                    <input type="submit" value="Send Message" class="z-1 w-[100%!important] px-6 md:px-7 py-3 rounded-full sm:w-max flex justify-center text-white bg-primary border-2 border-transparent">
                </form>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
