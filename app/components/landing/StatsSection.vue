<script setup lang="ts">
const stats = [
  { value: '200+', label: 'PME accompagnées', suffix: '' },
  { value: '85', label: 'de temps gagné', suffix: '%' },
  { value: '3', label: 'semaines de déploiement', suffix: '' },
  { value: '4.9', label: 'sur 5 de satisfaction', suffix: '/5' }
]
</script>

<template>
  <section class="relative py-24 md:py-32 overflow-hidden">
    <!-- Gradient background -->
    <div class="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.05] via-emerald-500/[0.02] to-transparent" />
    <div class="absolute inset-0 bg-noise" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="text-center"
          data-reveal
          :data-reveal-delay="index + 1"
        >
          <div class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tabular-nums mb-2">
            {{ stat.value }}<span class="text-emerald-400">{{ stat.suffix || '+' }}</span>
          </div>
          <div class="text-sm md:text-base text-white/40 uppercase tracking-wider">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
