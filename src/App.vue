<script setup lang="ts">
import Loader from './components/Loader.vue'
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import Marquee from './components/Marquee.vue'
import Capabilities from './components/Capabilities.vue'
import AiEngineering from './components/AiEngineering.vue'
import Process from './components/Process.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import { useScrollReveal } from './composables/useScrollReveal'

const { initObservers } = useScrollReveal()

function handleLoaded() {
  initObservers()
}
</script>

<template>
  <div id="root-app">
    <Loader @loaded="handleLoaded" />
    <Navigation />
    <main id="main">
      <Hero />
      <Marquee />
      <Projects />
      <Experience />
      <Skills />
      <Capabilities />
      <AiEngineering />
      <About />
      <Process />
      <Contact />
    </main>
  </div>
</template>
