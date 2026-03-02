<template>
  <section class="projects-screen">
    <h1 class="pixel">Monitor de Cargas Estelares</h1>
    
    <NewMissionForm @mission-added="fetchProjects" />

    <div v-if="loading" class="loading">Sincronizando com a API...</div>
    
    <TransitionGroup name="staggered-fade" tag="div" class="projects-grid" appear>
      <ProjectCard 
        v-for="(carga, index) in projects" 
        :key="carga._id"  :p="carga"
        @delete-me="handleDelete"
        :style="{ '--delay': index * 0.2 + 's' }" 
      />
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import axios from 'axios'
import { useProjects } from '../useProjects' 
import ProjectCard from '../components/ProjectCard.vue'
import NewMissionForm from '../components/NewMissionForm.vue'

const handleDelete = async (id: string) => {
  if(confirm("Deseja realmente abortar esta missão?")) {
    try {
      await axios.delete(`http://localhost:3000/cargas/${id}`)
      fetchProjects() // Atualiza a lista depois de deletar
    } catch (error) {
      console.error("Erro ao deletar:", error)
      alert("Falha de comunicação ao abortar missão.")
    }
  }
}

const { projects, fetchProjects, loading } = useProjects()

onMounted(() => {
  fetchProjects()
})
</script>

<style scoped>
.projects-screen { padding: 20px; color: white; }
.projects-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
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
.loading { color: var(--c); font-family: var(--pixel); text-align: center; margin-top: 50px; }
</style>