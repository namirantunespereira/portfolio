<template>
  <footer class="foot">
    <div class="container row">
      <div class="muted">© {{ year }} Namir • Vue + Vite</div>
      <div class="links">
        <a class="btn secondary" href="https://github.com/namirantunespereira" target="_blank" rel="noreferrer">GitHub</a>
        <a class="btn secondary" href="https://www.linkedin.com/in/namir-pereira-47689675/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.foot{border-top:1px solid var(--outline); background: rgba(10,14,20,.7); backdrop-filter: blur(10px)}
.row{display:flex; align-items:center; justify-content:space-between; gap:12px; padding:18px 0}
.row .muted{font-family: var(--font-mono); font-size:.82rem}
.links{display:flex; gap:10px; flex-wrap:wrap}
</style>
