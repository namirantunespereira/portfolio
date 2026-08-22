<template>
  <section class="experience-screen">
    <p class="eyebrow mono">$ git log --reverse --all</p>
    <h1>Experiência</h1>
    <p class="subtitle">Histórico profissional e formação, em ordem cronológica.</p>

    <div class="timeline-container">

      <h2 class="section-title">Experiência profissional</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="(exp, index) in professional" :key="index">
          <div class="timeline-dot"></div>
          <div class="commit-card">
            <div class="commit-head mono">
              <span class="hash">{{ fakeHash(index) }}</span>
              <span class="period">{{ exp.period }}</span>
            </div>
            <h3 class="commit-msg">{{ exp.role }}</h3>
            <div class="commit-author mono">{{ exp.company }}</div>
            <p class="description">{{ exp.description }}</p>
            <div class="tech-tags mono">tech: {{ exp.tech.join(', ') }}</div>
          </div>
        </div>
      </div>

      <h2 class="section-title mt-5">Formação e certificações</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="(edu, index) in academic" :key="index">
          <div class="timeline-dot alt-dot"></div>
          <div class="commit-card">
            <div class="commit-head mono">
              <span class="hash">{{ fakeHash(index + 100) }}</span>
              <span class="period">{{ edu.period }}</span>
            </div>
            <h3 class="commit-msg">{{ edu.course }}</h3>
            <div class="commit-author mono">{{ edu.institution }}</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

function fakeHash(seed: number) {
  const n = Math.abs((seed + 1) * 2654435761) % 0xfffffff
  return n.toString(16).padStart(7, '0').slice(0, 7)
}

const professional = ref([
  {
    role: "Analista de Gestão de Sistemas",
    company: "CPVV · Vila Velha, ES",
    period: "Out 2024 — atual",
    description: "Desenvolvimento de aplicações internas e APIs REST para automação de processos logísticos. Implementação de dashboards analíticos e containerização de serviços.",
    tech: ["Node.js", "Vue.js", "SQL", "Docker", "AWS", "Python", "Angular", "C#"]
  },
  {
    role: "Analista de Sistemas Júnior",
    company: "Algar Tech (VALE) · Vitória, ES",
    period: "Mar 2023 — Out 2024",
    description: "Integração de sistemas WMS e BI, automação de processos e criação de APIs para SAP e sensores IoT. Migração de workloads aplicando infraestrutura como código (IaC).",
    tech: ["Java Spring Boot", ".NET Core", "Azure", "Terraform", "Python", "PowerShell"]
  },
  {
    role: "Especialista em Suporte Hosting (TI)",
    company: "Hostinger · Vilnius, Lituânia",
    period: "Fev 2022 — Fev 2023",
    description: "Desenvolvimento de aplicações e APIs para integração com sistemas de hospedagem. Manutenção de bancos escaláveis e conformidade com LGPD.",
    tech: ["Java", "Spring Boot", "Ruby on Rails", "Python Flask", "PostgreSQL", "MongoDB"]
  },
  {
    role: "Analista de Suporte em TI",
    company: "GDL · Cariacica, ES",
    period: "Set 2019 — Jan 2022",
    description: "Desenvolvimento de scripts para automação de ERPs, suporte a infraestrutura, integração com Active Directory e monitoramento de rotinas de backup.",
    tech: ["PHP", "JavaScript", "SQL", "Linux", "Docker", "Python"]
  },
  {
    role: "Analista de TI",
    company: "Nexa Tecnologia (TechnipFMC) · Vitória, ES",
    period: "Mar 2018 — Set 2019",
    description: "Desenvolvimento de relatórios e sistemas internos. Criação de scripts para análise regulatória e integração com sistemas legados críticos. Manutenção e implantação de soluções.",
    tech: ["Delphi", "ASP.NET", "C#", "SQL Server", "Python", "COBOL"]
  }
])

const academic = ref([
  {
    course: "Engenharia de Software",
    institution: "Anhanguera",
    period: "2021 — 2024"
  },
  {
    course: "Técnico em Informática",
    institution: "FAESA",
    period: "2002 — 2004"
  },
  {
    course: "Conceitos Fundamentais de IA & Especialização em .NET/C#",
    institution: "Digital Innovation One (DIO)",
    period: "2021 — 2024"
  },
  {
    course: "Formação em Redes Sem Fio & Certificação Cisco CCNA",
    institution: "Udemy / Cisco",
    period: "2023"
  },
  {
    course: "EF SET English Certificate™ (C2 Advanced)",
    institution: "University of Cambridge",
    period: "Jul 2021"
  }
])
</script>

<style scoped>
.experience-screen { padding: 40px 20px; max-width: 900px; margin: 0 auto; color: var(--text); }
.eyebrow { color: var(--faint); font-size: .8rem; margin: 0 0 8px; }
h1 { margin: 0 0 8px; font-size: 2rem; }
.subtitle { color: var(--muted); margin-bottom: 50px; }
.section-title { font-size: 1.3rem; margin-bottom: 26px; padding-bottom: 10px; border-bottom: 1px solid var(--outline); }
.mt-5 { margin-top: 56px; }

.timeline { position: relative; border-left: 2px solid var(--outline); margin-left: 20px; padding-left: 30px; }
.timeline-item { position: relative; margin-bottom: 34px; }
.timeline-item:last-child { margin-bottom: 0; }
.timeline-dot { position: absolute; left: -37px; top: 10px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 3px rgba(91,157,255,.16); }
.alt-dot { background: var(--accent-2); box-shadow: 0 0 0 3px rgba(52,211,153,.16); }

.commit-card { background: var(--surface); border: 1px solid var(--outline); padding: 22px; border-radius: 10px; transition: border-color 0.2s ease; }
.commit-card:hover { border-color: var(--accent); }

.commit-head { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 10px; font-size: .78rem; }
.hash { color: var(--warn); }
.period { color: var(--faint); }
.commit-msg { font-size: 1.15rem; color: var(--text); margin: 0 0 6px; font-weight: 600; }
.commit-author { color: var(--accent); font-size: .85rem; margin-bottom: 14px; }
.description { color: var(--muted); line-height: 1.6; font-size: 0.95rem; margin-bottom: 16px; }
.tech-tags { color: var(--faint); font-size: .78rem; }
</style>
