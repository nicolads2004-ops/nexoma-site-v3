<script setup lang="ts">
const testimonials = [
  {
    quote: 'On était à 2 mois de mettre la clé sous la porte. Nexoma a analysé nos process et automatisé nos relances. En 3 semaines, +23K EUR de trésorerie récupérée. Aujourd\'hui, on embauche.',
    author: 'Thomas R.',
    role: 'Gérant — NovaBat (BTP)',
    initials: 'TR',
    rating: 5,
    before: 'Trésorerie critique, 60% d\'impayés',
    after: '+23K EUR récupérés en 3 semaines',
    metric: 'CA +35%'
  },
  {
    quote: 'Je ne voyais plus mes enfants grandir. 70h/semaine. J\'ai failli tout plaquer. Nexoma a automatisé 80% des demandes qui me bouffaient. Je travaille 45h et j\'ai retrouvé une vie. Honnêtement, ça m\'a sauvé.',
    author: 'Sophie L.',
    role: 'Gérante — Comptoir Belharra (Commerce)',
    initials: 'SL',
    rating: 5,
    before: '70h/semaine, zéro vie perso',
    after: '45h/semaine, weekends libres',
    metric: '-25h/sem'
  },
  {
    quote: 'Nos clients pensent qu\'on a embauché 3 personnes. En réalité, Nexoma a mis en place un accueil intelligent qui gère les demandes 24/7. On a doublé nos consultations en 2 mois.',
    author: 'Maître Clairac',
    role: 'Avocat — Cabinet Rivaud',
    initials: 'AC',
    rating: 5,
    before: 'Appels manqués, leads perdus',
    after: '100% des demandes traitées 24/7',
    metric: 'x2 RDV'
  },
  {
    quote: 'ROI visible dès le premier mois. On économise 18K EUR/an en commissions OTA grâce à la gestion automatique des réservations directes. Ça gère mieux que ce qu\'on faisait à la main.',
    author: 'Marc V.',
    role: 'Directeur — Maison Hélios (Hôtellerie)',
    initials: 'MV',
    rating: 5,
    before: '40% de commissions OTA',
    after: '70% de réservations directes',
    metric: '-18K EUR/an'
  },
  {
    quote: 'Quand on m\'a parlé d\'IA, j\'ai ri. "C\'est pour Google et Amazon, pas pour une PME de 12 personnes." 2 mois plus tard, mon taux de recouvrement est passé de 40% à 85%. Je ne ris plus. Je recommande.',
    author: 'Pierre D.',
    role: 'Gérant — LK Industries (Industrie)',
    initials: 'PD',
    rating: 5,
    before: '40% de taux de recouvrement',
    after: '85% de taux de recouvrement',
    metric: '+45pts'
  },
  {
    quote: 'L\'équipe Nexoma parle notre langue, pas du jargon tech. En 3 semaines, nos devis partent en 2 minutes au lieu de 4 heures. Mes commerciaux vendent enfin au lieu de faire de l\'admin.',
    author: 'Claire M.',
    role: 'DG — Groupe Valoris (Services)',
    initials: 'CM',
    rating: 5,
    before: '4h par devis, process manuel',
    after: '2 min par devis, automatisé',
    metric: '-98% temps'
  }
]

// Auto-rotating carousel
const activeIndex = ref(0)
const isPaused = ref(false)
let carouselTimer: ReturnType<typeof setInterval> | null = null

const startCarousel = () => {
  carouselTimer = setInterval(() => {
    if (!isPaused.value) {
      activeIndex.value = (activeIndex.value + 1) % testimonials.length
    }
  }, 5000)
}

const goTo = (index: number) => {
  activeIndex.value = index
  isPaused.value = true
  setTimeout(() => { isPaused.value = false }, 8000)
}

const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + testimonials.length) % testimonials.length
  isPaused.value = true
  setTimeout(() => { isPaused.value = false }, 8000)
}

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % testimonials.length
  isPaused.value = true
  setTimeout(() => { isPaused.value = false }, 8000)
}

onMounted(() => { startCarousel() })
onUnmounted(() => { if (carouselTimer) clearInterval(carouselTimer) })

// Visible testimonials (show 3 at a time on desktop, 1 on mobile)
const visibleTestimonials = computed(() => {
  const result = []
  for (let i = 0; i < 3; i++) {
    result.push({
      ...testimonials[(activeIndex.value + i) % testimonials.length],
      index: (activeIndex.value + i) % testimonials.length
    })
  }
  return result
})
</script>

<template>
  <section id="temoignages" class="relative py-24 md:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-noise" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <LandingSectionHeader
        eyebrow="Ils hésitaient aussi — voici ce qui s'est passé"
        title="Des dirigeants qui ont repris le "
        highlight="contrôle."
        description="Chacun d'eux pensait que l'IA, « c'est pas pour moi ». Aujourd'hui, aucun ne reviendrait en arrière. Voici leurs histoires."
      />

      <!-- Featured testimonial (mobile) -->
      <div class="md:hidden mb-8">
        <div
          class="glass-card rounded-2xl p-8 border-emerald-500/10"
          data-reveal
        >
          <div class="flex items-center gap-1 text-amber-400 mb-4 text-lg">
            <span v-for="s in testimonials[activeIndex].rating" :key="s">★</span>
          </div>

          <blockquote class="text-white/90 leading-relaxed text-lg mb-6 font-medium">
            "{{ testimonials[activeIndex].quote }}"
          </blockquote>

          <!-- Avant / Après -->
          <div class="grid grid-cols-2 gap-3 mb-6">
            <div class="rounded-lg bg-red-500/5 border border-red-500/10 p-3">
              <div class="text-xs text-red-400 font-medium mb-1">AVANT</div>
              <div class="text-xs text-white/50">{{ testimonials[activeIndex].before }}</div>
            </div>
            <div class="rounded-lg bg-emerald-500/5 border border-emerald-500/10 p-3">
              <div class="text-xs text-emerald-400 font-medium mb-1">APRÈS</div>
              <div class="text-xs text-white/50">{{ testimonials[activeIndex].after }}</div>
            </div>
          </div>

          <div class="flex items-center justify-between pt-6 border-t border-white/[0.06]">
            <div class="flex items-center gap-4">
              <div class="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-sm font-bold">
                {{ testimonials[activeIndex].initials }}
              </div>
              <div>
                <div class="font-medium text-white text-sm">{{ testimonials[activeIndex].author }}</div>
                <div class="text-xs text-white/40">{{ testimonials[activeIndex].role }}</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-lg font-bold text-emerald-400">{{ testimonials[activeIndex].metric }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop carousel (3 visible) -->
      <div class="hidden md:grid grid-cols-3 gap-6">
        <div
          v-for="(testimonial, i) in visibleTestimonials"
          :key="testimonial.index"
          class="glass-card rounded-2xl p-8 transition-all duration-500"
          :class="i === 0 ? 'border-emerald-500/20' : ''"
          data-reveal
          :data-reveal-delay="i + 1"
        >
          <!-- Stars -->
          <div class="flex items-center gap-1 text-amber-400 mb-4 text-base">
            <span v-for="s in testimonial.rating" :key="s">★</span>
          </div>

          <!-- Quote -->
          <blockquote class="text-white/80 leading-relaxed mb-6 text-base min-h-[140px]">
            "{{ testimonial.quote }}"
          </blockquote>

          <!-- Avant / Après -->
          <div class="grid grid-cols-2 gap-3 mb-6">
            <div class="rounded-lg bg-red-500/5 border border-red-500/10 p-3">
              <div class="text-xs text-red-400 font-medium mb-1">AVANT</div>
              <div class="text-xs text-white/50 leading-snug">{{ testimonial.before }}</div>
            </div>
            <div class="rounded-lg bg-emerald-500/5 border border-emerald-500/10 p-3">
              <div class="text-xs text-emerald-400 font-medium mb-1">APRÈS</div>
              <div class="text-xs text-white/50 leading-snug">{{ testimonial.after }}</div>
            </div>
          </div>

          <!-- Author + Metric -->
          <div class="flex items-center justify-between pt-6 border-t border-white/[0.06]">
            <div class="flex items-center gap-4">
              <div class="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-sm font-bold">
                {{ testimonial.initials }}
              </div>
              <div>
                <div class="font-medium text-white text-sm">{{ testimonial.author }}</div>
                <div class="text-xs text-white/40">{{ testimonial.role }}</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-lg font-bold text-emerald-400">{{ testimonial.metric }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel controls -->
      <div class="flex items-center justify-center gap-4 mt-10">
        <button
          class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10
                 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer"
          @click="prev"
        >
          <UIcon name="i-lucide-chevron-left" class="text-lg" />
        </button>

        <!-- Dots -->
        <div class="flex items-center gap-2">
          <button
            v-for="(_, i) in testimonials"
            :key="i"
            class="rounded-full transition-all duration-300 cursor-pointer"
            :class="i === activeIndex
              ? 'w-8 h-2 bg-emerald-400'
              : 'w-2 h-2 bg-white/20 hover:bg-white/40'"
            @click="goTo(i)"
          />
        </div>

        <button
          class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10
                 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer"
          @click="next"
        >
          <UIcon name="i-lucide-chevron-right" class="text-lg" />
        </button>
      </div>
    </div>
  </section>
</template>
