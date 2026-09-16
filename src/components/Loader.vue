<script setup lang="ts">
import { ref, onMounted } from 'vue'

const emit = defineEmits<{
  (e: 'loaded'): void
}>()

const percent = ref('000')
const isExit = ref(false)
const isVisible = ref(true)

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const DURATION = prefersReducedMotion ? 1 : 1200
  const start = performance.now()

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  function tick(now: number) {
    const t = Math.min((now - start) / DURATION, 1)
    const eased = easeInOutCubic(t)
    const pct = Math.round(eased * 100)
    percent.value = String(pct).padStart(3, '0')

    if (t < 1) {
      requestAnimationFrame(tick)
    } else {
      setTimeout(() => {
        isExit.value = true
        document.body.style.overflow = ''
        setTimeout(() => {
          isVisible.value = false
          emit('loaded')
        }, 700)
      }, 150)
    }
  }

  document.body.style.overflow = 'hidden'
  requestAnimationFrame(tick)
})
</script>

<template>
  <div
    v-if="isVisible"
    id="loader"
    :class="{ 'loader-exit': isExit }"
    aria-hidden="true"
  >
    <div class="loader-inner">
      <div class="loader-brand"><span class="mono">&lt;KL/&gt;</span> Khant Lin</div>
      <p>Backend-focused full stack developer.</p>
      <div class="loader-bar-track">
        <div class="loader-bar-fill" :style="{ width: parseInt(percent, 10) + '%' }"></div>
      </div>
      <div class="loader-count-row">
        <span>Loading</span>
        <span class="mono" id="loaderCount">{{ percent }}</span>
      </div>
    </div>
  </div>
</template>
