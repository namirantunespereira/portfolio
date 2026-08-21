<template>
  <section class="projects-screen">
    <h1 class="pixel">Monitor de Cargas Estelares</h1>

    <NewMissionForm @mission-added="addMission" />

    <div v-if="loading" class="loading">Sincronizando com a API...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <TransitionGroup v-else name="staggered-fade" tag="div" class="projects-grid" appear>
      <ProjectCard
        v-for="(item, index) in projects"
        :key="item.id"
        :p="item"
        @delete-me="deleteMission"
        :style="{ '--delay': index * 0.08 + 's' }"
      />
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useProjects } from '../useProjects'
import ProjectCard from '../components/ProjectCard.vue'
import NewMissionForm from '../components/NewMissionForm.vue'

const { projects, fetchProjects, addMission, deleteMission, loading, error } = useProjects()

onMounted(() => {
  fetchProjects()
})
</script>

<style scoped>
.projects-screen { padding: 20px; color: white; }
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  gap: 20px;
  margin-top: 20px;
}

.staggered-fade-enter-active {
  transition: all 0.6s ease-out;
  transition-delay: var(--delay);
}

.staggered-fade-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
  filter: blur(10px);
}

.staggered-fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.loading, .error { color: var(--c); font-family: var(--pixel); text-align: center; margin-top: 50px; }
.error { color: var(--danger); }
</style>
