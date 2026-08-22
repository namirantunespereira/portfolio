import { ref, computed } from 'vue'

export type Lang = 'pt' | 'en'

const saved = (localStorage.getItem('lang') as Lang | null)
const lang = ref<Lang>(saved ?? 'pt')

const dict = {
  pt: {
    nav: { home: 'início', projects: 'projetos', experience: 'experiência', skills: 'skills', contact: 'contato' },
    hud: { role: 'Full‑Stack Developer' },
    projects: {
      error: 'Não foi possível carregar projects.json',
      card: {
        cargo: { desc: 'API REST para logística/cargas com Node + TypeScript, PostgreSQL e Docker.' },
        ops: { desc: 'Dashboard em Vue + TypeScript com foco em UX e consumo de API.' },
        etl: { desc: 'Pipeline em Python para extração/limpeza e consultas SQL com relatórios.' },
        springboss: { desc: 'Serviço Spring Boot com endpoints REST, PostgreSQL e ambiente Docker.' },
        iac: { desc: 'Infraestrutura como código na AWS com Terraform: módulos para frontend estático, API serverless e banco, com plano validado em CI a cada push.' },
        logs: { desc: 'API em Flask com MongoDB para registrar e consultar eventos/logs.' },
        camunda: { desc: 'Orquestração com Camunda + Spring Boot integrando APIs e fluxo de negócio.' },
        steadywatch: { desc: 'Plataforma full-stack de controle parental: agente Windows em dois processos, API .NET, Postgres e e-mail transacional.' },
        radarlog: { desc: 'Torre de controle logística fictícia: agendamento em etapas, aprovação e rastreio público, com estado compartilhado via localStorage.' }
      }
    }
  },
  en: {
    nav: { home: 'home', projects: 'projects', experience: 'experience', skills: 'skills', contact: 'contact' },
    hud: { role: 'Full‑Stack Developer' },
    projects: {
      error: 'Could not load projects.json',
      card: {
        cargo: { desc: 'Logistics REST API with Node + TypeScript, PostgreSQL and Docker.' },
        ops: { desc: 'Vue + TypeScript dashboard focused on UX and API consumption.' },
        etl: { desc: 'Python pipeline for extraction/cleaning and SQL querying with reports.' },
        springboss: { desc: 'Spring Boot REST service with PostgreSQL integration and Docker setup.' },
        iac: { desc: 'AWS infrastructure as code with Terraform: modules for a static frontend, a serverless API and a database, with the plan validated in CI on every push.' },
        logs: { desc: 'Flask API with MongoDB to store and query events/logs.' },
        camunda: { desc: 'Process orchestration using Camunda + Spring Boot integrating APIs and workflows.' },
        steadywatch: { desc: 'Full-stack parental monitoring platform: a two-process Windows agent, .NET API, Postgres and transactional email.' },
        radarlog: { desc: 'Fictional logistics control tower: a multi-step scheduling flow, approval panel and public tracker, sharing state through localStorage.' }
      }
    }
  }
} as const

export function useI18n(){
  const t = (path: string) => {
    const parts = path.split('.')
    let obj: any = dict[lang.value]
    for(const p of parts) obj = obj?.[p]
    return (obj ?? path) as string
  }

  const toggle = () => {
    lang.value = lang.value === 'pt' ? 'en' : 'pt'
    localStorage.setItem('lang', lang.value)
    document.documentElement.lang = lang.value === 'pt' ? 'pt-BR' : 'en'
  }

  return { lang: computed(()=>lang.value), t, toggle }
}
