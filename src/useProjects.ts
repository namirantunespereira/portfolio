import { ref } from 'vue'
import type { ProjectJsonItem } from './types'

export function useProjects(){
  const items = ref<ProjectJsonItem[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  async function load(){
    loading.value = true
    error.value = null
    try{
      const url = `${import.meta.env.BASE_URL}projects.json`
      const res = await fetch(url)
      if(!res.ok) throw new Error(`HTTP ${res.status}`)
      items.value = await res.json()
    }catch(e:any){
      error.value = e?.message ?? 'Erro ao carregar projects.json'
    }finally{
      loading.value = false
    }
  }

  return { items, loading, error, load }
}
