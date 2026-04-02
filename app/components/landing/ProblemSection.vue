<script setup lang="ts">
const problems = [
  {
    icon: 'i-lucide-clock',
    title: 'Vos équipes sont noyées dans l\'administratif',
    description: 'Devis, relances, saisies, reporting... Vos collaborateurs passent 75% de leur temps sur des tâches sans valeur. Résultat : ils n\'ont plus le temps de faire ce qui rapporte vraiment — vendre, innover, développer.',
    stat: '4h/jour',
    statLabel: 'perdues en tâches répétitives',
    barPercent: 75,
    barLabel: '75% du temps perdu en tâches sans valeur ajoutée',
    cost: '23 000 EUR/an'
  },
  {
    icon: 'i-lucide-phone-missed',
    title: 'L\'argent file entre les mailles',
    description: 'Factures oubliées, prospects non relancés, opportunités manquées parce que personne n\'avait le temps. Ce n\'est pas de la négligence — c\'est le signe qu\'il y a trop de choses à gérer manuellement.',
    stat: '60%',
    statLabel: 'des opportunités perdues',
    barPercent: 60,
    barLabel: '60% des revenus perdus par manque de suivi',
    cost: '15 000 EUR/an'
  },
  {
    icon: 'i-lucide-user-x',
    title: 'Vous portez tout sur vos épaules',
    description: 'Emails à 23h. Weekends au bureau. Vacances annulées. Tout passe par vous parce que les process ne tournent pas sans vous. Vous n\'avez pas lancé votre boîte pour en devenir prisonnier.',
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
        title="Votre entreprise est pleine de "
        highlight="fuites invisibles."
        description="Vous n'avez pas un problème de compétence. Vous avez un problème d'outils. Pendant que vous et vos équipes perdez des heures sur des tâches répétitives, vos concurrents ont déjà optimisé — et ils avancent plus vite."
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
        <div class="text-4xl sm:text-5xl md:text-7xl font-extrabold text-red-400 tabular-nums mb-4">
          {{ totalCost.toLocaleString('fr-FR') }} EUR<span class="text-2xl md:text-3xl text-white/30">/an</span>
        </div>
        <p class="text-white/50 max-w-xl mx-auto mb-2">
          L'équivalent d'un salaire chargé. Brûlé chaque année en inefficacités que l'IA élimine en quelques semaines.
          <span class="text-white/70 font-medium">Ce n'est pas un problème de rentabilité — c'est un problème d'optimisation.</span>
        </p>
        <p class="text-green-400 font-medium text-sm">
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
