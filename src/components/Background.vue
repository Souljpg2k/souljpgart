<script setup>
import { motion } from 'motion-v'
import background from '../assets/background.webp'
</script>

<template>
  <div class="h-screen w-screen overflow-hidden">
    <motion.img
    :initial="{ opacity: 0.5, scale: 1.5 }"
    :animate="{ opacity: 1, scale: 1 }"
    :transition="{ duration: 2, ease: 'anticipate' }"
    :src="background.src"
    alt="background"
    class="h-screen w-screen object-cover select-none pointer-events-none" />
  </div>
</template>