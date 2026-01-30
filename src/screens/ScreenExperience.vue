<template>
  <section class="stack">
    <header class="head">
      <h2 class="pixel">{{ t('experience.title') }}</h2>
      <p class="muted">{{ t('experience.subtitle') }}</p>
    </header>

    <ExperienceTimeline :items="experience" />
  </section>
</template>

<script setup lang="ts">
import ExperienceTimeline from '../components/ExperienceTimeline.vue'
import { experience } from '../data/experience'
import { useI18n } from '../i18n'
const { t } = useI18n()
</script>

<style scoped>
.stack{display:grid; gap:18px}
.head{margin-bottom:10px}
h2{margin:0; font-size:1rem}
</style>
