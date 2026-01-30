<template>
  <section class="stack">
    <header class="head">
      <h2 class="pixel">{{ t('skills.title') }}</h2>
      <p class="muted">{{ t('skills.subtitle') }}</p>
    </header>

    <div class="grid">
      <div class="card"><div class="inner">
        <div class="pixel">{{ t('skills.front') }}</div>
        <ul class="list">
          <li>Vue.js • TypeScript • UX</li>
          <li>React • Angular</li>
          <li>HTML/CSS/JS</li>
        </ul>
      </div></div>

      <div class="card"><div class="inner">
        <div class="pixel">{{ t('skills.back') }}</div>
        <ul class="list">
          <li>Node.js • APIs REST</li>
          <li>Spring Boot • Camunda</li>
          <li>.NET • SQL • PostgreSQL • MongoDB</li>
        </ul>
      </div></div>

      <div class="card"><div class="inner">
        <div class="pixel">{{ t('skills.data') }}</div>
        <ul class="list">
          <li>Python • ETL • Flask</li>
          <li>Docker • AWS • Azure</li>
          <li>Terraform (IaC)</li>
        </ul>
      </div></div>
    </div>

    <div class="card">
      <div class="inner">
        <div class="pixel">{{ t('skills.next') }}</div>
        <p class="muted">Adicionar repositórios reais para essas missões e substituir os WebP placeholders.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'
const { t } = useI18n()
</script>

<style scoped>
.head{margin-bottom:12px}
h2{margin:0; font-size:1rem}
.stack{display:grid; gap:18px}
.list{margin:10px 0 0; padding-left:18px; color:var(--muted)}
</style>
