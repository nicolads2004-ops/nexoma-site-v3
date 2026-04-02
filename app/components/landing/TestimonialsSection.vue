<script setup lang="ts">
const testimonials = [
  {
    quote: 'On était à 2 mois de mettre la clé sous la porte. Nexoma a analysé nos process et automatisé nos relances. En 3 semaines, +23K EUR de trésorerie récupérée.',
    author: 'Thomas R.',
    role: 'Gérant',
    company: 'BTP — 18 salariés, Vienne (86)',
    initials: 'TR',
    date: 'Janvier 2026',
    problem: 'Trésorerie critique : 60% de factures impayées non relancées',
    results: ['CA +35%', '+23K EUR récupérés', 'Équipe recentrée']
  },
  {
    quote: 'Je ne voyais plus mes enfants grandir. 70h/semaine. Nexoma a automatisé 80% des tâches qui me bouffaient. J\'ai retrouvé une vie.',
    author: 'Sophie L.',
    role: 'Gérante',
    company: 'Commerce — 8 salariés, Poitiers',
    initials: 'SL',
    date: 'Novembre 2025',
    problem: '15h/semaine en admin, relances oubliées, aucun suivi',
    results: ['-25h/semaine', '78% impayés récupérés', 'Weekends libres']
  },
  {
    quote: 'Nos clients pensent qu\'on a embauché 3 personnes. En réalité c\'est de l\'IA. On a doublé nos consultations en 2 mois.',
    author: 'Maître C.',
    role: 'Avocat associé',
    company: 'Cabinet juridique — 5 personnes, Poitiers',
    initials: 'AC',
    date: 'Décembre 2025',
    problem: '35% d\'appels manqués, RDV chaotiques, secrétariat débordé',
    results: ['x2 consultations', '100% traité 24/7', 'Note 9.4/10']
  },
  {
    quote: 'Quand on m\'a parlé d\'IA, j\'ai ri. "C\'est pour Google, pas pour une PME." 2 mois plus tard, mon recouvrement est passé de 40% à 85%.',
    author: 'Pierre D.',
    role: 'Gérant',
    company: 'Industrie — 12 salariés, Châtellerault',
    initials: 'PD',
    date: 'Février 2026',
    problem: 'Recouvrement à 40%, zéro automatisation',
    results: ['+45 pts recouvrement', '-18K EUR pertes', '100% automatisé']
  },
  {
    quote: 'Mes commerciaux vendent enfin au lieu de faire de l\'admin. Les devis partent en 2 minutes au lieu de 4 heures.',
    author: 'Claire M.',
    role: 'Directrice générale',
    company: 'Services B2B — 22 salariés, Niort',
    initials: 'CM',
    date: 'Mars 2026',
    problem: '4h par devis, commerciaux noyés dans l\'administratif',
    results: ['-98% temps devis', 'Conversion doublée', '+120K EUR/an']
  },
  {
    quote: 'ROI visible dès le premier mois. On économise 18K EUR/an. Ça marche mieux que ce qu\'on faisait à la main.',
    author: 'Marc V.',
    role: 'Directeur',
    company: 'Hôtellerie — 15 salariés, La Rochelle',
    initials: 'MV',
    date: 'Janvier 2026',
    problem: '100% réservations OTA, 40% de commissions perdues',
    results: ['70% résa directes', '-18K EUR commissions', 'Note 3.8 → 4.6']
  }
]

const activeIndex = ref(0)
const isPaused = ref(false)
let timer: ReturnType<typeof setInterval> | null = null

const totalPairs = Math.floor(testimonials.length / 2)

const startTimer = () => {
  timer = setInterval(() => {
    if (!isPaused.value) {
      activeIndex.value = (activeIndex.value + 1) % totalPairs
    }
  }, 6000)
}

const goTo = (index: number) => {
  activeIndex.value = index
  isPaused.value = true
  setTimeout(() => { isPaused.value = false }, 10000)
}

const prev = () => goTo(activeIndex.value <= 0 ? totalPairs - 1 : activeIndex.value - 1)
const next = () => goTo(activeIndex.value >= totalPairs - 1 ? 0 : activeIndex.value + 1)

const card1 = computed(() => testimonials[activeIndex.value * 2])
const card2 = computed(() => testimonials[activeIndex.value * 2 + 1])

onMounted(() => startTimer())
onBeforeUnmount(() => { if (timer) clearInterval(timer) })
</script>

<template>
  <section id="temoignages" class="relative py-24 md:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-noise" />

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <LandingSectionHeader
        eyebrow="Ils hésitaient aussi — voici ce qui s'est passé"
        title="Des dirigeants qui ont repris le "
        highlight="contrôle."
        description="Chacun pensait que l'IA, « c'est pas pour moi ». Aujourd'hui, aucun ne reviendrait en arrière."
      />

      <!-- Desktop: 2 cartes côte à côte -->
      <div class="hidden md:grid grid-cols-2 gap-8 mb-12">
        <!-- Card 1 -->
        <div class="group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-green-500/20 transition-all duration-500">
          <!-- Gradient accent top -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-400" />

          <div class="p-7">
            <!-- Header: avatar + infos + date -->
            <div class="flex items-start gap-4 mb-5">
              <div class="w-13 h-13 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0 shadow-lg shadow-green-500/20">
                {{ card1.initials }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-white text-base leading-tight">{{ card1.author }}</div>
                <div class="text-sm text-white/50 mt-0.5">{{ card1.role }}</div>
                <div class="text-xs text-white/30 mt-0.5">{{ card1.company }}</div>
              </div>
              <div class="flex flex-col items-end gap-1 flex-shrink-0">
                <div class="flex items-center gap-0.5 text-amber-400 text-xs">
                  <span>★★★★★</span>
                </div>
                <div class="text-[11px] text-white/20">{{ card1.date }}</div>
              </div>
            </div>

            <!-- Problème (rouge subtle) -->
            <div class="rounded-xl bg-red-500/[0.05] border border-red-500/[0.1] px-4 py-3 mb-5">
              <div class="text-[10px] text-red-400/60 uppercase tracking-widest font-semibold mb-1">Situation avant</div>
              <p class="text-sm text-white/40 leading-relaxed">{{ card1.problem }}</p>
            </div>

            <!-- Quote -->
            <div class="mb-5">
              <div class="text-green-500/30 text-3xl font-serif leading-none mb-2">"</div>
              <blockquote class="text-white/80 leading-relaxed text-[15px] -mt-4 pl-2">
                {{ card1.quote }}
              </blockquote>
            </div>

            <!-- Résultats -->
            <div class="pt-5 border-t border-white/[0.06]">
              <div class="text-[10px] text-green-400/60 uppercase tracking-widest font-semibold mb-3">Résultats obtenus</div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="result in card1.results"
                  :key="result"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/[0.08] border border-green-500/[0.15] text-sm text-green-400 font-medium"
                >
                  <UIcon name="i-lucide-trending-up" class="text-xs flex-shrink-0" />
                  {{ result }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-green-500/20 transition-all duration-500">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-400" />

          <div class="p-7">
            <div class="flex items-start gap-4 mb-5">
              <div class="w-13 h-13 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0 shadow-lg shadow-green-500/20">
                {{ card2.initials }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-white text-base leading-tight">{{ card2.author }}</div>
                <div class="text-sm text-white/50 mt-0.5">{{ card2.role }}</div>
                <div class="text-xs text-white/30 mt-0.5">{{ card2.company }}</div>
              </div>
              <div class="flex flex-col items-end gap-1 flex-shrink-0">
                <div class="flex items-center gap-0.5 text-amber-400 text-xs">
                  <span>★★★★★</span>
                </div>
                <div class="text-[11px] text-white/20">{{ card2.date }}</div>
              </div>
            </div>

            <div class="rounded-xl bg-red-500/[0.05] border border-red-500/[0.1] px-4 py-3 mb-5">
              <div class="text-[10px] text-red-400/60 uppercase tracking-widest font-semibold mb-1">Situation avant</div>
              <p class="text-sm text-white/40 leading-relaxed">{{ card2.problem }}</p>
            </div>

            <div class="mb-5">
              <div class="text-green-500/30 text-3xl font-serif leading-none mb-2">"</div>
              <blockquote class="text-white/80 leading-relaxed text-[15px] -mt-4 pl-2">
                {{ card2.quote }}
              </blockquote>
            </div>

            <div class="pt-5 border-t border-white/[0.06]">
              <div class="text-[10px] text-green-400/60 uppercase tracking-widest font-semibold mb-3">Résultats obtenus</div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="result in card2.results"
                  :key="result"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/[0.08] border border-green-500/[0.15] text-sm text-green-400 font-medium"
                >
                  <UIcon name="i-lucide-trending-up" class="text-xs flex-shrink-0" />
                  {{ result }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile: 1 card -->
      <div class="md:hidden mb-10">
        <div class="relative rounded-2xl overflow-hidden border border-white/[0.08]">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-400" />

          <div class="p-6">
            <div class="flex items-start gap-4 mb-5">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {{ card1.initials }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-white">{{ card1.author }}</div>
                <div class="text-sm text-white/50">{{ card1.role }}</div>
                <div class="text-xs text-white/30">{{ card1.company }}</div>
              </div>
              <div class="flex items-center gap-0.5 text-amber-400 text-xs flex-shrink-0">
                <span>★★★★★</span>
              </div>
            </div>

            <div class="rounded-xl bg-red-500/[0.05] border border-red-500/[0.1] px-4 py-3 mb-5">
              <div class="text-[10px] text-red-400/60 uppercase tracking-widest font-semibold mb-1">Situation avant</div>
              <p class="text-sm text-white/40">{{ card1.problem }}</p>
            </div>

            <div class="mb-5">
              <div class="text-green-500/30 text-2xl font-serif leading-none mb-1">"</div>
              <blockquote class="text-white/90 leading-relaxed text-base -mt-3 pl-2">
                {{ card1.quote }}
              </blockquote>
            </div>

            <div class="pt-4 border-t border-white/[0.06]">
              <div class="text-[10px] text-green-400/60 uppercase tracking-widest font-semibold mb-3">Résultats</div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="result in card1.results"
                  :key="result"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/[0.08] border border-green-500/[0.15] text-sm text-green-400 font-medium"
                >
                  <UIcon name="i-lucide-trending-up" class="text-xs" />
                  {{ result }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex items-center justify-center gap-4">
        <button
          class="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1]
                 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer"
          @click="prev"
        >
          <UIcon name="i-lucide-chevron-left" class="text-lg" />
        </button>

        <div class="flex items-center gap-2">
          <button
            v-for="i in totalPairs"
            :key="i"
            class="rounded-full transition-all duration-300 cursor-pointer"
            :class="(i - 1) === activeIndex
              ? 'w-8 h-2 bg-green-400'
              : 'w-2 h-2 bg-white/[0.2] hover:bg-white/[0.4]'"
            @click="goTo(i - 1)"
          />
        </div>

        <button
          class="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1]
                 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer"
          @click="next"
        >
          <UIcon name="i-lucide-chevron-right" class="text-lg" />
        </button>
      </div>
    </div>
  </section>
</template>
