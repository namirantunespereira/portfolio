<template>
  <span class="chip" :title="tech" aria-hidden="true">
    <span class="ico">{{ icon }}</span>
    <span class="lbl">{{ tech }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ tech: string }>()

const icon = computed(() => {
  const t = props.tech
  const map: Record<string,string> = {
    'Node.js': '🟩',
    'Vue.js': '🟢',
    'TypeScript': '🔷',
    'Python': '🐍',
    'Spring Boot': '🌱',
    'Docker': '🐳',
    'AWS': '☁️',
    'Azure': '🔷',
    'Terraform': '🧱',
    'PostgreSQL': '🐘',
    'MongoDB': '🍃',
    'SQL': '🗄️',
    '.NET': '🟪',
    'React': '⚛️',
    'Angular': '🅰️',
    'Camunda': '🧩',
    'Flask': '🍶',
    'Rails': '🚂',
    'HTML': '🧩',
    'CSS': '🎨',
    'JS': '✨',
    'API': '🔌',
    'framer-motion': '🎞️',
    'UX': '🧠'
  }
  return map[t] ?? '✨'
})
</script>

<style scoped>
.chip{display:inline-flex; align-items:center; gap:8px; padding:8px 10px; border-radius:999px; border:1px solid var(--outline); background: rgba(10,14,30,.55)}
.ico{filter: drop-shadow(0 0 10px rgba(0,240,255,.12))}
.lbl{font-family: var(--pixel); font-size:.62rem; color: var(--muted)}
</style>
