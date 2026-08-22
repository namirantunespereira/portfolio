<template>
  <section class="contact-screen">
    <p class="eyebrow mono">$ mail --compose</p>
    <h1>Contato</h1>
    <p class="subtitle">Vamos conversar sobre um projeto?</p>

    <div class="contact-grid">
      <div ref="formPanelEl" class="card form-panel tilt-card">
        <div class="file-tab">
          <span class="dot"></span>
          <span class="filename">message.txt</span>
        </div>
        <form @submit.prevent="sendMessage" class="contact-form">
          <input v-model="form.name" type="text" placeholder="Seu nome" required />
          <input v-model="form.email" type="email" placeholder="Seu e-mail" required />
          <textarea v-model="form.message" rows="5" placeholder="Sua mensagem..." required></textarea>
          <input v-model="form.botcheck" type="checkbox" name="botcheck" class="botcheck" tabindex="-1" autocomplete="off" />

          <button type="submit" class="btn-send mono" :disabled="isSending">
            {{ isSending ? 'enviando...' : 'enviar' }}
          </button>

          <p v-if="sendError" class="send-error">{{ sendError }}</p>
        </form>
      </div>

      <div ref="linksPanelEl" class="card links-panel tilt-card">
        <div class="file-tab">
          <span class="dot"></span>
          <span class="filename">links.json</span>
        </div>
        <div class="links-container">
          <a href="https://github.com/namirantunespereira" target="_blank" class="contact-link">
            <span class="key mono">github</span> namirantunespereira
          </a>

          <a href="https://www.linkedin.com/in/namir-pereira-47689675/" target="_blank" class="contact-link">
            <span class="key mono">linkedin</span> namir-pereira
          </a>

          <a href="mailto:namirantunespereira@gmail.com" class="contact-link">
            <span class="key mono">email</span> namirantunespereira@gmail.com
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useTilt } from '../composables/useTilt'

// Free Web3Forms access key (web3forms.com) - meant to be public/client-side,
// rate-limited and honeypot-protected on their end, not a secret.
const WEB3FORMS_ACCESS_KEY = 'db88c5b2-c0c2-48f4-b149-3ceeeca6c2fa'

const formPanelEl = ref<HTMLElement | null>(null)
const linksPanelEl = ref<HTMLElement | null>(null)
useTilt(formPanelEl, 3)
useTilt(linksPanelEl, 3)

const form = reactive({ name: '', email: '', message: '', botcheck: false })
const isSending = ref(false)
const sendError = ref('')

const sendMessage = async () => {
  if (form.botcheck) return // honeypot tripped - silently drop
  isSending.value = true
  sendError.value = ''
  try {
    // application/x-www-form-urlencoded is a CORS "simple request" - no OPTIONS
    // preflight, unlike a JSON body. Sidesteps proxies/AV software that mangle preflights.
    const body = new URLSearchParams({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'Novo contato pelo portfólio',
      name: form.name,
      email: form.email,
      message: form.message
    })
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
      body
    })
    const result = await response.json()
    if (!result.success) throw new Error(result.message || 'Falha no envio')

    alert('Mensagem enviada com sucesso! Retorno em breve.')
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (err) {
    sendError.value = 'Falha no envio. Tente novamente ou use o e-mail direto ao lado.'
    console.error('Web3Forms submit failed:', err)
  } finally {
    isSending.value = false
  }
}
</script>

<style scoped>
.contact-screen {
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
  color: var(--text);
  text-align: center;
}

.eyebrow { color: var(--faint); font-size: .8rem; margin: 0 0 8px; }
h1 { margin: 0 0 8px; font-size: 2rem; }

.subtitle {
  color: var(--muted);
  margin-bottom: 40px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 24px;
  text-align: left;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

.card { transition: border-color 0.2s ease; }
.card:hover { border-color: var(--accent); }

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 22px;
}

.btn-send {
  padding: 13px;
  background: var(--accent);
  color: #061224;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 6px;
  margin-top: 6px;
  font-weight: 600;
  font-size: .85rem;
}
.btn-send:hover { filter: brightness(1.1); }
.btn-send:disabled { opacity: .6; cursor: default; }

.links-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 22px;
}

.contact-link {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 13px 15px;
  background: var(--surface-2);
  border: 1px solid var(--outline);
  color: var(--text);
  text-decoration: none;
  border-radius: 6px;
  transition: 0.2s;
  font-size: .92rem;
}

.contact-link .key {
  color: var(--accent);
  font-size: .78rem;
  flex: none;
}

.contact-link:hover {
  border-color: var(--accent);
  background: var(--surface-3);
}

.botcheck {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
}

.send-error {
  color: var(--danger);
  font-size: 0.85rem;
  margin: 0;
}
</style>
