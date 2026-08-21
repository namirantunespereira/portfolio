import { ref, computed } from 'vue'

export type Lang = 'pt' | 'en'

const saved = (localStorage.getItem('lang') as Lang | null)
const lang = ref<Lang>(saved ?? 'pt')

const dict = {
  pt: {
    nav: { home: 'Início', projects: 'Projetos', experience: 'Campanha', skills: 'Skills', contact: 'Contato' },
    hud: { role: 'Full‑Stack Developer', sound: 'SOM', on: 'ON', off: 'OFF' },
    home: {
      title: 'Bem‑vinda ao meu Portfólio • Modo Game',
      subtitle: 'Aqui você encontra pequenas aplicações organizadas como missões. Explore, filtre por tecnologia e clique para ver demos e repositórios.',
      cta1: 'Ver Missões', cta2: 'Campanha (Experiência)', cta3: 'Inventário de Skills', cta4: 'Falar comigo',
      tipTitle: 'Dica', tipText: 'Projetos de Back-end brilham com: stack, endpoints, testes e como rodar local (Docker).',
      goalTitle: 'Meta', goalText: 'Cada projeto tem highlights do que foi aprendido — pense como “loot”.'
    },
    projects: {
      title: 'Missões (Projetos)',
      subtitle: 'Cards com thumbs em WebP + badges de dificuldade e role.',
      loading: 'Carregando missões...',
      error: 'Não foi possível carregar projects.json',
      difficulty: 'Dificuldade',
      role: 'Papel',
      card: {
        cargo: { desc: 'API REST para logística/cargas com Node + TypeScript, PostgreSQL e Docker.' },
        ops: { desc: 'Dashboard em Vue + TypeScript com foco em UX e consumo de API.' },
        etl: { desc: 'Pipeline em Python para extração/limpeza e consultas SQL com relatórios.' },
        springboss: { desc: 'Serviço Spring Boot com endpoints REST, PostgreSQL e ambiente Docker.' },
        iac: { desc: 'Infra como Código com Terraform em AWS/Azure (módulos e boas práticas).' },
        logs: { desc: 'API em Flask com MongoDB para registrar e consultar eventos/logs.' },
        camunda: { desc: 'Orquestração com Camunda + Spring Boot integrando APIs e fluxo de negócio.' },
        steadywatch: { desc: 'Plataforma full-stack de controle parental: agente Windows em dois processos, API .NET, Postgres e e-mail transacional.' },
        radarlog: { desc: 'Torre de controle logística fictícia: agendamento em etapas, aprovação e rastreio público, com estado compartilhado via localStorage.' }
      }
    },
    experience: {
      title: 'Campanha (Experiência)',
      subtitle: 'Uma timeline em formato de campanha — cada fase com quests e loot.',
      quests: 'Quests',
      loot: 'Loot'
    },
    skills: { title: 'Inventário de Skills', subtitle: 'Uma visão rápida do que uso no dia a dia e do que estou evoluindo.', front: 'Front‑end', back: 'Back‑end', data: 'Dados/Automação', next: 'Próximas Missões (roadmap)' },
    contact: { title: 'Contato', subtitle: 'Vamos conversar? Envie uma mensagem ou use os links.', name: 'Nome', email: 'Email', msg: 'Mensagem', send: 'Enviar', sent: 'Mensagem enviada!' },
    misc: { filterTitle: 'Filtro de Missões', filterSubtitle: 'Escolha uma tecnologia para destacar seus projetos.', minigameTitle: 'Mini‑Game: Caça‑Moedas', minigameSubtitle: 'Clique nas moedas para ganhar XP. (Só diversão 😄)', generate: 'Gerar', reset: 'Reset', code: 'Código', demo: 'Demo' }
  },
  en: {
    nav: { home: 'Home', projects: 'Projects', experience: 'Campaign', skills: 'Skills', contact: 'Contact' },
    hud: { role: 'Full‑Stack Developer', sound: 'SFX', on: 'ON', off: 'OFF' },
    home: {
      title: 'Welcome to my Portfolio • Game Mode',
      subtitle: 'Here you’ll find small apps organized as quests. Explore, filter by tech and open demos/repos.',
      cta1: 'View Quests', cta2: 'Campaign (Experience)', cta3: 'Skill Inventory', cta4: 'Contact me',
      tipTitle: 'Tip', tipText: 'Back-end projects shine with: stack, endpoints, tests and how to run locally (Docker).',
      goalTitle: 'Goal', goalText: 'Each project has highlights of what was learned — think of it as “loot”.'
    },
    projects: {
      title: 'Quests (Projects)',
      subtitle: 'Cards with WebP thumbs + difficulty and role badges.',
      loading: 'Loading quests...',
      error: 'Could not load projects.json',
      difficulty: 'Difficulty',
      role: 'Role',
      card: {
        cargo: { desc: 'Logistics REST API with Node + TypeScript, PostgreSQL and Docker.' },
        ops: { desc: 'Vue + TypeScript dashboard focused on UX and API consumption.' },
        etl: { desc: 'Python pipeline for extraction/cleaning and SQL querying with reports.' },
        springboss: { desc: 'Spring Boot REST service with PostgreSQL integration and Docker setup.' },
        iac: { desc: 'Terraform IaC for AWS/Azure provisioning (modules and best practices).' },
        logs: { desc: 'Flask API with MongoDB to store and query events/logs.' },
        camunda: { desc: 'Process orchestration using Camunda + Spring Boot integrating APIs and workflows.' },
        steadywatch: { desc: 'Full-stack parental monitoring platform: a two-process Windows agent, .NET API, Postgres and transactional email.' },
        radarlog: { desc: 'Fictional logistics control tower: a multi-step scheduling flow, approval panel and public tracker, sharing state through localStorage.' }
      }
    },
    experience: {
      title: 'Campaign (Experience)',
      subtitle: 'A campaign-like timeline — each stage with quests and loot.',
      quests: 'Quests',
      loot: 'Loot'
    },
    skills: { title: 'Skill Inventory', subtitle: 'A quick view of what I use daily and what I’m improving.', front: 'Front‑end', back: 'Back‑end', data: 'Data/Automation', next: 'Next Quests (roadmap)' },
    contact: { title: 'Contact', subtitle: 'Let’s talk! Send a message or use the links.', name: 'Name', email: 'Email', msg: 'Message', send: 'Send', sent: 'Message sent!' },
    misc: { filterTitle: 'Quest Filter', filterSubtitle: 'Pick a tech to highlight your projects.', minigameTitle: 'Mini‑Game: Coin Hunt', minigameSubtitle: 'Click coins to gain XP. (Just for fun 😄)', generate: 'Spawn', reset: 'Reset', code: 'Code', demo: 'Demo' }
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
