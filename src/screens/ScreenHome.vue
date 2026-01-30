<template>
  <section class="hero">
    <div class="card">
      <div class="inner">
        <h1 class="pixel">{{ t('home.title') }}</h1>
        <p class="muted">{{ t('home.subtitle') }}</p>

        <div class="cta">
          <RouterLink class="btn" to="/projects">{{ t('home.cta1') }}</RouterLink>
          <RouterLink class="btn gold" to="/experience">{{ t('home.cta2') }}</RouterLink>
          <RouterLink class="btn secondary" to="/skills">{{ t('home.cta3') }}</RouterLink>
          <RouterLink class="btn secondary" to="/contact">{{ t('home.cta4') }}</RouterLink>
        </div>

        <div class="tips">
          <div class="tip">
            <div class="pixel">{{ t('home.tipTitle') }}</div>
            <div class="muted">{{ t('home.tipText') }}</div>
          </div>
          <div class="tip">
            <div class="pixel">{{ t('home.goalTitle') }}</div>
            <div class="muted">{{ t('home.goalText') }}</div>
          </div>
        </div>
      </div>
    </div>

    <MiniGame />
  </section>
</template>

<script setup lang="ts">
import MiniGame from '../components/MiniGame.vue'
import { useI18n } from '../i18n'
const { t } = useI18n()
</script>

<style scoped>
.hero{display:grid; gap:18px}
h1{margin:0 0 10px; font-size:1.05rem; line-height:1.5}
.cta{display:flex; gap:10px; flex-wrap:wrap; margin-top:14px}
.tips{display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:14px}
.tip{padding:12px; border-radius:14px; border:1px solid rgba(255,255,255,.08); background: rgba(10,14,30,.35)}
@media (max-width: 760px){.tips{grid-template-columns:1fr}}
</style>
