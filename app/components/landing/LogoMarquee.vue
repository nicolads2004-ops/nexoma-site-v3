<script setup lang="ts">
const logos = [
  'Atelier Rivaud', 'Groupe Valoris', 'Maison Clairac', 'LK Industries',
  'Studio Hélios', 'Côté Jardin', 'NovaBat', 'Comptoir Belharra'
]
</script>

<template>
  <section class="relative py-16 overflow-hidden border-y border-white/[0.08]" data-reveal>
    <div class="max-w-7xl mx-auto px-4 mb-8">
      <p class="text-center text-xs uppercase tracking-[0.2em] text-white/50 font-medium">
        Ils nous font confiance
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
          class="flex-shrink-0 mx-6 px-7 py-3.5 rounded-xl
                 bg-white/[0.06] border border-white/[0.10]
                 text-white/60 font-semibold text-sm whitespace-nowrap
                 hover:bg-white/[0.10] hover:text-white/80 hover:border-white/[0.18]
                 transition-all duration-300"
        >
          {{ logo }}
        </div>
      </div>
    </div>
  </section>
</template>
