<template>
  <section class="stack">
    <header class="head">
      <h2 class="pixel">{{ t('contact.title') }}</h2>
      <p class="muted">{{ t('contact.subtitle') }}</p>
    </header>

    <form class="card" @submit.prevent="send">
      <div class="inner">
        <div class="row">
          <label class="pixel" for="name">{{ t('contact.name') }}</label>
          <input id="name" v-model="name" type="text" autocomplete="name" required />
        </div>
        <div class="row">
          <label class="pixel" for="email">{{ t('contact.email') }}</label>
          <input id="email" v-model="email" type="email" autocomplete="email" required />
        </div>
        <div class="row">
          <label class="pixel" for="msg">{{ t('contact.msg') }}</label>
          <textarea id="msg" v-model="msg" rows="5" autocomplete="off" required />
        </div>
        <div class="actions">
          <button class="btn" type="submit">{{ t('contact.send') }}</button>
          <span class="muted">{{ status }}</span>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../i18n'

const { t } = useI18n()
const name = ref('')
const email = ref('')
const msg = ref('')
const status = ref('')

function send(){
  status.value = t('contact.sent')
  setTimeout(() => status.value = '', 2600)
  name.value = ''
  email.value = ''
  msg.value = ''
}
</script>

<style scoped>
.stack{display:grid; gap:18px}
.head{margin-bottom:8px}
h2{margin:0; font-size:1rem}
.row{display:grid; gap:8px; margin-bottom:12px}
.actions{display:flex; gap:12px; align-items:center; flex-wrap:wrap}
</style>
