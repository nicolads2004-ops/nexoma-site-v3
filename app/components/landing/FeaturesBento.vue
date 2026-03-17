<script setup lang="ts">
const features = [
  {
    icon: 'i-lucide-file-text',
    title: 'Devis Express',
    description: 'Génération automatique de devis professionnels en 2 minutes. Votre prospect reçoit une proposition pendant que vos concurrents cherchent encore leur Excel.',
    stat: '-85%',
    statLabel: 'de temps de traitement',
    size: 'large'
  },
  {
    icon: 'i-lucide-bell-ring',
    title: 'Relance & Recouvrement',
    description: 'Séquences de relance intelligentes par email et SMS. Ton adapté, timing optimal, escalade automatique.',
    stat: '+40%',
    statLabel: 'de factures récupérées',
    size: 'normal'
  },
  {
    icon: 'i-lucide-headphones',
    title: 'Accueil 24/7',
    description: 'Chatbot IA qui répond à vos clients jour et nuit. Qualifie les leads, prend les RDV, répond aux FAQ.',
    stat: '24/7',
    statLabel: 'sans interruption',
    size: 'normal'
  },
  {
    icon: 'i-lucide-users',
    title: 'RH & Onboarding',
    description: 'Automatisez l\'intégration de vos nouveaux employés. Documents, formations, suivi — tout est géré.',
    stat: '-60%',
    statLabel: 'de temps d\'intégration',
    size: 'normal'
  },
  {
    icon: 'i-lucide-search',
    title: 'Veille Marchés Publics',
    description: 'Détection automatique des appels d\'offres pertinents. Alertes instantanées, analyse des critères, aide à la réponse.',
    stat: '3x',
    statLabel: 'plus d\'opportunités détectées',
    size: 'normal'
  }
]
</script>

<template>
  <section id="solution" class="relative py-24 md:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-grid opacity-50" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <LandingSectionHeader
        eyebrow="La solution"
        title="5 agents IA qui travaillent "
        highlight="pour vous."
        description="Chaque agent est entraîné sur votre métier, vos process, vos documents. Résultats en 3 semaines."
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
            >
              <UIcon :name="features[0].icon" class="text-emerald-400 text-2xl" />
            </div>

            <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ features[0].title }}</h3>
            <p class="text-white/50 leading-relaxed text-lg mb-8 max-w-lg">
              {{ features[0].description }}
            </p>

            <!-- Visual demo placeholder -->
            <div class="flex-1 rounded-xl bg-white/[0.02] border border-white/[0.06] p-6 mb-6 min-h-[120px] flex items-center justify-center">
              <div class="text-center">
                <div class="text-sm text-white/30 mb-2">Temps de génération d'un devis</div>
                <div class="flex items-center gap-6">
                  <div>
                    <div class="text-2xl font-bold text-red-400 line-through opacity-60">4 heures</div>
                    <div class="text-xs text-white/30">Avant</div>
                  </div>
                  <UIcon name="i-lucide-arrow-right" class="text-emerald-400 text-xl" />
                  <div>
                    <div class="text-2xl font-bold text-emerald-400">2 minutes</div>
                    <div class="text-xs text-white/30">Avec Nexoma</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-6 border-t border-white/[0.06]">
              <span class="text-4xl font-bold text-emerald-400 tabular-nums">{{ features[0].stat }}</span>
              <span class="text-sm text-white/40 ml-2">{{ features[0].statLabel }}</span>
            </div>
          </div>
        </div>

        <!-- Standard cards -->
        <div
          v-for="(feature, index) in features.slice(1)"
          :key="feature.title"
          class="glass-card rounded-2xl p-8"
          data-reveal
          :data-reveal-delay="index + 1"
        >
          <div
            class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6"
          >
            <UIcon :name="feature.icon" class="text-emerald-400 text-xl" />
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">{{ feature.title }}</h3>
          <p class="text-white/50 leading-relaxed mb-6">{{ feature.description }}</p>

          <div class="pt-6 border-t border-white/[0.06]">
            <span class="text-3xl font-bold text-emerald-400 tabular-nums">{{ feature.stat }}</span>
            <span class="text-sm text-white/40 ml-2">{{ feature.statLabel }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
