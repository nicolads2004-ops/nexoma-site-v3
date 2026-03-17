<script setup lang="ts">
const plans = [
  {
    name: 'Starter',
    description: 'Pour démarrer avec un agent',
    price: '490',
    features: [
      '1 agent IA au choix',
      'Configuration sur-mesure',
      'Formation de votre équipe',
      'Support email 48h',
      'Dashboard de suivi',
      'Mises à jour incluses'
    ],
    cta: 'Commencer',
    featured: false
  },
  {
    name: 'Pro',
    description: 'Pour les PME ambitieuses',
    price: '990',
    features: [
      '3 agents IA au choix',
      'Configuration avancée',
      'Formation complète + replays',
      'Support prioritaire 24h',
      'Dashboard avancé + analytics',
      'Intégrations CRM/ERP',
      'Rapports mensuels personnalisés',
      'Account manager dédié'
    ],
    cta: 'Choisir Pro',
    featured: true
  },
  {
    name: 'Enterprise',
    description: 'Solution complète sur-mesure',
    price: 'Sur devis',
    features: [
      '5 agents IA (suite complète)',
      'Développements spécifiques',
      'Formation + coaching continu',
      'Support dédié Slack/Teams',
      'SLA 99.9% disponibilité',
      'Intégrations illimitées',
      'Audit trimestriel de performance',
      'Directeur de projet dédié'
    ],
    cta: 'Nous contacter',
    featured: false
  }
]

const { openForm } = useContactForm()
</script>

<template>
  <section id="tarifs" class="relative py-24 md:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-grid opacity-30" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <LandingSectionHeader
        eyebrow="Tarifs"
        title="Investissez dans la "
        highlight="performance."
        description="Pas de surprise. Pas d'engagement longue durée. ROI garanti ou remboursé le 1er mois."
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(plan, index) in plans"
          :key="plan.name"
          class="rounded-2xl p-8 h-full flex flex-col"
          :class="plan.featured
            ? 'gradient-border relative z-10 md:scale-105'
            : 'glass-card'"
          data-reveal
          :data-reveal-delay="index + 1"
        >
          <!-- Popular badge -->
          <div v-if="plan.featured" class="mb-6">
            <span
              class="inline-flex px-3 py-1 rounded-full bg-emerald-500/10
                     text-emerald-400 text-xs font-medium"
            >
              Le plus populaire
            </span>
          </div>

          <div class="text-sm text-white/50 mb-2">{{ plan.name }}</div>
          <div class="text-xs text-white/30 mb-6">{{ plan.description }}</div>

          <!-- Price -->
          <div class="flex items-baseline gap-1 mb-8">
            <span
              class="font-extrabold text-white tabular-nums"
              :class="plan.price === 'Sur devis' ? 'text-2xl' : 'text-5xl'"
            >
              {{ plan.price }}
            </span>
            <span v-if="plan.price !== 'Sur devis'" class="text-white/40">€/mois</span>
          </div>

          <!-- Features -->
          <ul class="space-y-3 mb-8 flex-1">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start gap-3 text-sm text-white/60"
            >
              <UIcon
                name="i-lucide-check"
                class="flex-shrink-0 mt-0.5"
                :class="plan.featured ? 'text-emerald-400' : 'text-white/30'"
              />
              {{ feature }}
            </li>
          </ul>

          <!-- CTA -->
          <button
            class="w-full py-3.5 rounded-xl font-medium transition-all duration-300 cursor-pointer"
            :class="plan.featured
              ? 'bg-emerald-500 hover:bg-emerald-600 text-white glow-button'
              : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'"
            @click="openForm()"
          >
            {{ plan.cta }} →
          </button>
        </div>
      </div>

      <!-- Guarantee -->
      <div class="mt-12 text-center" data-reveal>
        <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.06]">
          <UIcon name="i-lucide-shield-check" class="text-emerald-400" />
          <span class="text-sm text-white/50">Satisfait ou remboursé le 1er mois — Sans engagement</span>
        </div>
      </div>
    </div>
  </section>
</template>
