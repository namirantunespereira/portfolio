import type { RouteRecordRaw } from 'vue-router'
import ScreenHome from './screens/ScreenHome.vue'
import ScreenProjects from './screens/ScreenProjects.vue'
import ScreenExperience from './screens/ScreenExperience.vue'
import ScreenSkills from './screens/ScreenSkills.vue'
import ScreenContact from './screens/ScreenContact.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: ScreenHome },
  { path: '/projects', name: 'projects', component: ScreenProjects },
  { path: '/experience', name: 'experience', component: ScreenExperience },
  { path: '/skills', name: 'skills', component: ScreenSkills },
  { path: '/contact', name: 'contact', component: ScreenContact },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]
