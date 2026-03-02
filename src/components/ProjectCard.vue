<template>
  <article class="card" tabindex="0">
    <div class="inner">
      <header class="top">
        <h3 class="pixel">{{ p.item }}</h3>
        <span class="badge status">{{ p.status }}</span>
      </header>

      <p class="destination">📍 Destino: {{ p.destino }}</p>

      <div class="tech-stack">
        <span v-for="t in p.tech" :key="t" class="tech-tag">{{ t }}</span>
      </div>

      <div class="actions">
        <a :href="p.code" target="_blank" class="btn-code">
          <span class="pixel">VER CÓDIGO</span>
        </a>
      </div>

      <button @click="$emit('delete-me', p._id)" class="btn-delete pixel">
        ABORTAR MISSÃO
      </button>

    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{ p: any }>()
</script>

<style scoped>
.card {
  background: rgba(16, 22, 45, 0.5);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 240, 255, 0.1);
  padding: 24px;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: #00f0ff;
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.2);
}

.tech-stack {
  display: flex;
  gap: 8px;
  margin: 15px 0;
  flex-wrap: wrap;
}

.tech-tag {
  background: rgba(138, 92, 255, 0.1);
  border: 1px solid rgba(138, 92, 255, 0.3);
  color: #c084fc;
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 4px;
}

.btn-code {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background: transparent;
  border: 1px solid #00f0ff;
  color: #00f0ff;
  text-decoration: none;
  font-size: 0.75rem;
  transition: 0.3s;
}

.btn-code:hover {
  background: #00f0ff;
  color: #0a0e1e;
  box-shadow: 0 0 15px #00f0ff;
}

.btn-delete {
  background: transparent;
  border: 1px solid #ff4d4d; 
  color: #ff4d4d;
  padding: 8px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  font-size: 0.7rem;
  transition: 0.3s;
}

.btn-delete:hover {
  background: #ff4d4d;
  color: white;
  box-shadow: 0 0 10px #ff4d4d;
}

.destination { color: #a0a0ff; font-size: 0.9rem; }
.badge.status { color: #00ff64; border: 1px solid #00ff64; font-size: 0.7rem; padding: 4px 8px; }
</style>