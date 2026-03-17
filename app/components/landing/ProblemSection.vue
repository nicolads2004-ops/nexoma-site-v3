<script setup lang="ts">
const problems = [
  {
    icon: 'i-lucide-clock',
    title: 'Devis qui traînent',
    description: 'Vos commerciaux passent 4h/jour à faire des devis. Pendant ce temps, les prospects signent chez le concurrent qui a répondu en premier.',
    stat: '4h',
    statLabel: 'perdues par jour'
  },
  {
    icon: 'i-lucide-phone-missed',
    title: 'Relances oubliées',
    description: '60% des factures impayées ne sont jamais relancées. Post-it perdus, Excel oubliés, trésorerie en tension.',
    stat: '60%',
    statLabel: 'jamais relancées'
  },
  {
    icon: 'i-lucide-user-x',
    title: 'Vous êtes le goulot',
    description: 'Chaque décision passe par vous. Weekends sacrifiés, emails à 23h. Votre entreprise ne tourne pas sans vous.',
    stat: '70h',
    statLabel: 'par semaine'
  }
]
</script>

<template>
  <section id="probleme" class="relative py-24 md:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-noise" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <LandingSectionHeader
        eyebrow="Le problème"
        title="Votre entreprise grandit, mais "
        highlight="vous étouffez."
        description="Ces 3 problèmes coûtent en moyenne 47 000€/an aux PME de la Vienne."
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(problem, index) in problems"
          :key="problem.title"
          class="glass-card rounded-2xl p-8"
          data-reveal
          :data-reveal-delay="index + 1"
        >
          <!-- Icon -->
          <div
            class="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6"
          >
            <UIcon :name="problem.icon" class="text-red-400 text-xl" />
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">{{ problem.title }}</h3>
          <p class="text-white/50 leading-relaxed mb-6">{{ problem.description }}</p>

          <!-- Stat -->
          <div class="pt-6 border-t border-white/[0.06]">
            <span class="text-3xl font-bold text-red-400 tabular-nums">{{ problem.stat }}</span>
            <span class="text-sm text-white/40 ml-2">{{ problem.statLabel }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
