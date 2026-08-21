import { ref, computed } from 'vue'
import { useI18n } from './i18n'
import type { ProjectJsonItem, DisplayProject, LocalMission } from './types'

const STORAGE_KEY = 'portfolio.localMissions'

function loadLocalMissions(): LocalMission[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveLocalMissions(missions: LocalMission[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(missions))
  } catch {
    // Private browsing / storage disabled - the visitor just won't see their mission persist
    // across reloads. Not worth surfacing an error for a decorative feature.
  }
}

export function useProjects() {
  const curated = ref<ProjectJsonItem[]>([])
  const localMissions = ref<LocalMission[]>(loadLocalMissions())
  const loading = ref(true)
  const error = ref<string | null>(null)
  const { t } = useI18n()

  const fetchProjects = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await fetch(`${import.meta.env.BASE_URL}projects.json`)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      curated.value = await response.json()
    } catch (err) {
      console.error('Não foi possível carregar projects.json:', err)
      error.value = t('projects.error')
    } finally {
      loading.value = false
    }
  }

  const addMission = (data: { item: string; destino: string; tech: string[]; code: string }) => {
    const mission: LocalMission = { id: `local-${Date.now()}`, ...data }
    localMissions.value = [mission, ...localMissions.value]
    saveLocalMissions(localMissions.value)
  }

  const deleteMission = (id: string) => {
    localMissions.value = localMissions.value.filter(m => m.id !== id)
    saveLocalMissions(localMissions.value)
  }

  const projects = computed<DisplayProject[]>(() => {
    const curatedDisplay: DisplayProject[] = curated.value.map(p => ({
      id: `curated-${p.id}`,
      title: p.title,
      tagline: t(`projects.card.${p.i18nKey}.desc`),
      tech: p.tech,
      badge: `${p.difficulty} · ${p.role}`,
      thumbnail: p.thumbnail ? `${import.meta.env.BASE_URL}${p.thumbnail}` : undefined,
      demo: p.demo,
      code: p.code,
      deletable: false
    }))

    const localDisplay: DisplayProject[] = localMissions.value.map(m => ({
      id: m.id,
      title: m.item,
      tagline: `📍 Destino: ${m.destino}`,
      tech: m.tech,
      badge: 'Embarque',
      code: m.code,
      deletable: true
    }))

    return [...localDisplay, ...curatedDisplay]
  })

  return { projects, fetchProjects, addMission, deleteMission, loading, error }
}
