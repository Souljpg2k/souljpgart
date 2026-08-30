<script setup>
import { motion } from 'motion-v'

const links = [
    { id: 1, n: 'artstation', url: 'https://www.artstation.com/souljpg' },
    { id: 2, n: 'pixiv', url: 'https://www.pixiv.net/en/users/73130815' },
    { id: 3, n: 'x', url: 'https://x.com/souljpg_' },
    { id: 4, n: 'kofi', url: 'https://ko-fi.com/soul111' }
]
</script>

<template>
    <div class="bg-black/80 w-screen h-14 fixed top-0 z-40 flex justify-between items-center pl-5 pr-5">
        <div class="text-white leading-0.5">
            <h1 class="text-3xl font-eb">souljpgart</h1>
        </div>
        <div class="text-white space-x-3 select-none font-dm">
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
    </div>
</template>