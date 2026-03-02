<template>
  <section class="experience-screen">
    <h1 class="pixel title-glow">Diário de Bordo</h1>
    <p class="subtitle">Histórico completo de missões e treinamentos da Capitã Namir.</p>

    <div class="timeline-container">
      
      <h2 class="section-title neon-text">💼 Missões Oficiais (Profissional)</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="(exp, index) in professional" :key="index">
          <div class="timeline-dot"></div>
          <div class="glass-panel timeline-content">
            <div class="timeline-header">
              <h3 class="role">{{ exp.role }}</h3>
              <span class="period pixel">{{ exp.period }}</span>
            </div>
            <h4 class="company">{{ exp.company }}</h4>
            <p class="description">{{ exp.description }}</p>
            <div class="tech-tags">
              <span class="tech-tag" v-for="tech in exp.tech" :key="tech">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>

      <h2 class="section-title neon-text mt-5">🎓 Academia Estelar (Educação & Certificados)</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="(edu, index) in academic" :key="index">
          <div class="timeline-dot alt-dot"></div>
          <div class="glass-panel timeline-content">
            <div class="timeline-header">
              <h3 class="role">{{ edu.course }}</h3>
              <span class="period pixel">{{ edu.period }}</span>
            </div>
            <h4 class="company">{{ edu.institution }}</h4>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const professional = ref([
  {
    role: "Analista de Gestão de Sistemas",
    company: "CPVV | Vila Velha, ES",
    period: "Out 2024 - Atual",
    description: "Desenvolvimento de aplicações internas e APIs REST para automação de processos logísticos. Implementação de dashboards analíticos e containerização de serviços.",
    tech: ["Node.js", "Vue.js", "SQL", "Docker", "AWS", "Python", "Angular", "C#"]
  },
  {
    role: "Analista de Sistemas Júnior",
    company: "Algar Tech (VALE) | Vitória, ES",
    period: "Mar 2023 - Out 2024",
    description: "Integração de sistemas WMS e BI, automação de processos e criação de APIs para SAP e sensores IoT. Migração de workloads aplicando infraestrutura como código (IaC).",
    tech: ["Java Spring Boot", ".NET Core", "Azure", "Terraform", "Python", "PowerShell"]
  },
  {
    role: "Especialista em Suporte Hosting (TI)",
    company: "Hostinger | Vilnius, Lituânia",
    period: "Fev 2022 - Fev 2023",
    description: "Desenvolvimento de aplicações e APIs para integração com sistemas de hospedagem. Manutenção de bancos escaláveis e conformidade com LGPD.",
    tech: ["Java", "Spring Boot", "Ruby on Rails", "Python Flask", "PostgreSQL", "MongoDB"]
  },
  {
    role: "Analista de Suporte em TI",
    company: "GDL | Cariacica, ES",
    period: "Set 2019 - Jan 2022",
    description: "Desenvolvimento de scripts para automação de ERPs, suporte a infraestrutura, integração com Active Directory e monitoramento de rotinas de backup.",
    tech: ["PHP", "JavaScript", "SQL", "Linux", "Docker", "Python"]
  },
  {
    role: "Analista de TI",
    company: "Nexa Tecnologia (TechnipFMC) | Vitória, ES",
    period: "Mar 2018 - Set 2019",
    description: "Desenvolvimento de relatórios e sistemas internos. Criação de scripts para análise regulatória e integração com sistemas legados críticos. Manutenção e implantação de soluções.",
    tech: ["Delphi", "ASP.NET", "C#", "SQL Server", "Python", "COBOL"]
  }
])

const academic = ref([
  {
    course: "Engenharia de Software",
    institution: "Anhanguera",
    period: "2021 - 2024"
  },
  {
    course: "Técnico em Informática",
    institution: "FAESA",
    period: "2002 - 2004"
  },
  {
    course: "Conceitos Fundamentais de IA & Especialização em .NET/C#",
    institution: "Digital Innovation One (DIO)",
    period: "2021 - 2024"
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
.experience-screen { padding: 40px 20px; max-width: 900px; margin: 0 auto; color: white; }
.title-glow { text-align: center; text-shadow: 0 0 15px rgba(0, 240, 255, 0.5); font-size: 2.5rem; margin-bottom: 5px; }
.subtitle { text-align: center; color: #a0a0ff; margin-bottom: 50px; font-family: monospace; }
.section-title { font-size: 1.5rem; margin-bottom: 30px; border-bottom: 1px solid rgba(0, 240, 255, 0.2); padding-bottom: 10px; }
.mt-5 { margin-top: 60px; }
.neon-text { color: #00f0ff; font-family: var(--pixel), monospace; text-transform: uppercase; }
.timeline { position: relative; border-left: 2px solid rgba(138, 92, 255, 0.5); margin-left: 20px; padding-left: 30px; }
.timeline-item { position: relative; margin-bottom: 40px; }
.timeline-dot { position: absolute; left: -37px; top: 10px; width: 12px; height: 12px; background-color: #00f0ff; border-radius: 50%; box-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff; }
.alt-dot { background-color: #00ff64; box-shadow: 0 0 10px #00ff64, 0 0 20px #00ff64; }
.glass-panel { background: rgba(16, 22, 45, 0.5); backdrop-filter: blur(10px); border: 1px solid rgba(138, 92, 255, 0.2); padding: 25px; border-radius: 12px; transition: transform 0.3s ease, border-color 0.3s ease; }
.glass-panel:hover { transform: translateX(10px); border-color: #00f0ff; box-shadow: -5px 0 20px rgba(0, 240, 255, 0.1); }
.timeline-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 5px; }
.role { font-size: 1.3rem; color: #fff; margin: 0; }
.company { color: #a0a0ff; font-size: 1rem; margin-bottom: 15px; }
.period { font-size: 0.8rem; color: #00ff64; background: rgba(0, 255, 100, 0.1); padding: 5px 10px; border-radius: 20px; border: 1px solid rgba(0, 255, 100, 0.3); }
.description { color: #c0c0d0; line-height: 1.6; font-size: 0.95rem; margin-bottom: 20px; }
.tech-tags { display: flex; flex-wrap: wrap; gap: 10px; }
.tech-tag { background: rgba(138, 92, 255, 0.1); color: #b088ff; padding: 4px 10px; border-radius: 4px; font-size: 0.8rem; border: 1px solid rgba(138, 92, 255, 0.3); }
</style>