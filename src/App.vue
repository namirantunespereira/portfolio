<template>
  <div class="app">
    <div class="cloud-layer back" aria-hidden="true"></div>
    <div class="cloud-layer mid" aria-hidden="true"></div>
    <div class="cloud-layer" aria-hidden="true"></div>

    <HeaderHUD />
    <main class="container">
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import HeaderHUD from './components/HeaderHUD.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<style scoped>
.app{min-height:100vh; display:flex; flex-direction:column}
main{flex:1}
</style>
