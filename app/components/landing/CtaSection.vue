<script setup lang="ts">
const { openCalendly } = useCalendly()
</script>

<template>
  <section class="relative py-24 md:py-32 overflow-hidden">
    <!-- Glow background -->
    <div class="absolute inset-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[150px] animate-glow" />
    </div>

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-reveal>
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
               bg-emerald-500/10 border border-emerald-500/20 text-emerald-400
               text-xs uppercase tracking-[0.15em] font-medium mb-6"
      >
        Prêt à démarrer ?
      </div>

      <h2 class="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
        Arrêtez de perdre du temps.<br>
        <span class="gradient-text">Automatisez.</span>
      </h2>

      <p class="text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
        30 minutes de diagnostic gratuit. On identifie ensemble les tâches qui vous coûtent le plus cher
        et on vous montre comment nos agents peuvent les gérer.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          class="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white
                 rounded-xl font-semibold text-lg glow-button cursor-pointer"
          @click="openCalendly()"
        >
          Réserver mon diagnostic gratuit →
        </button>
      </div>

      <p class="mt-6 text-sm text-white/30">
        Gratuit • Sans engagement • Résultats en 3 semaines
      </p>
    </div>
  </section>
</template>
