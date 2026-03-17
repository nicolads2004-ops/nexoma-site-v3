<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Diagnostic gratuit',
    description: 'On analyse vos process actuels en 30 minutes. On identifie les 3 tâches qui vous coûtent le plus cher.',
    icon: 'i-lucide-scan'
  },
  {
    number: '02',
    title: 'Configuration sur-mesure',
    description: 'On entraîne vos agents IA sur vos documents, votre ton, vos process. Pas de solution générique.',
    icon: 'i-lucide-settings'
  },
  {
    number: '03',
    title: 'Résultats en 3 semaines',
    description: 'Déploiement, formation de votre équipe, et suivi des performances. ROI visible dès le premier mois.',
    icon: 'i-lucide-rocket'
  }
]
</script>

<template>
  <section id="comment" class="relative py-24 md:py-32 overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <LandingSectionHeader
        eyebrow="Comment ça marche"
        title="Opérationnel en "
        highlight="3 étapes."
        description="Pas de projet IT de 6 mois. Pas de réunions interminables. Juste des résultats rapides."
      />

      <div class="relative">
        <!-- Connecting line (desktop) -->
        <div class="hidden lg:block absolute top-24 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0" />

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div
            v-for="(step, index) in steps"
            :key="step.number"
            class="relative text-center"
            data-reveal
            :data-reveal-delay="index + 1"
          >
            <!-- Step circle -->
            <div class="relative mx-auto mb-8">
              <div
                class="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20
                       flex items-center justify-center mx-auto
                       group-hover:bg-emerald-500/20 transition-colors duration-300"
              >
                <UIcon :name="step.icon" class="text-emerald-400 text-2xl" />
              </div>
              <!-- Step number -->
              <div
                class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 text-white
                       text-xs font-bold flex items-center justify-center"
              >
                {{ step.number }}
              </div>
            </div>

            <h3 class="text-xl font-semibold text-white mb-3">{{ step.title }}</h3>
            <p class="text-white/50 leading-relaxed max-w-sm mx-auto">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
