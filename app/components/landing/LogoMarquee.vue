<script setup lang="ts">
const stats = [
  { value: '207+', label: 'entreprises accompagnées' },
  { value: '94%', label: 'de clients restent après 1 an' },
  { value: '21j', label: 'pour voir des résultats' },
  { value: '47K€', label: 'économisés en moyenne / an' }
]
</script>

<template>
  <section class="relative py-12 overflow-hidden" data-reveal>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="text-center py-4"
        >
          <div class="text-2xl md:text-3xl font-bold text-white mb-1">{{ stat.value }}</div>
          <div class="text-xs md:text-sm text-white/35 leading-tight">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Subtle separator -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
  </section>
</template>
