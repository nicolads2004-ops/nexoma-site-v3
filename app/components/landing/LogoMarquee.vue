<script setup lang="ts">
const logos = [
  'Atelier Rivaud', 'Groupe Valoris', 'Maison Clairac', 'LK Industries',
  'Studio Hélios', 'Côté Jardin', 'NovaBat', 'Comptoir Belharra'
]
</script>

<template>
  <section class="relative py-16 overflow-hidden border-y border-white/[0.04]" data-reveal>
    <div class="max-w-7xl mx-auto px-4 mb-8">
      <p class="text-center text-xs uppercase tracking-[0.2em] text-white/30 font-medium">
        Ils nous font confiance dans la Vienne (86)
      </p>
    </div>

    <!-- Marquee -->
    <div class="relative">
      <!-- Fade edges -->
      <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

      <div class="flex animate-marquee">
        <div
          v-for="(logo, i) in [...logos, ...logos]"
          :key="i"
          class="flex-shrink-0 mx-8 px-8 py-4 rounded-xl bg-white/[0.03] border border-white/[0.06]
                 text-white/30 font-semibold text-sm whitespace-nowrap
                 hover:bg-white/[0.06] hover:text-white/50 transition-all duration-300"
        >
          {{ logo }}
        </div>
      </div>
    </div>
  </section>
</template>
