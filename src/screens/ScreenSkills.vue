<template>
  <section class="about-screen">
    <p class="eyebrow mono">$ cat about.md</p>
    <h1>Skills</h1>

    <div class="content-grid">
      <div ref="bioEl" class="card bio tilt-card">
        <h3>Sobre</h3>
        <p>
          Olá! Sou <strong>Namir</strong>, desenvolvedor full-stack com quase uma década passando
          por suporte, infraestrutura e desenvolvimento — hoje construindo sistemas completos, do
          banco de dados à interface, passando por infraestrutura e deploy.
          <br><br>
          Já passei por ERPs fiscais em Delphi, APIs em Node.js e Spring Boot, dashboards em Vue e
          React, e infraestrutura como código na AWS e Azure. Gosto de entender o problema de
          ponta a ponta antes de escrever a primeira linha.
        </p>
      </div>

      <div ref="skillsEl" class="card skills tilt-card">
        <div class="file-tab">
          <span class="dot"></span>
          <span class="filename">stack.ts</span>
        </div>
        <div class="skills-inner">
          <div class="skill-group" v-for="group in skillGroups" :key="group.name">
            <p class="group-name mono">{{ group.name }}</p>
            <div class="skill" v-for="skill in group.skills" :key="skill.name">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level mono" :class="`level--${skill.level}`">{{ levelLabel[skill.level] }}</span>
            </div>
          </div>
        </div>
        <p class="legend mono">
          <span class="level--production">●</span> produção
          <span class="level--practice">●</span> em projetos reais
          <span class="level--exploring">●</span> explorando
        </p>
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

type SkillLevel = 'production' | 'practice' | 'exploring'

const levelLabel: Record<SkillLevel, string> = {
  production: 'produção',
  practice: 'projeto real',
  exploring: 'explorando'
}

const skillGroups = ref<{ name: string; skills: { name: string; level: SkillLevel }[] }[]>([
  {
    name: 'Back-end',
    skills: [
      { name: 'Delphi', level: 'production' },
      { name: 'C# / .NET / EF Core', level: 'production' },
      { name: 'Java / Spring Boot', level: 'production' },
      { name: 'Node.js / Express', level: 'production' },
      { name: 'Python', level: 'production' },
      { name: 'PHP', level: 'practice' },
      { name: 'Camunda (BPM)', level: 'practice' }
    ]
  },
  {
    name: 'Front-end',
    skills: [
      { name: 'Vue.js', level: 'production' },
      { name: 'React', level: 'production' },
      { name: 'TypeScript', level: 'production' },
      { name: 'Angular', level: 'practice' }
    ]
  },
  {
    name: 'Dados & Infra',
    skills: [
      { name: 'PostgreSQL', level: 'production' },
      { name: 'SQL Server / Oracle', level: 'production' },
      { name: 'Docker', level: 'production' },
      { name: 'Terraform / IaC', level: 'production' },
      { name: 'MongoDB', level: 'practice' },
      { name: 'Firebase', level: 'practice' }
    ]
  },
  {
    name: 'Ferramentas & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 'production' },
      { name: 'GitHub Actions (CI/CD)', level: 'production' },
      { name: 'Linux', level: 'production' },
      { name: 'PowerShell', level: 'practice' }
    ]
  }
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
  align-items: start;
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

.skill-group { margin-bottom: 22px; }
.skill-group:last-child { margin-bottom: 0; }

.group-name {
  color: var(--faint);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 10px;
}

.skill {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  font-size: 0.88rem;
  border-bottom: 1px solid var(--outline);
}
.skill:last-child { border-bottom: none; }

.skill-name { color: var(--text); }

.skill-level {
  font-size: 0.72rem;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid var(--outline);
}

.level--production { color: var(--accent-2); border-color: var(--accent-2); }
.level--practice { color: var(--accent); border-color: var(--accent); }
.level--exploring { color: var(--warn); border-color: var(--warn); }

.legend {
  padding: 12px 26px 20px;
  margin: 0;
  font-size: 0.72rem;
  color: var(--faint);
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.legend span[class^="level--"] {
  border: none;
  padding: 0;
  margin-right: 4px;
}
</style>
