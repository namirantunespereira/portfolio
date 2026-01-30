<template>
  <section class="stack">
    <header class="head">
      <h2 class="pixel">{{ t('projects.title') }}</h2>
      <p class="muted">{{ t('projects.subtitle') }}</p>
    </header>

    <div v-if="loading" class="card"><div class="inner"><span class="muted">{{ t('projects.loading') }}</span></div></div>
    <div v-else-if="error" class="card"><div class="inner"><span class="muted">{{ t('projects.error') }}: {{ error }}</span></div></div>

    <template v-else>
      <FilterBar v-model="selected" :all-tech="allTech" />

      <div class="grid" aria-label="Lista de projetos">
        <ProjectCard v-for="p in filtered" :key="p.id" :p="p" />
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import FilterBar from '../components/FilterBar.vue'
import { useI18n } from '../i18n'
import { useProjects } from '../useProjects'

const { t } = useI18n()
const selected = ref<string | null>(null)

const { items, loading, error, load } = useProjects()
onMounted(load)

const allTech = computed(() => {
  const s = new Set<string>()
  items.value.forEach(p => p.tech.forEach(t => s.add(t)))
  return Array.from(s).sort((a,b)=>a.localeCompare(b))
})

const filtered = computed(() => {
  if (!selected.value) return items.value
  return items.value.filter(p => p.tech.includes(selected.value!))
})
</script>

<style scoped>
.head{margin-bottom:12px}
h2{margin:0; font-size:1rem}
.stack{display:grid; gap:18px}
</style>
