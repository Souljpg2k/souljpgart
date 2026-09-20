<script setup>
import { motion } from "motion-v";
</script>

<template>
	<motion.div
		:initial="{ opacity: 0, scale: 0.8 }"
		:animate="{ opacity: 1, scale: 1 }"
		:transition="{ duration: 4, ease: 'anticipate' }"
		class="hidden md:grid fixed m-7 bottom-0 font-dm text-lg"
	>
		<p>illustrator</p>
		<p>character design</p>
	</motion.div>
</template>