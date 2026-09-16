import { onMounted, onUnmounted, nextTick } from 'vue'

export function useScrollReveal() {
  let revealObserver: IntersectionObserver | null = null
  let statsObserver: IntersectionObserver | null = null

  const updateProjectStack = () => {
    const cards = document.querySelectorAll<HTMLElement>('.project-card-inner')
    if (!cards.length) return
    const isMobile = window.innerWidth <= 860
    cards.forEach((card) => {
      if (isMobile) {
        card.style.transform = ''
        card.style.filter = ''
        return
      }
      const parent = card.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      const progress = Math.min(Math.max((0 - rect.top) / (rect.height || 1), 0), 1)
      const scale = 1 - progress * 0.05
      const dim = progress * 0.35
      card.style.transform = `scale(${scale})`
      card.style.filter = `brightness(${1 - dim})`
    })
  }

  const initObservers = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Scroll reveal observer
    const targets = document.querySelectorAll('.reveal, .reveal-lines')
    if (prefersReducedMotion) {
      targets.forEach((el) => el.classList.add('in'))
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in')
              revealObserver?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
      )
      targets.forEach((el) => revealObserver?.observe(el))
    }

    // Number count-up observer
    const nums = document.querySelectorAll<HTMLElement>('.stats .num[data-count]')
    statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          if (el.dataset.static) {
            el.textContent = el.dataset.static
            statsObserver?.unobserve(el)
            return
          }
          const target = parseInt(el.dataset.count || '0', 10)
          const duration = prefersReducedMotion ? 1 : 1200
          const start = performance.now()
          function tick(now: number) {
            const t = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            el.textContent = String(Math.round(eased * target)).padStart(2, '0')
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          statsObserver?.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )
    nums.forEach((el) => statsObserver?.observe(el))

    // Project stack scroll listener
    window.addEventListener('scroll', updateProjectStack, { passive: true })
    window.addEventListener('resize', updateProjectStack)
    updateProjectStack()
  }

  onMounted(() => {
    nextTick(() => {
      initObservers()
    })
  })

  onUnmounted(() => {
    revealObserver?.disconnect()
    statsObserver?.disconnect()
    window.removeEventListener('scroll', updateProjectStack)
    window.removeEventListener('resize', updateProjectStack)
  })

  return {
    initObservers
  }
}
