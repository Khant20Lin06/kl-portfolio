<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface TabInfo {
  src: string
  url: string
  badge: string
  label: string
  sub: string
}

// Lightbox state
const lightboxOpen = ref(false)
const lightboxSrc = ref('')
const lightboxTitle = ref('')

function openLightbox(src: string, title: string) {
  lightboxSrc.value = src
  lightboxTitle.value = title
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && lightboxOpen.value) {
    closeLightbox()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

// Project 1: Fashion ERP
const p1Tabs: TabInfo[] = [
  { src: '/images/pos-dashboard.png', url: 'fashion-erp.vercel.app', badge: 'Mobile POS · Offline-First SQLite Sync', label: 'Mobile POS', sub: 'Offline + Sync' },
  { src: '/images/module-map.png', url: 'fashion-erp.vercel.app/architecture', badge: 'Architecture · 25 Business Domain Modules', label: 'Domain Map', sub: '25 Modules' },
  { src: '/images/ai-assistant.png', url: 'fashion-erp.vercel.app/copilot', badge: 'ERP Copilot · Natural-Language Inventory Queries', label: 'AI Assistant', sub: 'ERP Copilot' },
  { src: '/images/api-docs.png', url: 'github.com/Khant20Lin06/erp-fashion-api', badge: 'API Contract · Enterprise REST & Swagger Docs', label: 'API Contract', sub: 'REST / OpenAPI' },
]
const p1Active = ref(0)

// Project 2: WerTe
const p2Tabs: TabInfo[] = [
  { src: '/images/werte-tracking.svg', url: 'wer-tee-admin.vercel.app', badge: 'Live Dispatch · Real-time WebSocket Order Tracking', label: 'Live Tracking', sub: 'WebSocket Gateway' },
  { src: '/images/werte-admin.svg', url: 'wer-tee-admin.vercel.app/orders', badge: 'Operations Console · 9-Stage Order State Machine', label: 'Ops Console', sub: '9-Stage FSM' },
  { src: '/images/werte-rider.svg', url: 'wer-tee-admin.vercel.app/fleet', badge: 'Rider Telemetry · Redis Geospatial & Connection Pools', label: 'Fleet Telemetry', sub: 'Redis Geo / Chat' },
  { src: '/images/werte-arch.svg', url: 'wer-tee-admin.vercel.app/topology', badge: 'Infrastructure · Modular Monolith & Kubernetes HPA', label: 'Architecture', sub: 'K8s StatefulSets' },
]
const p2Active = ref(0)

// Project 3: AURA
const p3Tabs: TabInfo[] = [
  { src: '/images/01-now-showing-catalog.png', url: 'event-ticket-rust-nu.vercel.app/events', badge: 'Live Discovery · Premier Screenings & Spotlight Showcase', label: 'Live Catalog', sub: 'Spotlight & Events' },
  { src: '/images/02-digital-arena-passes.png', url: 'event-ticket-rust-nu.vercel.app/passes', badge: 'Digital Arena Passes · Live QR Admission & Fan Verification', label: 'Arena Passes', sub: 'QR Fan Passes' },
  { src: '/images/03-seat-inventory-matrix.png', url: 'event-ticket-rust-nu.vercel.app/events/matrix', badge: 'Atomic Locks · Real-time Seat Matrix & Zero Double-Booking', label: 'Seat Matrix', sub: 'Redis SET NX PX' },
  { src: '/images/04-events-ticketing-hub.png', url: 'event-ticket-rust-nu.vercel.app/events/admin', badge: 'Operator Hub · Screening Pipeline & Capacity Controls', label: 'Ingress Hub', sub: 'Capacity Controls' },
]
const p3Active = ref(0)

// Project 4: NeeYrAPI
const p4Tabs: TabInfo[] = [
  { src: '/images/neeyr-arch.svg', url: 'github.com/Khant20Lin06/neryarapi', badge: 'API Architecture · 12-Module Diagram', label: 'Architecture', sub: '12-Module Spec' },
  { src: '/images/neeyr-docs.svg', url: 'github.com/Khant20Lin06/neryarapi#openapi', badge: 'OpenAPI Docs · drf-spectacular Swagger Contract', label: 'API Contract', sub: 'Swagger/OAS 3.0' },
  { src: '/images/neeyr-rbac.svg', url: 'github.com/Khant20Lin06/neryarapi#rbac', badge: 'RBAC Matrix · Custom Hierarchical Access Control', label: 'Permissions', sub: 'Custom RBAC' },
  { src: '/images/neeyr-tests.svg', url: 'github.com/Khant20Lin06/neryarapi#tests', badge: '105 Automated Tests · 100% CI Coverage', label: 'Test Suite', sub: '105 Passed (CI)' },
]
const p4Active = ref(0)
</script>

<template>
  <div>
    <section class="section" id="work">
      <div class="shell">
        <div class="eyebrow mono reveal">FEATURED WORK</div>
        <h2 class="reveal-lines" data-lines>
          <span class="line">Production systems,</span>
          <span class="line">designed &amp; shipped.</span>
        </h2>
      </div>

      <div class="project-stack">
        <!-- Project 1: Fashion ERP -->
        <article class="project-card reveal">
          <div class="project-card-inner">
            <div class="shell project-grid">
              <div>
                <div class="meta mono">FULL STACK DEVELOPER · ERP &amp; AI SOLUTION</div>
                <h3>Fashion ERP &amp; AI</h3>
                <p style="margin-bottom: 0.8rem;">
                  <strong>Problem:</strong> A fashion brand struggled with fragmented inventory, manual billing, and lack of real-time visibility across stores.
                </p>
                <p style="margin-bottom: 0.8rem;">
                  <strong>Solution:</strong> Designed and built an enterprise-grade ERP system from scratch with mobile POS and AI-assisted operational queries.
                </p>
                <p style="margin-bottom: 0.8rem;">
                  <strong>Architecture:</strong> Next.js · Flutter · NestJS · PostgreSQL · Redis · Qdrant · Ollama · Docker
                </p>
                <p>
                  <strong>Result:</strong> Centralized inventory across stores, sub-second POS checkout, offline-first sync, and natural-language ERP copilot for business queries.
                </p>
                <div class="tags">
                  <span>NestJS</span><span>Flutter</span><span>Next.js</span><span>PostgreSQL</span><span>Redis</span><span>Qdrant</span><span>Ollama</span><span>Docker</span>
                </div>
                <div class="project-actions" style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                  <a href="https://fashion-erp.vercel.app/" target="_blank" rel="noopener" class="project-link-btn primary">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    <span>Live Demo</span>
                  </a>
                  <a href="https://github.com/Khant20Lin06/erp-fashion-api" target="_blank" rel="noopener" class="project-link-btn ghost">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    <span>View GitHub</span>
                  </a>
                </div>
              </div>

              <!-- Showcase -->
              <div class="showcase-container project-showcase">
                <div class="mockup-bar">
                  <div class="mockup-dots">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                  </div>
                  <div class="mockup-url mono">
                    <span class="lock-icon">🔒</span>
                    <span class="url-text">{{ p1Tabs[p1Active].url }}</span>
                  </div>
                  <button
                    class="expand-btn"
                    title="Expand image"
                    @click="openLightbox(p1Tabs[p1Active].src, p1Tabs[p1Active].badge)"
                  >
                    <span>⤢</span> Expand
                  </button>
                </div>

                <div
                  class="mockup-screen"
                  @click="openLightbox(p1Tabs[p1Active].src, p1Tabs[p1Active].badge)"
                >
                  <img
                    :src="p1Tabs[p1Active].src"
                    :alt="p1Tabs[p1Active].badge"
                    class="showcase-img"
                  />
                  <div class="screen-overlay-badge mono">
                    {{ p1Tabs[p1Active].badge }}
                  </div>
                </div>

                <div class="showcase-tabs" role="tablist">
                  <button
                    v-for="(tab, idx) in p1Tabs"
                    :key="tab.label"
                    class="tab-item"
                    :class="{ active: p1Active === idx }"
                    role="tab"
                    :aria-selected="p1Active === idx"
                    @click="p1Active = idx"
                  >
                    <span class="tab-label">{{ tab.label }}</span>
                    <span class="tab-sub mono">{{ tab.sub }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Project 2: WerTe -->
        <article class="project-card reveal">
          <div class="project-card-inner">
            <div class="shell project-grid">
              <div>
                <div class="meta mono">BACKEND ARCHITECT · DISTRIBUTED FOOD DELIVERY</div>
                <h3>WerTe — Food Delivery Backend</h3>
                <p style="margin-bottom: 0.8rem;">
                  <strong>Problem:</strong> Need a highly concurrent, reliable backend to handle real-time food delivery operations and tracking.
                </p>
                <p style="margin-bottom: 0.8rem;">
                  <strong>Solution:</strong> Architected a modular monolith backend system capable of handling complex order states and real-time updates.
                </p>
                <p style="margin-bottom: 0.8rem;">
                  <strong>Architecture:</strong> NestJS · PostgreSQL · Redis · WebSocket · BullMQ · Kubernetes
                </p>
                <p>
                  <strong>Result:</strong> 25 Domain Modules, 49 DB Models, WebSocket Tracking, Multi-party Chat, PgBouncer, HPA autoscaling.
                </p>
                <div class="tags">
                  <span>NestJS</span><span>Prisma</span><span>PostgreSQL</span><span>Redis</span><span>WebSocket</span><span>BullMQ</span><span>Kubernetes</span><span>Docker</span>
                </div>
                <div class="project-actions" style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                  <a href="https://wer-tee-admin.vercel.app/" target="_blank" rel="noopener" class="project-link-btn primary">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    <span>Live Demo</span>
                  </a>
                  <a href="https://github.com/Khant20Lin06" target="_blank" rel="noopener" class="project-link-btn ghost">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    <span>View GitHub</span>
                  </a>
                </div>
              </div>

              <!-- Showcase -->
              <div class="showcase-container project-showcase">
                <div class="mockup-bar">
                  <div class="mockup-dots">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                  </div>
                  <div class="mockup-url mono">
                    <span class="lock-icon">🔒</span>
                    <span class="url-text">{{ p2Tabs[p2Active].url }}</span>
                  </div>
                  <button
                    class="expand-btn"
                    title="Expand image"
                    @click="openLightbox(p2Tabs[p2Active].src, p2Tabs[p2Active].badge)"
                  >
                    <span>⤢</span> Expand
                  </button>
                </div>

                <div
                  class="mockup-screen"
                  @click="openLightbox(p2Tabs[p2Active].src, p2Tabs[p2Active].badge)"
                >
                  <img
                    :src="p2Tabs[p2Active].src"
                    :alt="p2Tabs[p2Active].badge"
                    class="showcase-img"
                  />
                  <div class="screen-overlay-badge mono">
                    {{ p2Tabs[p2Active].badge }}
                  </div>
                </div>

                <div class="showcase-tabs" role="tablist">
                  <button
                    v-for="(tab, idx) in p2Tabs"
                    :key="tab.label"
                    class="tab-item"
                    :class="{ active: p2Active === idx }"
                    role="tab"
                    :aria-selected="p2Active === idx"
                    @click="p2Active = idx"
                  >
                    <span class="tab-label">{{ tab.label }}</span>
                    <span class="tab-sub mono">{{ tab.sub }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Project 3: AURA -->
        <article class="project-card reveal">
          <div class="project-card-inner">
            <div class="shell project-grid">
              <div>
                <div class="meta mono">BACKEND DEVELOPER · HIGH-TRAFFIC SYSTEM &amp; ATOMIC LOCKS</div>
                <h3>AURA — High-Concurrency Ticketing Platform</h3>
                <p style="margin-bottom: 0.8rem;">
                  <strong>Problem:</strong> Ticket sales for major events crash due to massive traffic spikes and race conditions (double-bookings).
                </p>
                <p style="margin-bottom: 0.8rem;">
                  <strong>Solution:</strong> Built a high-performance ticketing platform capable of handling 1M+ traffic with 100% data consistency.
                </p>
                <p style="margin-bottom: 0.8rem;">
                  <strong>Architecture:</strong> NestJS · Redis (Atomic Locks) · BullMQ · PostgreSQL · PgBouncer
                </p>
                <p>
                  <strong>Result:</strong> Zero double-bookings, virtual queue traffic limiter, and real-time interactive seat matrix.
                </p>
                <div class="tags">
                  <span>NestJS</span><span>Angular 19</span><span>Redis (Atomic Locks)</span><span>BullMQ</span><span>PostgreSQL</span><span>PgBouncer</span><span>WebSockets</span><span>Kubernetes</span><span>Docker</span>
                </div>
                <div class="project-actions" style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                  <a href="https://event-ticket-rust-nu.vercel.app/events" target="_blank" rel="noopener" class="project-link-btn primary">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    <span>Live Demo</span>
                  </a>
                  <a href="https://github.com/Khant20Lin06/Event-Ticket" target="_blank" rel="noopener" class="project-link-btn ghost">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    <span>View GitHub</span>
                  </a>
                </div>
              </div>

              <!-- Showcase -->
              <div class="showcase-container project-showcase">
                <div class="mockup-bar">
                  <div class="mockup-dots">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                  </div>
                  <div class="mockup-url mono">
                    <span class="lock-icon">🔒</span>
                    <span class="url-text">{{ p3Tabs[p3Active].url }}</span>
                  </div>
                  <button
                    class="expand-btn"
                    title="Expand image"
                    @click="openLightbox(p3Tabs[p3Active].src, p3Tabs[p3Active].badge)"
                  >
                    <span>⤢</span> Expand
                  </button>
                </div>

                <div
                  class="mockup-screen"
                  @click="openLightbox(p3Tabs[p3Active].src, p3Tabs[p3Active].badge)"
                >
                  <img
                    :src="p3Tabs[p3Active].src"
                    :alt="p3Tabs[p3Active].badge"
                    class="showcase-img"
                  />
                  <div class="screen-overlay-badge mono">
                    {{ p3Tabs[p3Active].badge }}
                  </div>
                </div>

                <div class="showcase-tabs" role="tablist">
                  <button
                    v-for="(tab, idx) in p3Tabs"
                    :key="tab.label"
                    class="tab-item"
                    :class="{ active: p3Active === idx }"
                    role="tab"
                    :aria-selected="p3Active === idx"
                    @click="p3Active = idx"
                  >
                    <span class="tab-label">{{ tab.label }}</span>
                    <span class="tab-sub mono">{{ tab.sub }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Project 4: NeeYrAPI -->
        <article class="project-card reveal">
          <div class="project-card-inner">
            <div class="shell project-grid">
              <div>
                <div class="meta mono">BACKEND DEVELOPER · BUSINESS DIRECTORY &amp; AD PLATFORM</div>
                <h3>NeeYrAPI</h3>
                <p style="margin-bottom: 0.8rem;">
                  <strong>Problem:</strong> Needed a centralized backend to power a business directory platform with advertisements, reviews, and high-security access.
                </p>
                <p style="margin-bottom: 0.8rem;">
                  <strong>Solution:</strong> Built a production REST API with comprehensive test coverage and automated OpenAPI specification.
                </p>
                <p style="margin-bottom: 0.8rem;">
                  <strong>Architecture:</strong> Django · Django REST Framework · MySQL · drf-spectacular · Pytest
                </p>
                <p>
                  <strong>Result:</strong> 12 Business Domain Modules, Custom Hierarchical RBAC, 105 Automated Tests (100% CI pass rate).
                </p>
                <div class="tags">
                  <span>Python</span><span>Django</span><span>Django REST Framework</span><span>MySQL</span><span>drf-spectacular</span><span>Pytest</span><span>Swagger/OpenAPI</span>
                </div>
                <div class="project-actions" style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                  <a href="https://github.com/Khant20Lin06/neryarapi" target="_blank" rel="noopener" class="project-link-btn primary">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    <span>View GitHub</span>
                  </a>
                </div>
              </div>

              <!-- Showcase -->
              <div class="showcase-container project-showcase">
                <div class="mockup-bar">
                  <div class="mockup-dots">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                  </div>
                  <div class="mockup-url mono">
                    <span class="lock-icon">🔒</span>
                    <span class="url-text">{{ p4Tabs[p4Active].url }}</span>
                  </div>
                  <button
                    class="expand-btn"
                    title="Expand image"
                    @click="openLightbox(p4Tabs[p4Active].src, p4Tabs[p4Active].badge)"
                  >
                    <span>⤢</span> Expand
                  </button>
                </div>

                <div
                  class="mockup-screen"
                  @click="openLightbox(p4Tabs[p4Active].src, p4Tabs[p4Active].badge)"
                >
                  <img
                    :src="p4Tabs[p4Active].src"
                    :alt="p4Tabs[p4Active].badge"
                    class="showcase-img"
                  />
                  <div class="screen-overlay-badge mono">
                    {{ p4Tabs[p4Active].badge }}
                  </div>
                </div>

                <div class="showcase-tabs" role="tablist">
                  <button
                    v-for="(tab, idx) in p4Tabs"
                    :key="tab.label"
                    class="tab-item"
                    :class="{ active: p4Active === idx }"
                    role="tab"
                    :aria-selected="p4Active === idx"
                    @click="p4Active = idx"
                  >
                    <span class="tab-label">{{ tab.label }}</span>
                    <span class="tab-sub mono">{{ tab.sub }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="shell">
        <p class="also-built reveal">
          Also built: Home Sale &amp; Receipt Management System (Express.js, MongoDB) and a Fashion E-Commerce Platform (Django, Next.js).
        </p>
      </div>
    </section>

    <!-- Lightbox Modal for Fullscreen Screenshot Preview -->
    <div
      class="lightbox-modal"
      :class="{ active: lightboxOpen }"
      :aria-hidden="!lightboxOpen"
    >
      <div class="lightbox-backdrop" @click="closeLightbox"></div>
      <div class="lightbox-content">
        <div class="lightbox-header">
          <span class="mono lightbox-title">{{ lightboxTitle }}</span>
          <button class="lightbox-close" aria-label="Close modal" @click="closeLightbox">&times;</button>
        </div>
        <div class="lightbox-body">
          <img :src="lightboxSrc" :alt="lightboxTitle" />
        </div>
      </div>
    </div>
  </div>
</template>
