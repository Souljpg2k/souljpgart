<script setup>
import { motion, AnimatePresence } from 'motion-v'
import { ref } from 'vue'

const links = [
    { id: 1, n: 'ARTSTATION', url: 'https://www.artstation.com/souljpg' },
    { id: 2, n: 'INSTAGRAM',  url: 'https://www.instagram.com/souljpgart/' },
    { id: 3, n: 'YOUTUBE',    url: 'http://www.youtube.com/@souljpgart'},
    { id: 4, n: 'X.COM',      url: 'https://x.com/souljpg_' },
    { id: 5, n: 'PIXIV',      url: 'https://www.pixiv.net/en/users/73130815' },
    { id: 6, n: 'KO-FI',      url: 'https://ko-fi.com/soul111' }
]

const isOpen = ref(false)
</script>

<template>
    <div class="bg-black/80 backdrop-blur-sm w-screen h-14 fixed top-0 z-40 flex justify-between items-center pl-5 pr-5">
        <div class="text-white leading-0.5">
            <h1 class="text-3xl font-eb">souljpgart</h1>
        </div>

        <div class="hidden md:flex text-white space-x-3 select-none font-dm">
            <motion.a 
                v-for="link in links" 
                :key="link.id" 
                :href="link.url" 
                target="_blank" 
                rel="noopener noreferrer"
                :whileHover="{ opacity: 0.5 }" 
                :transition="{ duration: 0.2 }"
            >
                {{ link.n }}
            </motion.a>
        </div>

        <motion.button 
            class="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8" 
            @click="isOpen = !isOpen"
        >
            <motion.span 
                class="w-6 h-0.5 bg-white block"
                :animate="isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }" 
            />
            <motion.span 
                class="w-6 h-0.5 bg-white block" 
                :animate="{ opacity: isOpen ? 0 : 1 }" 
            />
            <motion.span 
                class="w-6 h-0.5 bg-white block"
                :animate="isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }" 
            />
        </motion.button>
    </div>

    <AnimatePresence>
        <motion.div 
            v-if="isOpen" 
            class="bg-black/80 backdrop-blur-sm fixed w-screen h-screen z-30 flex flex-col 
                items-center justify-center space-y-4 text-2xl text-white font-dm"
            :initial="{ y: '-100%' }" 
            :animate="{ y: 0 }" 
            :exit="{ y: '-100%' }"
            :transition="{ duration: 0.4, ease: 'anticipate' }">
            
            <a 
                v-for="link in links" 
                :key="link.id" 
                :href="link.url" 
                target="_blank" 
                rel="noopener noreferrer"
                @click="isOpen = false"
            >    
                {{ link.n }}
            </a>
        </motion.div>
    </AnimatePresence>
</template>