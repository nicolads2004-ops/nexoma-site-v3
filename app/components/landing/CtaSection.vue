<script setup lang="ts">
const { openForm } = useContactForm()

// Countdown scarcity - places remaining this month
const placesLeft = ref(4)

// Countdown timer to end of month
const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })

const updateCountdown = () => {
  const now = new Date()
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
  const diff = endOfMonth.getTime() - now.getTime()

  if (diff <= 0) return

  countdown.value = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000)
  }
}

let countdownTimer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  updateCountdown()
  countdownTimer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (countdownTimer) clearInterval(countdownTimer)
})
</script>

<template>
  <section class="relative py-24 md:py-32 overflow-hidden">
    <!-- Glow background -->
    <div class="absolute inset-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[200px] animate-glow" />
    </div>

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-reveal>
      <!-- Urgency badge -->
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full
               bg-orange-500/10 border border-orange-500/20 text-orange-400
               text-sm font-medium mb-6 animate-pulse-subtle"
      >
        <span class="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
        Plus que {{ placesLeft }} places disponibles ce mois-ci
      </div>

      <h2 class="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
        Dans 3 mois, vous aurez agi<br>
        <span class="gradient-text">— ou vous aurez perdu 12 000 EUR.</span>
      </h2>

      <p class="text-lg text-white/50 max-w-2xl mx-auto mb-6 leading-relaxed">
        Imaginez : dans 21 jours, vos devis partent en 2 minutes, vos factures se relancent toutes seules,
        et vous récupérez 25 heures par semaine. C'est exactement ce que vivent nos clients aujourd'hui.
        <span class="text-white/70 font-medium">La seule question : combien de temps allez-vous encore attendre ?</span>
      </p>

      <!-- Countdown -->
      <div class="flex items-center justify-center gap-4 mb-10">
        <div class="text-center">
          <div class="text-2xl md:text-3xl font-bold text-white tabular-nums">{{ String(countdown.days).padStart(2, '0') }}</div>
          <div class="text-xs text-white/30 uppercase tracking-wider mt-1">jours</div>
        </div>
        <span class="text-white/20 text-2xl font-light">:</span>
        <div class="text-center">
          <div class="text-2xl md:text-3xl font-bold text-white tabular-nums">{{ String(countdown.hours).padStart(2, '0') }}</div>
          <div class="text-xs text-white/30 uppercase tracking-wider mt-1">heures</div>
        </div>
        <span class="text-white/20 text-2xl font-light">:</span>
        <div class="text-center">
          <div class="text-2xl md:text-3xl font-bold text-white tabular-nums">{{ String(countdown.minutes).padStart(2, '0') }}</div>
          <div class="text-xs text-white/30 uppercase tracking-wider mt-1">min</div>
        </div>
        <span class="text-white/20 text-2xl font-light">:</span>
        <div class="text-center">
          <div class="text-2xl md:text-3xl font-bold text-white tabular-nums">{{ String(countdown.seconds).padStart(2, '0') }}</div>
          <div class="text-xs text-white/30 uppercase tracking-wider mt-1">sec</div>
        </div>
      </div>

      <!-- CTA Button with pulse -->
      <div class="flex flex-col items-center gap-4">
        <button
          class="group relative px-12 py-6 bg-emerald-500 hover:bg-emerald-600 text-white
                 rounded-xl font-bold text-xl cursor-pointer animate-cta-pulse transition-all duration-300"
          @click="openForm()"
        >
          <span class="relative z-10">Réserver mon diagnostic gratuit →</span>
          <!-- Pulse rings -->
          <span class="absolute inset-0 rounded-xl bg-emerald-500 animate-ping-slow opacity-20" />
        </button>

        <!-- Micro-guarantees -->
        <div class="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <div class="flex items-center gap-1.5 text-sm text-white/40">
            <UIcon name="i-lucide-check" class="text-emerald-400 text-sm" />
            <span>100% gratuit</span>
          </div>
          <div class="flex items-center gap-1.5 text-sm text-white/40">
            <UIcon name="i-lucide-check" class="text-emerald-400 text-sm" />
            <span>Sans engagement</span>
          </div>
          <div class="flex items-center gap-1.5 text-sm text-white/40">
            <UIcon name="i-lucide-check" class="text-emerald-400 text-sm" />
            <span>Résultats en 21 jours ou remboursé</span>
          </div>
        </div>
      </div>

      <!-- Social proof reminder -->
      <p class="mt-10 text-sm text-white/30">
        207 dirigeants de PME ont déjà franchi le pas. Ils ne reviendraient en arrière pour rien au monde.
      </p>
    </div>
  </section>
</template>

<style scoped>
@keyframes cta-pulse {
  0%, 100% { box-shadow: 0 0 30px -5px rgba(16, 185, 129, 0.4); transform: scale(1); }
  50% { box-shadow: 0 0 60px -5px rgba(16, 185, 129, 0.6); transform: scale(1.02); }
}
.animate-cta-pulse {
  animation: cta-pulse 3s ease-in-out infinite;
}
@keyframes ping-slow {
  0% { transform: scale(1); opacity: 0.3; }
  100% { transform: scale(1.5); opacity: 0; }
}
.animate-ping-slow {
  animation: ping-slow 2s ease-out infinite;
}
@keyframes pulse-subtle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
.animate-pulse-subtle {
  animation: pulse-subtle 3s ease-in-out infinite;
}
</style>
