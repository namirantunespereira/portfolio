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
.foot{border-top:1px solid rgba(255,255,255,.08); background: rgba(7,11,22,.55); backdrop-filter: blur(10px)}
.row{display:flex; align-items:center; justify-content:space-between; gap:12px; padding:18px 0}
.links{display:flex; gap:10px; flex-wrap:wrap}
</style>
