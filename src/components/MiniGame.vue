<template>
  <section class="card">
    <div class="inner">
      <header class="head">
        <div>
          <div class="pixel">{{ t('misc.minigameTitle') }}</div>
          <div class="muted">{{ t('misc.minigameSubtitle') }}</div>
        </div>
        <div class="score">
          <div class="pixel">XP +{{ earned }}</div>
          <button class="btn secondary" type="button" @click="spawn">{{ t('misc.generate') }}</button>
          <button class="btn danger" type="button" @click="reset">{{ t('misc.reset') }}</button>
        </div>
      </header>

      <div class="arena" aria-label="Arena do mini-game">
        <button v-for="coin in coins" :key="coin.id" class="coin" type="button"
          :style="{ left: coin.x+'%', top: coin.y+'%' }" @click="collect(coin.id)" aria-label="Moeda">✦</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../i18n'
const { t } = useI18n()

type Coin = { id: string, x: number, y: number }
const coins = ref<Coin[]>([])
const earned = ref(0)

function spawn(){
  coins.value = Array.from({length: 10}).map(() => ({
    id: crypto.randomUUID(),
    x: Math.round(Math.random() * 92) + 4,
    y: Math.round(Math.random() * 72) + 6,
  }))
}
function collect(id: string){ coins.value = coins.value.filter(c => c.id !== id); earned.value += 5 }
function reset(){ coins.value = []; earned.value = 0 }
spawn()
</script>

<style scoped>
.head{display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap}
.score{display:flex; align-items:center; gap:10px; flex-wrap:wrap}
.arena{margin-top:14px; height: 260px; border-radius: 16px; border: 1px dashed rgba(255,255,255,.16);
  background: radial-gradient(600px 260px at 50% 0%, rgba(0,240,255,.12), transparent 60%),
              radial-gradient(460px 240px at 20% 80%, rgba(138,92,255,.16), transparent 62%),
              radial-gradient(520px 260px at 90% 60%, rgba(60,255,122,.08), transparent 60%),
              rgba(0,0,0,.18);
  position:relative; overflow:hidden;}
.coin{position:absolute; width:42px; height:42px; border-radius: 14px; border:1px solid rgba(0,240,255,.35);
  background: rgba(0,240,255,.12); color: var(--c); font-size: 20px; cursor:pointer; box-shadow: 0 14px 38px rgba(0,240,255,.10);
  transition: transform .12s ease;}
.coin:hover{transform: scale(1.06)}
</style>
