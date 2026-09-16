<script setup lang="ts">
const items = [
  { name: 'NestJS', bold: true },
  { name: 'Express.js', bold: false },
  { name: 'TypeScript', bold: true },
  { name: 'Python', bold: false },
  { name: 'Django', bold: true },
  { name: 'React', bold: false },
  { name: 'Next.js', bold: true },
  { name: 'Vue.js', bold: false },
  { name: 'PostgreSQL', bold: true },
  { name: 'MySQL', bold: true },
  { name: 'MongoDB', bold: false },
  { name: 'Redis', bold: true },
  { name: 'REST API', bold: false },
  { name: 'JWT / RBAC', bold: true },
  { name: 'WebSocket', bold: false },
  { name: 'Swagger/OpenAPI', bold: true },
  { name: 'Qdrant / RAG', bold: false },
  { name: 'Docker', bold: true },
  { name: 'Kubernetes', bold: false },
  { name: 'Kafka', bold: true },
  { name: 'BullMQ', bold: false },
  { name: 'Flutter', bold: true },
  { name: 'n8n', bold: true },
  { name: 'Git / CI-CD', bold: false },
]
</script>

<template>
  <div class="stack-marquee" aria-hidden="true">
    <div class="track">
      <!-- Repeat 2 times for seamless infinite scroll -->
      <template v-for="loop in 2" :key="loop">
        <span v-for="(item, idx) in items" :key="`${loop}-${idx}`">
          <b v-if="item.bold">{{ item.name }}</b>
          <template v-else>{{ item.name }}</template>
        </span>
      </template>
    </div>
  </div>
</template>
