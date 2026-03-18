<script setup lang="ts">
const features = [
  {
    icon: 'i-lucide-zap',
    title: 'Automatiser les tâches répétitives',
    description: 'Devis, relances, saisies, emails de suivi... Tout ce que vos équipes font à la main et qui pourrait tourner tout seul. On identifie ces tâches et on les automatise. Résultat : vos collaborateurs font enfin ce qui compte.',
    stat: 85,
    statLabel: 'de temps libéré',
    statSuffix: '%',
    before: 'Process manuels',
    after: 'Automatisé par l\'IA',
    beforeLabel: 'Avant Nexoma',
    afterLabel: 'Après Nexoma',
    size: 'large'
  },
  {
    icon: 'i-lucide-trending-up',
    title: 'Récupérer l\'argent qui vous échappe',
    description: 'Factures impayées non relancées, prospects qui tombent dans l\'oubli, opportunités ratées faute de réactivité. On met en place un suivi intelligent qui ne laisse plus rien passer.',
    stat: 40,
    statLabel: 'de revenus récupérés',
    statSuffix: '%',
    before: 'Suivi manuel',
    after: 'Suivi automatique',
    beforeLabel: 'Oublis et pertes',
    afterLabel: 'Chaque euro suivi',
    size: 'normal'
  },
  {
    icon: 'i-lucide-clock',
    title: 'Être disponible quand vos clients ont besoin de vous',
    description: 'Un client vous contacte le soir, le weekend, un jour férié ? Aujourd\'hui : messagerie, perdu. Avec Nexoma : il est accueilli, qualifié, orienté — automatiquement. Vous ne ratez plus rien.',
    stat: 24,
    statLabel: 'heures sur 24',
    statSuffix: 'h',
    before: 'Heures de bureau',
    after: 'Disponible 24/7',
    beforeLabel: 'Leads perdus',
    afterLabel: 'Chaque demande captée',
    size: 'normal'
  },
  {
    icon: 'i-lucide-users',
    title: 'Libérer vos équipes pour ce qui a de la valeur',
    description: 'Vos salariés passent des heures sur de la saisie, du classement, de la relance ? On prend en charge ces tâches. Résultat : ils se concentrent sur le métier, la relation client, la croissance.',
    stat: 60,
    statLabel: 'de productivité en plus',
    statSuffix: '%',
    before: 'Tâches répétitives',
    after: 'Travail à forte valeur',
    beforeLabel: 'Temps gaspillé',
    afterLabel: 'Équipe recentrée',
    size: 'normal'
  },
  {
    icon: 'i-lucide-target',
    title: 'Détecter les opportunités avant les autres',
    description: 'Appels d\'offres, évolutions marché, signaux faibles de vos clients... L\'IA surveille et vous alerte en temps réel. Vos concurrents réagissent. Vous, vous anticipez.',
    stat: 3,
    statLabel: 'plus d\'opportunités détectées',
    statSuffix: 'x',
    before: 'Veille manuelle',
    after: 'Veille automatique',
    beforeLabel: '1 opportunité sur 10',
    afterLabel: '9 sur 10 captées',
    size: 'normal'
  }
]

// Animated progress bars
const sectionVisible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

// Icon pulse on reveal
const iconPulse = ref<Record<number, boolean>>({})

onMounted(() => {
  if (!sectionRef.value) return
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sectionVisible.value = true
        // Stagger icon pulses
        features.forEach((_, i) => {
          setTimeout(() => { iconPulse.value[i] = true }, i * 200)
        })
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })
  observer.observe(sectionRef.value)
})
</script>

<template>
  <section id="solution" class="relative py-24 md:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-grid opacity-50" />

    <div ref="sectionRef" class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <LandingSectionHeader
        eyebrow="Ce qu'on fait concrètement pour vous"
        title="On optimise ce qui "
        highlight="vous ralentit."
        description="Chaque entreprise est différente. On analyse vos process, on identifie les points de friction, et on met en place des solutions IA taillées sur-mesure pour votre métier. Pas de la tech générique — du concret, adapté à vous."
      />

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Large feature card -->
        <div
          class="glass-card rounded-2xl p-8 md:col-span-2 lg:col-span-2 lg:row-span-2"
          data-reveal
        >
          <div class="h-full flex flex-col">
            <div
              class="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6"
              :class="iconPulse[0] && 'animate-icon-pulse'"
            >
              <UIcon :name="features[0].icon" class="text-emerald-400 text-2xl" />
            </div>

            <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ features[0].title }}</h3>
            <p class="text-white/50 leading-relaxed text-lg mb-8 max-w-lg">
              {{ features[0].description }}
            </p>

            <!-- Before / After visual -->
            <div class="flex-1 rounded-xl bg-white/[0.02] border border-white/[0.06] p-6 mb-6 min-h-[120px]">
              <div class="text-sm text-white/30 mb-4 text-center">Temps de génération d'un devis</div>
              <div class="flex items-center justify-center gap-8">
                <div class="text-center flex-1">
                  <div class="text-xs text-white/30 uppercase tracking-wider mb-2">{{ features[0].beforeLabel }}</div>
                  <div class="text-3xl font-bold text-red-400 line-through opacity-60">{{ features[0].before }}</div>
                </div>
                <div class="flex flex-col items-center gap-1">
                  <UIcon name="i-lucide-arrow-right" class="text-emerald-400 text-2xl" />
                  <span class="text-xs text-emerald-400/60">-98%</span>
                </div>
                <div class="text-center flex-1">
                  <div class="text-xs text-white/30 uppercase tracking-wider mb-2">{{ features[0].afterLabel }}</div>
                  <div class="text-3xl font-bold text-emerald-400">{{ features[0].after }}</div>
                </div>
              </div>
            </div>

            <!-- Animated progress stat -->
            <div class="pt-6 border-t border-white/[0.06]">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-white/40">{{ features[0].statLabel }}</span>
                <span class="text-lg font-bold text-emerald-400 tabular-nums">
                  {{ features[0].stat }}{{ features[0].statSuffix }}
                </span>
              </div>
              <div class="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-1500 ease-out"
                  :style="{ width: sectionVisible ? features[0].stat + '%' : '0%' }"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Standard cards -->
        <div
          v-for="(feature, index) in features.slice(1)"
          :key="feature.title"
          class="glass-card rounded-2xl p-8 group"
          data-reveal
          :data-reveal-delay="index + 1"
        >
          <div
            class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6"
            :class="iconPulse[index + 1] && 'animate-icon-pulse'"
          >
            <UIcon :name="feature.icon" class="text-emerald-400 text-xl" />
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">{{ feature.title }}</h3>
          <p class="text-white/50 leading-relaxed mb-4 text-sm">{{ feature.description }}</p>

          <!-- Mini Before/After -->
          <div class="flex items-center gap-3 mb-6 text-xs">
            <span class="text-red-400/60 line-through">{{ feature.before }}</span>
            <UIcon name="i-lucide-arrow-right" class="text-emerald-400/60 text-sm" />
            <span class="text-emerald-400 font-medium">{{ feature.after }}</span>
          </div>

          <!-- Animated bar -->
          <div class="pt-6 border-t border-white/[0.06]">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs text-white/40">{{ feature.statLabel }}</span>
              <span class="text-sm font-bold text-emerald-400 tabular-nums">
                {{ feature.stat }}{{ feature.statSuffix }}
              </span>
            </div>
            <div class="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-1500 ease-out"
                :style="{ width: sectionVisible ? Math.min(feature.stat * (feature.statSuffix === 'x' ? 33 : 1), 100) + '%' : '0%' }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.duration-1500 {
  transition-duration: 1500ms;
}
@keyframes icon-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
  100% { transform: scale(1); }
}
.animate-icon-pulse {
  animation: icon-pulse 0.6s ease-out;
}
</style>
