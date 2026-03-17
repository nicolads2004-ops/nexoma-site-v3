<script setup lang="ts">
const features = [
  {
    icon: 'i-lucide-file-text',
    title: 'Agent Devis Express',
    description: 'Votre prospect demande un devis à 22h ? Il le reçoit en 2 minutes, personnalisé, avec vos tarifs. Votre concurrent met 4 heures à répondre. Devinez qui signe le contrat.',
    stat: 85,
    statLabel: 'de temps gagné',
    statSuffix: '%',
    before: '4 heures',
    after: '2 minutes',
    beforeLabel: 'Avant : process manuel',
    afterLabel: 'Avec Nexoma',
    size: 'large'
  },
  {
    icon: 'i-lucide-bell-ring',
    title: 'Agent Recouvrement',
    description: 'Chaque facture impayée est relancée au bon moment, avec le bon ton. Escalade automatique si nécessaire. Résultat : +40% de factures récupérées — sans que vous leviez le petit doigt.',
    stat: 40,
    statLabel: 'de factures récupérées',
    statSuffix: '%',
    before: 'Relances manuelles',
    after: 'Séquences IA',
    beforeLabel: 'Post-it et oublis',
    afterLabel: 'Zéro effort',
    size: 'normal'
  },
  {
    icon: 'i-lucide-headphones',
    title: 'Agent Accueil 24/7',
    description: 'Un prospect vous appelle dimanche à 11h. Sans agent : messagerie, prospect perdu. Avec Nexoma : appel qualifié, RDV pris, vous êtes prévenu. Combien de clients perdez-vous chaque weekend ?',
    stat: 24,
    statLabel: 'heures sur 24',
    statSuffix: 'h',
    before: 'Heures de bureau',
    after: '24/7 non-stop',
    beforeLabel: 'Clients perdus le soir',
    afterLabel: 'Chaque lead capté',
    size: 'normal'
  },
  {
    icon: 'i-lucide-users',
    title: 'Agent RH & Onboarding',
    description: 'Votre nouveau salarié est opérationnel en 1 semaine au lieu de 3. Documents préparés, formations planifiées, suivi automatique. Vos employés font enfin ce pour quoi vous les payez : du travail à forte valeur.',
    stat: 60,
    statLabel: 'de temps d\'intégration en moins',
    statSuffix: '%',
    before: '3 semaines',
    after: '1 semaine',
    beforeLabel: 'Intégration classique',
    afterLabel: 'Onboarding IA',
    size: 'normal'
  },
  {
    icon: 'i-lucide-search',
    title: 'Agent Veille Marchés',
    description: 'Vos concurrents répondent à 9 appels d\'offres sur 10. Vous ? Peut-être 1. Notre agent détecte et analyse les marchés qui vous correspondent en temps réel. Ne laissez plus passer les contrats qui font votre année.',
    stat: 3,
    statLabel: 'plus d\'opportunités',
    statSuffix: 'x',
    before: 'Veille manuelle',
    after: 'Détection IA',
    beforeLabel: '1 marché sur 10 détecté',
    afterLabel: '9 marchés sur 10',
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
        eyebrow="La solution existe — et elle coûte moins cher qu'un stagiaire"
        title="5 agents qui travaillent pour vous "
        highlight="24h/24."
        description="Ce ne sont pas des chatbots. Ce sont des agents entraînés sur VOS données, VOS tarifs, VOS process. Imaginez un employé qui connaît votre entreprise par cœur dès le jour 1, ne prend jamais de pause, et coûte 10x moins qu'un salarié."
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
