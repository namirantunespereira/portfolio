<template>
  <div class="mission-control">
    <button @click="isOpen = !isOpen" class="btn-toggle mono">
      {{ isOpen ? 'cancelar' : '+ adicionar projeto' }}
    </button>

    <Transition name="slide">
      <form v-if="isOpen" @submit.prevent="handleSubmit" class="mission-form">
        <div class="input-group">
          <input v-model="form.item" placeholder="Nome do projeto" required />
          <input v-model="form.destino" placeholder="Descrição curta" required />
          <input v-model="form.tech" placeholder="Tecnologias (separadas por vírgula)" />
        </div>
        <button type="submit" class="btn-send mono">adicionar</button>
        <p class="hint">Fica salvo só neste navegador — é um recurso de demonstração, sem backend.</p>
      </form>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const emit = defineEmits<{ 'mission-added': [data: { item: string; destino: string; tech: string[]; code: string }] }>()
const isOpen = ref(false)

const form = reactive({
  item: '',
  destino: '',
  tech: '',
  code: 'https://github.com/namirantunespereira'
})

const handleSubmit = () => {
  const dataToSend = {
    item: form.item,
    destino: form.destino,
    tech: form.tech.split(',').map(t => t.trim()).filter(t => t !== ''),
    code: form.code
  }

  emit('mission-added', dataToSend)

  form.item = ''
  form.destino = ''
  form.tech = ''
  isOpen.value = false
}
</script>

<style scoped>
.mission-control { margin-bottom: 30px; text-align: center; }
.mission-form {
  background: var(--surface);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--outline);
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.input-group { display: flex; gap: 10px; flex-wrap: wrap; }
input { flex: 1; }
.btn-toggle { background: var(--surface-2); color: var(--text); border: 1px solid var(--outline); padding: 10px 20px; cursor: pointer; border-radius: 6px; font-size: .85rem; }
.btn-toggle:hover { border-color: var(--accent); color: var(--accent); }
.btn-send { background: var(--accent-2); color: #06170d; border: none; padding: 10px; cursor: pointer; font-weight: 600; border-radius: 6px; font-size: .85rem; }
.hint { color: var(--faint); font-size: 0.78rem; margin: 0; text-align: left; }

.slide-enter-active, .slide-leave-active { transition: all 0.3s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-20px); }
</style>
