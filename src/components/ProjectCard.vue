<template>
  <article class="card" tabindex="0">
    <img class="thumb" :src="thumbUrl" :alt="p.title + ' thumbnail'" loading="lazy" width="1200" height="675" />
    <div class="inner">
      <header class="top">
        <h3 class="pixel">{{ p.title }}</h3>
        <div class="badges" aria-label="Badges">
          <span class="badge" :data-diff="p.difficulty">{{ p.difficulty }}</span>
          <span class="badge role">{{ p.role }}</span>
        </div>
      </header>

      <p class="muted">{{ desc }}</p>

      <div class="tech" aria-label="Tecnologias">
        <TechIcon v-for="tch in p.tech" :key="tch" :tech="tch" />
      </div>

      <div class="actions">
        <a class="btn" :href="p.code" target="_blank" rel="noreferrer">{{ t('misc.code') }}</a>
        <a v-if="p.demo" class="btn secondary" :href="p.demo" target="_blank" rel="noreferrer">{{ t('misc.demo') }}</a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ProjectJsonItem } from '../types'
import { useI18n } from '../i18n'
import TechIcon from './TechIcon.vue'

const { t } = useI18n()
const props = defineProps<{ p: ProjectJsonItem }>()

const desc = computed(() => t(`projects.card.${props.p.i18nKey}.desc`))

const thumbUrl = computed(() => {
  const base = import.meta.env.BASE_URL
  const path = props.p.thumbnail.replace(/^\//, '')
  return `${base}${path}`
})
</script>

<style scoped>
.thumb{width:100%; height:auto; aspect-ratio:16/9; object-fit:cover; display:block; border-bottom:1px solid rgba(255,255,255,.08)}
.top{display:flex; align-items:flex-start; justify-content:space-between; gap:10px}
h3{margin:0; font-size:.85rem}
.badges{display:flex; gap:8px; flex-wrap:wrap; justify-content:flex-end}
.badge{font-family: var(--pixel); font-size:.62rem; padding:8px 10px; border-radius:999px; border:1px solid var(--outline); background: rgba(10,14,30,.55); color: var(--muted)}
.badge[data-diff="Easy"]{color: var(--g)}
.badge[data-diff="Medium"]{color: var(--c)}
.badge[data-diff="Hard"]{color: var(--gold); border-color: rgba(212,175,55,.55)}
.badge.role{color: var(--p)}
.tech{display:flex; flex-wrap:wrap; gap:8px; margin-top:10px}
.actions{display:flex; gap:10px; margin-top:14px; flex-wrap:wrap}
</style>
