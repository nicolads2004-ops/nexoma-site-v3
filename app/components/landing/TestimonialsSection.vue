<script setup lang="ts">
const testimonials = [
  {
    quote: 'On a doublé notre volume de devis sans embaucher. Les prospects sont impressionnés par notre réactivité.',
    author: 'Thomas R.',
    role: 'Gérant — NovaBat',
    initials: 'TR',
    rating: 5
  },
  {
    quote: 'Le chatbot gère 80% des questions basiques. Je me concentre enfin sur le conseil et le terrain.',
    author: 'Sophie L.',
    role: 'Gérante — Comptoir Belharra',
    initials: 'SL',
    rating: 5
  },
  {
    quote: 'Nos clients pensent qu\'on a embauché une assistante. C\'est notre agent IA qui répond 24/7.',
    author: 'Maître Clairac',
    role: 'Avocat — Cabinet Rivaud',
    initials: 'AC',
    rating: 5
  },
  {
    quote: 'ROI visible dès le premier mois. On économise 18K€/an en commissions grâce aux réservations directes.',
    author: 'Marc V.',
    role: 'Directeur — Maison Hélios',
    initials: 'MV',
    rating: 5
  },
  {
    quote: 'J\'étais sceptique sur l\'IA. Après 2 mois, je ne peux plus m\'en passer. Les relances se font toutes seules.',
    author: 'Pierre D.',
    role: 'Gérant — LK Industries',
    initials: 'PD',
    rating: 5
  },
  {
    quote: 'L\'équipe Nexoma comprend nos problèmes de terrain. Pas du jargon tech, des solutions concrètes.',
    author: 'Claire M.',
    role: 'DG — Groupe Valoris',
    initials: 'CM',
    rating: 5
  }
]
</script>

<template>
  <section id="temoignages" class="relative py-24 md:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-noise" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <LandingSectionHeader
        eyebrow="Témoignages"
        title="Ce que disent "
        highlight="nos clients."
        description="Des dirigeants de PME comme vous qui ont transformé leur quotidien."
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.author"
          class="glass-card rounded-2xl p-8"
          data-reveal
          :data-reveal-delay="(index % 3) + 1"
        >
          <!-- Stars -->
          <div class="flex items-center gap-1 text-amber-400 mb-4 text-sm">
            <span v-for="s in testimonial.rating" :key="s">★</span>
          </div>

          <!-- Quote -->
          <blockquote class="text-white/80 leading-relaxed mb-6">
            "{{ testimonial.quote }}"
          </blockquote>

          <!-- Author -->
          <div class="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
            <div
              class="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600
                     flex items-center justify-center text-white text-sm font-bold"
            >
              {{ testimonial.initials }}
            </div>
            <div>
              <div class="font-medium text-white text-sm">{{ testimonial.author }}</div>
              <div class="text-xs text-white/40">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
