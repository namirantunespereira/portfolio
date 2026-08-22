<template>
  <section class="about-screen">
    <p class="eyebrow mono">$ cat about.md</p>
    <h1>Skills</h1>

    <div class="content-grid">
      <div ref="bioEl" class="card bio tilt-card">
        <h3>Sobre</h3>
        <p>
          Olá! Sou <strong>Namir</strong>, desenvolvedor full-stack com foco em construir sistemas
          completos — do banco de dados à interface, passando por infraestrutura e deploy.
          <br><br>
          Gosto de unir um front-end bem cuidado com um back-end robusto e seguro. Quando não estou
          programando APIs ou desenhando interfaces, estou testando ferramentas ou tecnologias que
          ainda não usei em produção.
        </p>
      </div>

      <div ref="skillsEl" class="card skills tilt-card">
        <div class="file-tab">
          <span class="dot"></span>
          <span class="filename">stack.ts</span>
        </div>
        <div class="skills-inner">
          <div class="skill" v-for="skill in skills" :key="skill.name">
            <div class="skill-info mono">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ '--target-width': skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTilt } from '../composables/useTilt'

const bioEl = ref<HTMLElement | null>(null)
const skillsEl = ref<HTMLElement | null>(null)
useTilt(bioEl, 3)
useTilt(skillsEl, 3)

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
  color: var(--text);
}

.eyebrow { color: var(--faint); font-size: .8rem; margin: 0 0 8px; }
h1 { margin: 0 0 40px; font-size: 2rem; }

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}

.card { transition: border-color 0.2s ease; }
.card:hover { border-color: var(--accent); }
.card.bio { padding: 26px; }

h3 {
  color: var(--accent);
  margin: 0 0 18px;
  font-size: 1.1rem;
}

p {
  line-height: 1.8;
  color: var(--muted);
  margin: 0;
}

.skills-inner { padding: 22px 26px; }

.skill {
  margin-bottom: 20px;
}
.skill:last-child { margin-bottom: 0; }

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.82rem;
}
.skill-name { color: var(--text); }
.skill-level { color: var(--faint); }

.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--surface-2);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--outline);
}

.progress-fill {
  height: 100%;
  background: var(--accent);
  width: 0;
  animation: fillBar 1.2s ease-out forwards;
}

@keyframes fillBar {
  to {
    width: var(--target-width);
  }
}
</style>
