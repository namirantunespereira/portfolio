<template>
  <section class="home-screen">
    <div ref="heroEl" class="hero-container tilt-card">
      <div class="term-window">
        <div class="term-chrome">
          <span class="tdot r"></span><span class="tdot y"></span><span class="tdot g"></span>
          <span class="term-title mono">bash — namir@portfolio</span>
        </div>
        <div class="term-body mono">
          <p class="line"><span class="prompt">$</span> whoami</p>
          <p class="output">{{ displayedText }}<span class="cursor">_</span></p>
        </div>
      </div>

      <p class="subtitle">
        Desenvolvimento full-stack: arquitetura, backend, front-end e deploy — do primeiro commit ao usuário real.
      </p>

      <div class="action-buttons">
        <router-link to="/projects" class="btn-neon primary">Ver projetos</router-link>
        <a href="https://github.com/namirantunespereira" target="_blank" class="btn-neon secondary">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTilt } from '../composables/useTilt'

const heroEl = ref<HTMLElement | null>(null)
useTilt(heroEl, 3)

const fullText = "Namir — Full-Stack Developer"
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
  }, 55)
})
</script>

<style scoped>
.home-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
}

.hero-container {
  width: 100%;
  max-width: 640px;
}

.term-window {
  background: var(--surface);
  border: 1px solid var(--outline);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.45);
}

.term-chrome {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: var(--surface-2);
  border-bottom: 1px solid var(--outline);
}
.tdot { width: 10px; height: 10px; border-radius: 50%; }
.tdot.r { background: var(--danger); }
.tdot.y { background: var(--warn); }
.tdot.g { background: var(--accent-2); }
.term-title { margin-left: 8px; font-size: .78rem; color: var(--muted); }

.term-body { padding: 22px 20px 28px; text-align: left; }
.line { color: var(--muted); font-size: .95rem; margin: 0 0 10px; }
.prompt { color: var(--accent-2); margin-right: 8px; }
.output { color: var(--text); font-size: 1.3rem; font-weight: 600; margin: 0; }
.cursor { color: var(--accent); animation: blink 1s step-end infinite; }

.subtitle {
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 24px 4px 32px;
}

.action-buttons {
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  margin: 0 4px;
}

.btn-neon {
  padding: 13px 26px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.btn-neon.primary {
  background: var(--accent);
  color: #061224;
}
.btn-neon.primary:hover { filter: brightness(1.1); }

.btn-neon.secondary {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--outline);
}
.btn-neon.secondary:hover { border-color: var(--accent); color: var(--accent); }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@media (max-width: 480px) {
  .btn-neon { padding: 12px 18px; }
}
</style>
