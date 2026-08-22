<template>
  <header class="hud">
    <div class="container row">
      <div class="brand">
        <div class="logo mono">N</div>
        <div>
          <div class="mono title">namir</div>
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
        <span class="status-pill mono"><span class="branch-dot"></span>main</span>
        <button class="btn gold" @click="toggleLang" type="button" aria-label="Trocar idioma">
          <span class="mono">{{ lang.toUpperCase() }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'

const { t, toggle, lang } = useI18n()

function toggleLang(){ toggle() }
</script>

<style scoped>
.hud{position:sticky; top:0; z-index:50; background: rgba(10,14,20,.82); backdrop-filter: blur(10px); border-bottom:1px solid var(--outline)}
.row{display:flex; align-items:center; justify-content:space-between; gap:16px; padding:14px 0}
.brand{display:flex; align-items:center; gap:12px}
.logo{width:38px; height:38px; border-radius:8px; display:grid; place-items:center; background: var(--surface-2); border:1px solid var(--outline); color:var(--accent); font-weight:600}
.title{font-size:.95rem; font-weight:600; letter-spacing:.02em}
.subtitle{font-size:.8rem}
.nav{display:flex; gap:4px; flex-wrap:wrap; justify-content:center}
.navlink{
  padding:8px 12px; border-radius:6px; border:1px solid transparent; text-decoration:none; color:var(--muted);
  font-family: var(--font-mono); font-size:.82rem; text-transform:lowercase;
}
.navlink::before{content:'~/'; opacity:.5}
.navlink.router-link-active{color:var(--accent); border-color: var(--outline); background: var(--surface-2)}
.stats{display:flex; align-items:center; gap:10px; flex-wrap:wrap}
.status-pill{
  display:flex; align-items:center; gap:6px; font-size:.76rem; color:var(--muted);
  border:1px solid var(--outline); border-radius:999px; padding:6px 12px; white-space:nowrap;
}
.branch-dot{width:6px; height:6px; border-radius:50%; background:var(--accent-2); box-shadow:0 0 0 3px rgba(52,211,153,.16)}

@media (max-width: 980px){
  .row{flex-direction:column; align-items:flex-start}
  .nav{width:100%}
  .stats{width:100%; justify-content:space-between}
}

@media (max-width: 480px){
  .status-pill{display:none}
  .btn{padding:8px 10px}
}
</style>
