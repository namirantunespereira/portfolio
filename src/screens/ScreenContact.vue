<template>
  <section class="contact-screen">
    <h1 class="pixel title-glow">Canal de Comunicação</h1>
    <p class="subtitle">Sinal aberto. Aguardando transmissão...</p>

    <div class="contact-grid">
      <div ref="formPanelEl" class="glass-panel form-panel tilt-card">
        <h3 class="neon-text">Enviar Mensagem</h3>
        <form @submit.prevent="sendMessage" class="contact-form">
          <input v-model="form.name" type="text" placeholder="Identificação (Seu Nome)" required />
          <input v-model="form.email" type="email" placeholder="Frequência de E-mail" required />
          <textarea v-model="form.message" rows="5" placeholder="Sua Transmissão..." required></textarea>
          <input v-model="form.botcheck" type="checkbox" name="botcheck" class="botcheck" tabindex="-1" autocomplete="off" />

          <button type="submit" class="btn-neon primary pixel" :disabled="isSending">
            {{ isSending ? 'ENVIANDO...' : 'TRANSMITIR' }}
          </button>

          <p v-if="sendError" class="send-error">{{ sendError }}</p>
        </form>
      </div>

      <div ref="linksPanelEl" class="glass-panel links-panel tilt-card">
        <h3 class="neon-text">Coordenadas</h3>
        
        <div class="links-container">
          <a href="https://github.com/namirantunespereira" target="_blank" class="contact-link">
            <span class="icon">💻</span> Perfil no GitHub
          </a>
          
          <a href="https://www.linkedin.com/in/namir-pereira-47689675/" target="_blank" class="contact-link">
            <span class="icon">🌐</span> LinkedIn Profissional
          </a>
          
          <a href="mailto:namirantunespereira@gmail.com" class="contact-link">
            <span class="icon">✉️</span> E-mail Direto
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

    alert('Transmissão enviada com sucesso! Retorno em breve!')
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (err) {
    sendError.value = 'Falha na transmissão. Tente novamente ou use o e-mail direto ao lado.'
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
  color: white;
  text-align: center;
}

.title-glow {
  text-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
  font-size: clamp(1.4rem, 7vw, 2.5rem);
  overflow-wrap: break-word;
  margin-bottom: 10px;
}

.subtitle {
  color: #a0a0ff;
  margin-bottom: 40px;
  font-family: monospace;
}

.contact-grid {
  display: grid;
  grid-template-columns: 3fr 2fr; 
  gap: 30px;
  text-align: left;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr; 
  }
}

.glass-panel {
  background: rgba(16, 22, 45, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(138, 92, 255, 0.3);
  padding: 30px;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.glass-panel:hover {
  border-color: #00f0ff;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.1);
}

.neon-text {
  color: #00f0ff;
  margin-bottom: 20px;
  font-family: var(--pixel), monospace;
  text-transform: uppercase;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input, textarea {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 15px;
  border-radius: 8px;
  font-family: inherit;
  transition: all 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #00f0ff;
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
}

.btn-neon {
  padding: 15px;
  background: transparent;
  color: #00f0ff;
  border: 1px solid #00f0ff;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 8px;
  margin-top: 10px;
}

.btn-neon:hover {
  background: #00f0ff;
  color: #0a0e1e;
  box-shadow: 0 0 20px #00f0ff;
}

.links-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(138, 92, 255, 0.1);
  border: 1px solid rgba(138, 92, 255, 0.3);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  transition: 0.3s;
}

.contact-link:hover {
  background: rgba(138, 92, 255, 0.3);
  border-color: #8a5cff;
  transform: translateX(10px); 
  box-shadow: 0 0 15px rgba(138, 92, 255, 0.4);
}

.icon {
  font-size: 1.5rem;
}

.botcheck {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
}

.send-error {
  color: #ff4d6d;
  font-size: 0.85rem;
  margin: 0;
}
</style>