<template>
  <section class="timeline card">
    <div class="inner">
      <div class="line" aria-hidden="true"></div>

      <article v-for="(item, idx) in items" :key="idx" class="node" :class="{current: item.current}">
        <div class="dot" aria-hidden="true"></div>
        <div class="panel">
          <header class="top">
            <div>
              <div class="pixel role">{{ item.title }}</div>
              <div class="muted meta">{{ item.company }} • {{ item.location }}</div>
            </div>
            <div class="period">
              <span class="badge" :class="item.current ? 'gold' : 'cyan'">{{ item.period }}</span>
            </div>
          </header>

          <div class="cols">
            <div>
              <div class="pixel small">{{ t('experience.quests') }}</div>
              <ul class="list">
                <li v-for="q in item.quests" :key="q">{{ q }}</li>
              </ul>
            </div>
            <div>
              <div class="pixel small">{{ t('experience.loot') }}</div>
              <ul class="tags">
                <li v-for="l in item.loot" :key="l">{{ l }}</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ExperienceItem } from '../data/experience'
import { useI18n } from '../i18n'
const { t } = useI18n()

defineProps<{ items: ExperienceItem[] }>()
</script>

<style scoped>
.inner{position:relative; padding:20px 18px}
.line{position:absolute; left:22px; top:22px; bottom:22px; width:2px; background: linear-gradient(180deg, rgba(138,92,255,.55), rgba(0,240,255,.35), rgba(60,255,122,.25)); opacity:.9}
.node{display:grid; grid-template-columns: 44px 1fr; gap:12px; margin: 14px 0}
.dot{width:14px; height:14px; border-radius:50%; margin-left:16px; margin-top:10px; background: rgba(0,240,255,.18); border:1px solid rgba(0,240,255,.45); box-shadow: 0 0 22px rgba(0,240,255,.12)}
.node.current .dot{background: rgba(212,175,55,.18); border-color: rgba(212,175,55,.65); box-shadow: 0 0 26px rgba(212,175,55,.18)}
.panel{background: rgba(10,14,30,.35); border:1px solid rgba(255,255,255,.08); border-radius:16px; padding:14px}
.top{display:flex; justify-content:space-between; gap:10px; flex-wrap:wrap}
.role{font-size:.78rem}
.badge{font-family: var(--pixel); font-size:.62rem; padding:8px 10px; border-radius:999px; border:1px solid var(--outline); background: rgba(10,14,30,.55)}
.badge.cyan{color: var(--c)}
.badge.gold{color: var(--gold); border-color: rgba(212,175,55,.55)}
.cols{display:grid; grid-template-columns: 1.3fr .7fr; gap:14px; margin-top:12px}
.small{font-size:.62rem}
.list{margin:10px 0 0; padding-left:18px; color:var(--muted)}
@media (max-width: 900px){ .cols{grid-template-columns: 1fr} }
</style>
