<template>
  <section class="about-screen">
    <h1 class="pixel title-glow">Registro da Capitã</h1>

    <div class="content-grid">
      <div class="glass-panel bio">
        <h3 class="neon-text">Transmissão Recebida...</h3>
        <p>
          Olá, Universo! Sou <strong>Namir</strong>, uma desenvolvedora Full-Stack apaixonada por construir ecossistemas digitais. 
          <br><br>
          Minha missão é unir o design visual impressionante do Front-end com a lógica robusta e segura do Back-end. Quando não estou programando APIs ou desenhando interfaces, estou explorando novas tecnologias para aprimorar minhas habilidades estelares.
        </p>
      </div>

      <div class="glass-panel skills">
        <h3 class="neon-text">Nível de Energia do Sistema</h3>

        <div class="skill" v-for="skill in skills" :key="skill.name">
          <div class="skill-info">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-level">{{ skill.level }}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ '--target-width': skill.level + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const skills = ref([
  { name: 'Vue.js / Front-end', level: 90 },
  { name: 'Node.js / Express', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'MongoDB / Banco de Dados', level: 75 },
  { name: 'Git & GitHub', level: 85 }
])
</script>

<style scoped>
.about-screen {
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
  color: white;
}

.title-glow {
  text-align: center;
  color: #fff;
  text-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 30px;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr; 
  }
}

.glass-panel {
  background: rgba(16, 22, 45, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(138, 92, 255, 0.3);
  padding: 30px;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.glass-panel:hover {
  transform: translateY(-5px);
  border-color: #00f0ff;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.1);
}

.neon-text {
  color: #00f0ff;
  margin-bottom: 20px;
  font-family: var(--pixel), monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
}

p {
  line-height: 1.8;
  color: #c0c0d0;
}

.skill {
  margin-bottom: 20px;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.9rem;
  font-weight: bold;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #333;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #8a5cff, #00f0ff);
  width: 0;
  animation: fillBar 1.5s ease-out forwards; 
  box-shadow: 0 0 10px #00f0ff;
}

@keyframes fillBar {
  to {
    width: var(--target-width);
  }
}
</style>