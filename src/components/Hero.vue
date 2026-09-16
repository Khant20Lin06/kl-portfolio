<script setup lang="ts">
// Hero component with Option 1: Seamless Cinematic Cutout & Ambient Glow
</script>

<template>
  <section class="hero cinematic-hero" id="hero">
    <div class="shell hero-content">
      <div class="hero-text-side">
        <h1 class="reveal-lines" data-lines>
          <span class="line">SOFTWARE</span>
          <span class="line accent">ENGINEER</span>
        </h1>
        <p class="reveal sub hero-headline">
          Building digital products that solve real problems.
        </p>
        <p class="reveal sub hero-desc">
          I build full-stack applications, backend systems, APIs, ERP/POS solutions and AI-powered business tools.
        </p>
        <div class="reveal cta-row">
          <a class="btn primary" href="#work">View Projects</a>
          <a class="btn ghost" href="/Khant_Lin_CV.pdf" download="Khant_Lin_CV.pdf" target="_blank" rel="noopener">Download CV</a>
          <a class="btn ghost" href="#contact">Let's Work Together</a>
        </div>
      </div>

      <div class="hero-avatar-side reveal">
        <!-- Option 1: Floating Cinematic Cutout with Ambient Glow -->
        <div class="avatar-cutout-container">
          <div class="ambient-glow" aria-hidden="true"></div>
          <div class="character-wrapper">
            <img
              src="/images/avatar_cutout.png"
              alt="Khant Lin — Software Engineer Avatar"
              class="hero-avatar-cutout"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-hint mono reveal">SCROLL</div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 5.5rem;
  padding-bottom: 3rem;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  width: 100%;
  flex-wrap: wrap;
}

.hero-text-side {
  flex: 1.2;
  min-width: 320px;
  max-width: 640px;
}

.hero-text-side h1 {
  font-size: clamp(3.5rem, 8vw, 6rem);
  line-height: 1;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin-bottom: 0;
}

.hero-headline {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  line-height: 1.25;
  margin-top: 1.5rem;
  max-width: 25ch;
  font-weight: 500;
  color: #eceae6;
}

.hero-desc {
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #9a9d9f;
  max-width: 48ch;
  line-height: 1.6;
}

.cta-row {
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Avatar Cutout & Ambient Lighting */
.hero-avatar-side {
  flex: 0.9;
  min-width: 300px;
  max-width: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.avatar-cutout-container {
  position: relative;
  width: 100%;
  max-width: 420px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Soft atmospheric glowing aura behind the character */
.ambient-glow {
  position: absolute;
  inset: 5%;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(230, 57, 70, 0.45) 0%,
    rgba(230, 57, 70, 0.2) 35%,
    rgba(127, 217, 154, 0.1) 55%,
    transparent 72%
  );
  filter: blur(50px);
  opacity: 0.85;
  pointer-events: none;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.avatar-cutout-container:hover .ambient-glow {
  opacity: 1;
  transform: scale(1.08);
}

/* Character wrapper with clean floating cutout */
.character-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.avatar-cutout-container:hover .character-wrapper {
  transform: translateY(-6px) scale(1.03);
}

.hero-avatar-cutout {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 20px 35px rgba(0, 0, 0, 0.9))
          drop-shadow(0 0 40px rgba(230, 57, 70, 0.25));
}

.scroll-hint {
  bottom: 2rem;
}

@media (max-width: 960px) {
  .hero-content {
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 4rem;
    padding-bottom: 3rem;
  }

  .hero-content {
    gap: 2rem;
  }

  .hero-avatar-side {
    min-width: 240px;
    max-width: 320px;
    margin: 1.5rem auto 0;
  }

  .avatar-cutout-container {
    max-width: 320px;
  }
}
</style>
