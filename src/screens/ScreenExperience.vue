<template>
  <section class="experience-screen">
    <p class="eyebrow mono">$ git log --reverse --all</p>
    <h1>Experiência</h1>
    <p class="subtitle">Histórico profissional e formação, em ordem cronológica.</p>

    <div class="timeline-container">

      <h2 class="section-title">Experiência profissional</h2>
      <div class="timeline">
        <div
          class="timeline-item"
          :class="{ 'is-visible': visibleItems.has(`p-${index}`) }"
          v-for="(exp, index) in professional"
          :key="index"
          :ref="el => setItemRef(el, `p-${index}`)"
        >
          <div class="timeline-dot" :class="{ 'is-current': exp.isCurrent }"></div>
          <div class="commit-card">
            <div class="commit-head mono">
              <span class="hash">{{ fakeHash(index) }}</span>
              <span class="period-group">
                <span class="current-badge" v-if="exp.isCurrent">atual</span>
                <span class="period">{{ exp.period }}</span>
              </span>
            </div>
            <h3 class="commit-msg">{{ exp.role }}</h3>
            <div class="commit-author mono">{{ exp.company }}</div>
            <p class="description">{{ exp.description }}</p>
            <div class="tech-tags">
              <span class="tech-pill" v-for="t in exp.tech" :key="t">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>

      <h2 class="section-title mt-5">Formação e certificações</h2>
      <div class="timeline">
        <div
          class="timeline-item"
          :class="{ 'is-visible': visibleItems.has(`a-${index}`) }"
          v-for="(edu, index) in academic"
          :key="index"
          :ref="el => setItemRef(el, `a-${index}`)"
        >
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
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'

function fakeHash(seed: number) {
  const n = Math.abs((seed + 1) * 2654435761) % 0xfffffff
  return n.toString(16).padStart(7, '0').slice(0, 7)
}

const visibleItems = reactive(new Set<string>())
const itemEls = new Map<string, Element>()
let observer: IntersectionObserver | null = null

function setItemRef(el: unknown, key: string) {
  if (el instanceof Element) {
    itemEls.set(key, el)
    observer?.observe(el)
  }
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    itemEls.forEach((_, key) => visibleItems.add(key))
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        for (const [key, el] of itemEls) {
          if (el === entry.target) visibleItems.add(key)
        }
        observer?.unobserve(entry.target)
      }
    },
    { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
  )
  itemEls.forEach((el) => observer?.observe(el))
})

onBeforeUnmount(() => observer?.disconnect())

const professional = ref([
  {
    role: "Desenvolvedor",
    company: "Soares Atacado · Vila Velha, ES",
    period: "Abr 2026 — atual",
    isCurrent: true,
    description: "Desenvolvimento do sistema fiscal de emissão de NF-e em Delphi 12 FMX (servidor DataSnap + cliente mobile/desktop), conduzindo a migração para Horse (REST) em paralelo ao legado. Construção de um novo ERP web com Node.js, Fastify, Prisma e PostgreSQL, e de um portal de agendamento para terminal portuário.",
    tech: ["Delphi", "DataSnap", "Horse", "Oracle 19c", "Node.js", "Fastify", "Prisma", "PostgreSQL", "React", "Firebase"]
  },
  {
    role: "Analista de Gestão de Sistemas",
    company: "CPVV · Vila Velha, ES",
    period: "Out 2024 — Abr 2026",
    isCurrent: false,
    description: "Desenvolvimento de aplicações internas e APIs REST para automação de processos logísticos. Implementação de dashboards analíticos e containerização de serviços.",
    tech: ["Node.js", "Vue.js", "SQL", "Docker", "AWS", "Python", "Angular", "C#"]
  },
  {
    role: "Analista de Sistemas Júnior",
    company: "Algar Tech (VALE) · Vitória, ES",
    period: "Mar 2023 — Out 2024",
    isCurrent: false,
    description: "Integração de sistemas WMS e BI, automação de processos e criação de APIs para SAP e sensores IoT. Migração de workloads aplicando infraestrutura como código (IaC).",
    tech: ["Java Spring Boot", ".NET Core", "Azure", "Terraform", "Python", "PowerShell"]
  },
  {
    role: "Especialista em Suporte Hosting (TI)",
    company: "Hostinger · Vilnius, Lituânia",
    period: "Fev 2022 — Fev 2023",
    isCurrent: false,
    description: "Desenvolvimento de aplicações e APIs para integração com sistemas de hospedagem. Manutenção de bancos escaláveis e conformidade com LGPD.",
    tech: ["Java", "Spring Boot", "Ruby on Rails", "Python Flask", "PostgreSQL", "MongoDB"]
  },
  {
    role: "Analista de Suporte em TI",
    company: "GDL · Cariacica, ES",
    period: "Set 2019 — Jan 2022",
    isCurrent: false,
    description: "Desenvolvimento de scripts para automação de ERPs, suporte a infraestrutura, integração com Active Directory e monitoramento de rotinas de backup.",
    tech: ["PHP", "JavaScript", "SQL", "Linux", "Docker", "Python"]
  },
  {
    role: "Analista de TI",
    company: "Nexa Tecnologia (TechnipFMC) · Vitória, ES",
    period: "Mar 2018 — Set 2019",
    isCurrent: false,
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
.timeline-item {
  position: relative;
  margin-bottom: 34px;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.timeline-item.is-visible { opacity: 1; transform: translateY(0); }
.timeline-item:last-child { margin-bottom: 0; }
.timeline-dot { position: absolute; left: -37px; top: 10px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 3px rgba(91,157,255,.16); }
.alt-dot { background: var(--accent-2); box-shadow: 0 0 0 3px rgba(52,211,153,.16); }

.timeline-dot.is-current {
  background: var(--accent-2);
  box-shadow: 0 0 0 3px rgba(52,211,153,.2);
  animation: pulse-dot 2.4s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 3px rgba(52,211,153,.2); }
  50% { box-shadow: 0 0 0 7px rgba(52,211,153,.28); }
}

.commit-card { background: var(--surface); border: 1px solid var(--outline); padding: 22px; border-radius: 10px; transition: border-color 0.2s ease, transform 0.2s ease; }
.commit-card:hover { border-color: var(--accent); transform: translateY(-2px); }

.commit-head { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 10px; font-size: .78rem; }
.hash { color: var(--warn); }
.period-group { display: flex; align-items: center; gap: 8px; }
.period { color: var(--faint); }
.current-badge {
  color: var(--accent-2);
  border: 1px solid var(--accent-2);
  border-radius: 999px;
  padding: 1px 8px;
  font-size: .68rem;
  text-transform: uppercase;
  letter-spacing: .04em;
}
.commit-msg { font-size: 1.15rem; color: var(--text); margin: 0 0 6px; font-weight: 600; }
.commit-author { color: var(--accent); font-size: .85rem; margin-bottom: 14px; }
.description { color: var(--muted); line-height: 1.6; font-size: 0.95rem; margin-bottom: 16px; }

.tech-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.tech-pill {
  font-family: var(--font-mono);
  font-size: .72rem;
  color: var(--faint);
  border: 1px solid var(--outline);
  border-radius: 999px;
  padding: 2px 10px;
  transition: border-color 0.2s ease, color 0.2s ease;
}
.commit-card:hover .tech-pill { border-color: var(--outline); }
.tech-pill:hover { border-color: var(--accent); color: var(--text); }

@media (prefers-reduced-motion: reduce) {
  .timeline-item { transition: none; }
  .timeline-dot.is-current { animation: none; }
  .commit-card:hover { transform: none; }
}
</style>
