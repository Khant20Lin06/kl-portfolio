<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isNavOpen = ref(false)
const isScrolled = ref(false)

function openNav() {
  isNavOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeNav() {
  isNavOpen.value = false
  document.body.style.overflow = ''
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isNavOpen.value) {
    closeNav()
  }
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <div>
    <a href="#main" class="skip-link">Skip to content</a>

    <header id="siteHeader" :class="{ scrolled: isScrolled }">
      <span class="brand">Khant Lin</span>
      <nav>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <button
        id="menuBtn"
        class="menu-btn"
        aria-label="Open menu"
        :aria-expanded="isNavOpen"
        @click="openNav"
      >
        <span></span><span></span><span></span>
      </button>
    </header>

    <nav
      id="navOverlay"
      class="nav-overlay"
      :class="{ open: isNavOpen }"
      :aria-hidden="!isNavOpen"
    >
      <div class="nav-overlay-top">
        <span class="brand"><span class="mono">&lt;KL/&gt;</span> Khant Lin</span>
        <button
          id="closeMenuBtn"
          class="close-btn"
          aria-label="Close menu"
          @click="closeNav"
        >
          ✕
        </button>
      </div>
      <ul class="nav-overlay-links">
        <li><a href="#hero" @click="closeNav">Home</a></li>
        <li><a href="#work" @click="closeNav">Work</a></li>
        <li><a href="#experience" @click="closeNav">Experience</a></li>
        <li><a href="#skills" @click="closeNav">Skills</a></li>
        <li><a href="#about" @click="closeNav">About</a></li>
        <li><a href="#contact" @click="closeNav">Contact</a></li>
      </ul>
      <div class="nav-overlay-bottom">
        <span>github.com/Khant20Lin06</span>
        <span>Based in Surat Thani, Thailand</span>
      </div>
    </nav>
  </div>
</template>
