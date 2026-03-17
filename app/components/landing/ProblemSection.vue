<script setup lang="ts">
const problems = [
  {
    icon: 'i-lucide-clock',
    title: 'Vos devis partent trop tard',
    description: 'Pendant que votre commercial reformate un devis pour la 100e fois, votre prospect a déjà signé chez le concurrent qui a répondu en 2 minutes grâce à l\'IA. Ce n\'est pas un problème de compétence — c\'est un problème d\'outils.',
    stat: '4h/jour',
    statLabel: 'gaspillées en admin',
    barPercent: 75,
    barLabel: '75% du temps commercial perdu en tâches admin',
    cost: '23 000 EUR/an'
  },
  {
    icon: 'i-lucide-phone-missed',
    title: 'Votre trésorerie saigne en silence',
    description: 'Vous le savez au fond de vous : ces factures impayées qui s\'accumulent, ces relances que vous "ferez demain"... Demain ne vient jamais. Et chaque semaine d\'inaction, c\'est 1 200 EUR qui s\'évaporent.',
    stat: '60%',
    statLabel: 'jamais relancées',
    barPercent: 60,
    barLabel: '60% des factures impayées oubliées',
    cost: '15 000 EUR/an'
  },
  {
    icon: 'i-lucide-user-x',
    title: 'Vous avez créé votre propre prison',
    description: 'Emails à 23h. Weekends au bureau. Vacances annulées. Vous n\'avez pas lancé votre boîte pour ça. Le vrai problème ? Vous faites le travail de 3 personnes parce que vos employés sont noyés dans des microtâches sans valeur.',
    stat: '70h',
    statLabel: 'par semaine',
    barPercent: 87,
    barLabel: '87% des dirigeants de PME frôlent le burn-out',
    cost: '9 000 EUR/an'
  }
]

// Tilt effect
const tiltStyle = ref<Record<number, Record<string, string>>>({})

const onMouseMove = (e: MouseEvent, index: number) => {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * -6
  const rotateY = ((x - centerX) / centerX) * 6

  tiltStyle.value[index] = {
    transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
    transition: 'transform 0.1s ease-out'
  }
}

const onMouseLeave = (index: number) => {
  tiltStyle.value[index] = {
    transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
    transition: 'transform 0.5s ease-out'
  }
}

// Progress bar animations
const barsVisible = ref(false)
const barsRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!barsRef.value) return
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        barsVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.2 })
  observer.observe(barsRef.value)
})

const totalCost = computed(() => {
  return problems.reduce((acc, p) => {
    const num = parseInt(p.cost.replace(/\D/g, ''))
    return acc + num
  }, 0)
})
</script>

<template>
  <section id="probleme" class="relative py-24 md:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-noise" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <LandingSectionHeader
        eyebrow="Ce n'est pas votre faute."
        title="Les microtâches tuent votre "
        highlight="entreprise."
        description="Vous n'avez pas échoué. On ne vous a jamais donné les bons outils. Pendant que vous relancez des factures à la main et reformatez des devis sous Excel, vos concurrents ont automatisé — et ils vous dépassent."
      />

      <div ref="barsRef" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(problem, index) in problems"
          :key="problem.title"
          class="glass-card rounded-2xl p-8 cursor-default"
          :style="tiltStyle[index]"
          data-reveal
          :data-reveal-delay="index + 1"
          @mousemove="onMouseMove($event, index)"
          @mouseleave="onMouseLeave(index)"
        >
          <!-- Icon -->
          <div
            class="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6"
          >
            <UIcon :name="problem.icon" class="text-red-400 text-xl" />
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">{{ problem.title }}</h3>
          <p class="text-white/50 leading-relaxed mb-6 text-sm">{{ problem.description }}</p>

          <!-- Animated Progress Bar -->
          <div class="mb-4">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs text-white/40">{{ problem.barLabel }}</span>
            </div>
            <div class="h-2 bg-white/[0.06] rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full transition-all duration-1500 ease-out"
                :style="{ width: barsVisible ? problem.barPercent + '%' : '0%' }"
              />
            </div>
          </div>

          <!-- Stat + Cost -->
          <div class="pt-6 border-t border-white/[0.06] flex items-end justify-between">
            <div>
              <span class="text-3xl font-bold text-red-400 tabular-nums">{{ problem.stat }}</span>
              <span class="text-sm text-white/40 ml-2">{{ problem.statLabel }}</span>
            </div>
            <div class="text-right">
              <span class="text-lg font-bold text-red-400/80">{{ problem.cost }}</span>
              <span class="block text-xs text-white/30">gaspillés</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Total Cost Calculator -->
      <div
        class="mt-12 glass-card rounded-2xl p-8 md:p-12 text-center border-red-500/20"
        data-reveal
        data-reveal-delay="4"
      >
        <p class="text-white/40 text-sm uppercase tracking-wider mb-3">
          Ne rien changer vous coûte exactement :
        </p>
        <div class="text-5xl md:text-7xl font-extrabold text-red-400 tabular-nums mb-4">
          {{ totalCost.toLocaleString('fr-FR') }} EUR<span class="text-2xl md:text-3xl text-white/30">/an</span>
        </div>
        <p class="text-white/50 max-w-xl mx-auto mb-2">
          L'équivalent d'un salaire chargé. Brûlé chaque année en tâches qu'un agent IA exécute en quelques secondes.
          <span class="text-white/70 font-medium">Vous n'avez pas un problème de rentabilité — vous avez un problème d'outils.</span>
        </p>
        <p class="text-emerald-400 font-medium text-sm">
          → Nos clients récupèrent cette somme dès les 3 premières semaines.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.duration-1500 {
  transition-duration: 1500ms;
}
</style>
