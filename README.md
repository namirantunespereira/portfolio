# Namir • Portfolio (Game Mode)

Portfólio estilo game (neon roxo/verde/dourado), nuvens animadas, PT/EN, Campaign/Timeline, projetos dinâmicos via `public/projects.json`.

## Rodar local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy GitHub Pages (recomendado)
1. Repo → **Settings → Pages** → Source: **GitHub Actions**
2. Workflow: `.github/workflows/deploy.yml`
3. O script `build:gh` gera build com base `/portfolio/`.

## Onde editar
- Projetos: `public/projects.json`
- Thumbs WebP: `public/images/thumbs/*.webp`
- Textos PT/EN (descrições por i18nKey): `src/i18n.ts`
