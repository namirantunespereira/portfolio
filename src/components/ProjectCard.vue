<template>
  <article ref="cardEl" class="card tilt-card" tabindex="0">
    <div class="file-tab">
      <span class="dot"></span>
      <span class="filename">{{ fakeFilename }}</span>
    </div>

    <img v-if="p.thumbnail" :src="p.thumbnail" :alt="p.title" class="thumb" loading="lazy" />

    <div class="inner">
      <header class="top">
        <h3>{{ p.title }}</h3>
        <span class="badge status mono">{{ p.badge }}</span>
      </header>

      <p class="tagline">{{ p.tagline }}</p>

      <div class="tech-stack">
        <span v-for="t in p.tech" :key="t" class="tech-tag mono">{{ t }}</span>
      </div>

      <div class="actions">
        <a v-if="p.demo" :href="p.demo" target="_blank" rel="noopener" class="btn-code">
          <span class="mono">demo</span>
        </a>
        <a v-if="p.code" :href="p.code" target="_blank" rel="noopener" class="btn-code">
          <span class="mono">código</span>
        </a>
      </div>

      <button v-if="p.deletable" @click="$emit('delete-me', p.id)" class="btn-delete mono">
        remover projeto
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { DisplayProject } from '../types'
import { useTilt } from '../composables/useTilt'

const props = defineProps<{ p: DisplayProject }>()
defineEmits<{ 'delete-me': [id: string] }>()

const cardEl = ref<HTMLElement | null>(null)
useTilt(cardEl)

// A small cosmetic touch: pick a plausible file extension from the project's
// stack so each card reads like an open editor tab, not a real build artifact.
const EXTENSION_BY_TECH: Record<string, string> = {
  '.net': 'cs', 'c#': 'cs', 'asp.net core': 'cs',
  'typescript': 'ts', 'vue.js': 'vue', 'node.js': 'ts',
  'python': 'py', 'flask': 'py',
  'spring boot': 'java', 'java': 'java', 'camunda': 'java',
  'php': 'php', 'javascript': 'js', 'html5': 'html',
  'terraform': 'tf', 'localstorage': 'js'
}

const fakeFilename = computed(() => {
  const slug = props.p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  const match = props.p.tech.find(t => EXTENSION_BY_TECH[t.toLowerCase()])
  const ext = match ? EXTENSION_BY_TECH[match.toLowerCase()] : 'txt'
  return `${slug}.${ext}`
})
</script>

<style scoped>
.card {
  border-color: var(--outline);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
}

.card:hover {
  border-color: var(--accent);
  box-shadow: 0 0 30px rgba(91, 157, 255, 0.14);
}

.thumb {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  border-bottom: 1px solid var(--outline);
}

.inner { padding: 22px; }

.top { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; }
.top h3 { margin: 0; font-size: 1.05rem; font-weight: 600; }

.tech-stack {
  display: flex;
  gap: 8px;
  margin: 15px 0;
  flex-wrap: wrap;
}

.tech-tag {
  background: var(--surface-2);
  border: 1px solid var(--outline);
  color: var(--accent);
  font-size: 0.7rem;
  padding: 3px 8px;
  border-radius: 4px;
}

.actions { display: flex; gap: 10px; flex-wrap: wrap; }

.btn-code {
  display: inline-block;
  margin-top: 10px;
  padding: 9px 18px;
  background: transparent;
  border: 1px solid var(--outline);
  border-radius: 6px;
  color: var(--text);
  text-decoration: none;
  font-size: 0.78rem;
  transition: 0.2s;
}

.btn-code:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.btn-delete {
  background: transparent;
  border: 1px solid rgba(248, 81, 73, 0.35);
  border-radius: 6px;
  color: var(--danger);
  padding: 8px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  font-size: 0.72rem;
  transition: 0.2s;
}

.btn-delete:hover {
  background: rgba(248, 81, 73, 0.1);
  border-color: var(--danger);
}

.tagline { color: var(--muted); font-size: 0.9rem; }
.badge.status { color: var(--accent-2); border: 1px solid rgba(52, 211, 153, 0.35); font-size: 0.7rem; padding: 4px 8px; border-radius: 4px; white-space: nowrap; }
</style>
