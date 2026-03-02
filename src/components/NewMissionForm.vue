<template>
  <div class="mission-control">
    <button @click="isOpen = !isOpen" class="btn-toggle pixel">
      {{ isOpen ? 'CANCELAR MISSÃO' : '+ NOVA MISSÃO' }}
    </button>

    <Transition name="slide">
      <form v-if="isOpen" @submit.prevent="handleSubmit" class="mission-form">
        <div class="input-group">
          <input v-model="form.item" placeholder="Nome da Carga" required />
          <input v-model="form.destino" placeholder="Destino (ex: Marte)" required />
          <input v-model="form.tech" placeholder="Techs (separadas por vírgula)" />
        </div>
        <button type="submit" class="btn-send pixel" :disabled="isSending">
          {{ isSending ? 'ENVIANDO...' : 'LANÇAR CARGA' }}
        </button>
      </form>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import axios from 'axios'

const emit = defineEmits(['mission-added'])
const isOpen = ref(false)
const isSending = ref(false)

const form = reactive({
  item: '',
  destino: '',
  tech: '',
  status: 'Embarque',
  code: 'https://github.com/namirantunespereira'
})

const handleSubmit = async () => {
  isSending.value = true
  try {
    
    const dataToSend = {
      ...form,
      tech: form.tech.split(',').map(t => t.trim()).filter(t => t !== '')
    }
    
    await axios.post('http://localhost:3000/cargas', dataToSend)
   
    form.item = ''; form.destino = ''; form.tech = ''
    isOpen.value = false
    
    emit('mission-added')
  } catch (error) {
    alert("Falha no lançamento! Verifique a API.")
  } finally {
    isSending.value = false
  }
}
</script>

<style scoped>
.mission-control { margin-bottom: 30px; text-align: center; }
.mission-form { 
  background: rgba(16, 22, 45, 0.8); 
  padding: 20px; 
  border-radius: 12px; 
  border: 1px solid #8a5cff;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.input-group { display: flex; gap: 10px; flex-wrap: wrap; }
input { 
  background: rgba(0,0,0,0.3); border: 1px solid #333; 
  color: white; padding: 10px; border-radius: 4px; flex: 1;
}
input:focus { border-color: #00f0ff; outline: none; }
.btn-toggle { background: #8a5cff; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 4px; }
.btn-send { background: #00ff64; color: #0a0e1e; border: none; padding: 10px; cursor: pointer; font-weight: bold; }

.slide-enter-active, .slide-leave-active { transition: all 0.3s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-20px); }
</style>