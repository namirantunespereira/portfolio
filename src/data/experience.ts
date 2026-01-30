export type ExperienceItem = {
  title: string
  company: string
  location: string
  period: string
  current?: boolean
  quests: string[]
  loot: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: 'Analista de Gestão de Sistemas',
    company: 'CPVV',
    location: 'Vila Velha, ES, Brasil',
    period: 'Out 2024 — Atual',
    current: true,
    quests: [
      'Apps internos com Node.js, Vue.js e SQL (integração com sistemas aduaneiros)',
      'APIs REST para automação (JavaScript/TypeScript)',
      'Dashboards analíticos com React e Python para KPIs'
    ],
    loot: ['Node.js', 'Vue.js', 'TypeScript', 'SQL', 'Python', 'React', 'Docker', 'AWS']
  },
  {
    title: 'Analista de Sistemas Júnior',
    company: 'Algar Tech (VALE)',
    location: 'Vitória, ES, Brasil',
    period: 'Mar 2023 — Out 2024',
    quests: [
      'Integração WMS/BI com Java Spring Boot e .NET Core',
      'Automação com Python, PowerShell e pipelines DevOps',
      'APIs REST para SAP e sensores IoT',
      'Migração para Azure com IaC (Terraform)'
    ],
    loot: ['Spring Boot', '.NET', 'Python', 'Terraform', 'Azure', 'SQL']
  }
]
