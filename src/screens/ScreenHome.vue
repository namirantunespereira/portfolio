<template>
  <section class="home-screen">
    <div class="hero-container">
      <div class="status-badge">
        <span class="dot blinking"></span>
        <span class="pixel">Sinal estabelecido...</span>
      </div>

      <h1 class="main-title">
        {{ displayedText }}<span class="cursor">_</span>
      </h1>

      <p class="subtitle">
        Desenvolvedora Full-Stack & Arquiteta de Soluções Estelares.
        <br>Transformando linhas de código em galáxias funcionais.
      </p>

      <div class="action-buttons">
        <router-link to="/projects" class="btn-neon primary pixel">
          EXPLORAR MISSÕES
        </router-link>
        
        <a href="https://github.com/namirantunespereira" target="_blank" class="btn-neon secondary pixel">
          ACESSAR GITHUB
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const fullText = "Olá, eu sou Namir."
const displayedText = ref("")

onMounted(() => {
  let i = 0
  const typeWriter = setInterval(() => {
    if (i < fullText.length) {
      displayedText.value += fullText.charAt(i)
      i++
    } else {
      clearInterval(typeWriter) 
    }
  }, 120) 
})
</script>

<style scoped>
.home-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
  padding: 20px;
}

.hero-container {
  background: rgba(16, 22, 45, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(138, 92, 255, 0.2);
  padding: 50px;
  border-radius: 20px;
  max-width: 800px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(0, 255, 100, 0.1);
  color: #00ff64;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 255, 100, 0.3);
}

.dot.blinking {
  width: 8px;
  height: 8px;
  background-color: #00ff64;
  border-radius: 50%;
  animation: blink 1.5s infinite;
}

.main-title {
  font-size: 3.5rem;
  color: #fff;
  margin: 10px 0;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.cursor {
  color: #00f0ff;
  animation: blink 1s step-end infinite;
}

.subtitle {
  color: #a0a0ff;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 40px;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-neon {
  padding: 15px 30px;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 2px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.btn-neon.primary {
  background: transparent;
  color: #00f0ff;
  border: 1px solid #00f0ff;
  box-shadow: inset 0 0 10px rgba(0, 240, 255, 0.2);
}

.btn-neon.primary:hover {
  background: #00f0ff;
  color: #0a0e1e;
  box-shadow: 0 0 20px #00f0ff, inset 0 0 10px #00f0ff;
}

.btn-neon.secondary {
  background: transparent;
  color: #8a5cff;
  border: 1px solid #8a5cff;
}

.btn-neon.secondary:hover {
  background: #8a5cff;
  color: #fff;
  box-shadow: 0 0 20px #8a5cff;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>