<template>
  <section class="card">
    <div class="inner row">
      <div>
        <div class="pixel">{{ t('misc.filterTitle') }}</div>
        <div class="muted">{{ t('misc.filterSubtitle') }}</div>
      </div>

      <div class="chips" role="group" aria-label="Filtro de tecnologias">
        <button
          v-for="tch in allTech"
          :key="tch"
          class="chip"
          :class="{active: modelValue === tch}"
          type="button"
          @click="$emit('update:modelValue', modelValue === tch ? null : tch)"
        >
          {{ tch }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'
const { t } = useI18n()

defineProps<{ modelValue: string | null, allTech: string[] }>()
defineEmits<{ (e: 'update:modelValue', v: string | null): void }>()
</script>

<style scoped>
.row{display:flex; align-items:center; justify-content:space-between; gap:14px}
.chips{display:flex; gap:8px; flex-wrap:wrap; justify-content:flex-end}
.chip{font-family:var(--pixel); font-size:.62rem; padding:10px 12px; border-radius:999px; border:1px solid var(--outline); background: rgba(10,14,30,.55); color: var(--muted); cursor:pointer; transition: transform .12s ease, border-color .12s ease;}
.chip:hover{transform: translateY(-1px); border-color: rgba(0,240,255,.45)}
.chip.active{color: var(--text); border-color: rgba(138,92,255,.55); background: rgba(138,92,255,.12)}
@media (max-width: 760px){ .row{flex-direction:column; align-items:flex-start} .chips{justify-content:flex-start} }
</style>
