<template>
  <header class="hud">
    <div class="container row">
      <div class="brand">
        <div class="logo pixel">N</div>
        <div>
          <div class="pixel title">NAMIR</div>
          <div class="muted subtitle">{{ t('hud.role') }}</div>
        </div>
      </div>

      <nav class="nav" aria-label="Navegação">
        <RouterLink class="navlink" to="/">{{ t('nav.home') }}</RouterLink>
        <RouterLink class="navlink" to="/projects">{{ t('nav.projects') }}</RouterLink>
        <RouterLink class="navlink" to="/experience">{{ t('nav.experience') }}</RouterLink>
        <RouterLink class="navlink" to="/skills">{{ t('nav.skills') }}</RouterLink>
        <RouterLink class="navlink" to="/contact">{{ t('nav.contact') }}</RouterLink>
      </nav>

      <div class="stats">
        <div class="stat">
          <div class="pixel">LV 07</div>
          <div class="xp" aria-label="XP"><div :style="{width: xp+'%'}"></div></div>
        </div>

        <button class="btn gold" @click="toggleLang" type="button" aria-label="Trocar idioma">
          <span class="pixel">{{ lang.toUpperCase() }}</span>
          <span class="muted">PT/EN</span>
        </button>

        <button class="btn secondary" @click="toggleSound" type="button" :aria-label="t('hud.sound')">
          <span class="pixel">{{ t('hud.sound') }}</span>
          <span class="muted">{{ soundOn ? t('hud.on') : t('hud.off') }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from '../i18n'

const { t, toggle, lang } = useI18n()
const soundOn = ref(false)
const xp = computed(() => 62)

function toggleSound(){ soundOn.value = !soundOn.value }
function toggleLang(){ toggle() }
</script>

<style scoped>
.hud{position:sticky; top:0; z-index:50; background: rgba(7,11,22,.58); backdrop-filter: blur(10px); border-bottom:1px solid rgba(255,255,255,.08)}
.row{display:flex; align-items:center; justify-content:space-between; gap:16px; padding:14px 0}
.brand{display:flex; align-items:center; gap:12px}
.logo{width:42px; height:42px; border-radius:14px; display:grid; place-items:center; background: linear-gradient(135deg, rgba(138,92,255,.35), rgba(0,240,255,.22)); border:1px solid rgba(255,255,255,.10)}
.title{font-size:.82rem}
.subtitle{font-size:.86rem}
.nav{display:flex; gap:10px; flex-wrap:wrap; justify-content:center}
.navlink{padding:10px 12px; border-radius:12px; border:1px solid transparent; text-decoration:none; color:var(--muted)}
.navlink.router-link-active{color:var(--text); border-color: rgba(0,240,255,.25); background: rgba(0,240,255,.06)}
.stats{display:flex; align-items:center; gap:10px; flex-wrap:wrap}
.stat{display:flex; flex-direction:column; gap:6px; min-width:150px}
@media (max-width: 980px){
  .row{flex-direction:column; align-items:flex-start}
  .stats{width:100%; justify-content:space-between}
  .stat{width:100%}
}
</style>
