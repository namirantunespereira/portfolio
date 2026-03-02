import { ref } from 'vue'
import axios from 'axios'

interface Carga {
  _id: string; 
  item: string;
  destino: string;
  status: string;
  tech: string[];
  code: string;
}

export function useProjects() {
  const projects = ref<Carga[]>([]) 
  const loading = ref(true)

  const fetchProjects = async () => {
    try {
      loading.value = true
      const response = await axios.get('http://localhost:3000/cargas')
      projects.value = response.data
    } catch (error) {
      console.error("Erro na API:", error)
    } finally {
      loading.value = false
    }
  }

  return { projects, fetchProjects, loading }
}