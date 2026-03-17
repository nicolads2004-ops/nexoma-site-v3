<script setup lang="ts">
const activeTab = ref(0)

const useCases = [
  {
    sector: 'BTP & Artisanat',
    icon: 'i-lucide-hard-hat',
    title: 'NovaBat — Entreprise BTP',
    problem: 'Devis manuels sur Excel, 4h par devis, prospects qui signent ailleurs.',
    solution: 'Agent Devis Express + Relance automatique',
    results: [
      { label: 'Temps par devis', before: '4 heures', after: '35 min' },
      { label: 'Taux de conversion', before: '15%', after: '38%' },
      { label: 'CA additionnel', before: '', after: '+120K€/an' }
    ],
    quote: 'On a doublé notre volume de devis sans embaucher. Les prospects sont impressionnés par notre réactivité.',
    author: 'Thomas R., Gérant'
  },
  {
    sector: 'Commerce & Retail',
    icon: 'i-lucide-store',
    title: 'Comptoir Belharra — Commerce',
    problem: 'Pas de suivi client, relances manuelles, stock géré sur papier.',
    solution: 'Agent Accueil 24/7 + Relance & Recouvrement',
    results: [
      { label: 'Réponse client', before: '24-48h', after: 'Instantané' },
      { label: 'Impayés récupérés', before: '30%', after: '78%' },
      { label: 'Temps admin/semaine', before: '15h', after: '4h' }
    ],
    quote: 'Le chatbot gère 80% des questions basiques. Je me concentre enfin sur le conseil.',
    author: 'Sophie L., Gérante'
  },
  {
    sector: 'Professions libérales',
    icon: 'i-lucide-scale',
    title: 'Cabinet Rivaud & Associés',
    problem: 'Secrétariat débordé, RDV manqués, dossiers qui traînent.',
    solution: 'Agent Accueil 24/7 + RH & Onboarding',
    results: [
      { label: 'Appels manqués', before: '35%', after: '2%' },
      { label: 'Prise de RDV', before: 'Manuelle', after: 'Automatique' },
      { label: 'Satisfaction client', before: '7.2/10', after: '9.4/10' }
    ],
    quote: 'Nos clients pensent qu\'on a embauché une assistante de plus. C\'est notre agent IA.',
    author: 'Maître Clairac, Avocat associé'
  },
  {
    sector: 'Hôtellerie',
    icon: 'i-lucide-bed',
    title: 'Maison Hélios — Hôtellerie',
    problem: 'Réservations par téléphone, pas de suivi post-séjour, avis non gérés.',
    solution: 'Agent Accueil 24/7 + Veille & Relance',
    results: [
      { label: 'Réservations directes', before: '25%', after: '58%' },
      { label: 'Note Google', before: '3.8/5', after: '4.6/5' },
      { label: 'Commission OTA économisée', before: '', after: '18K€/an' }
    ],
    quote: 'L\'agent répond en 4 langues, 24h/24. On a réduit notre dépendance à Booking de 50%.',
    author: 'Marc V., Directeur'
  }
]
</script>

<template>
  <section id="cas" class="relative py-24 md:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-grid opacity-30" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <LandingSectionHeader
        eyebrow="Vous vous reconnaissez ?"
        title="Des résultats prouvés "
        highlight="dans votre secteur."
        description="Peu importe votre métier : si vous avez des tâches répétitives, vous perdez de l'argent. Voici ce qui se passe quand on arrête."
      />

      <!-- Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12" data-reveal>
        <button
          v-for="(uc, index) in useCases"
          :key="uc.sector"
          class="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
          :class="activeTab === index
            ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
            : 'bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-white/70 hover:border-white/[0.12]'"
          @click="activeTab = index"
        >
          <UIcon :name="uc.icon" class="text-base" />
          {{ uc.sector }}
        </button>
      </div>

      <!-- Active case -->
      <Transition name="fade" mode="out-in">
        <div :key="activeTab" class="glass-card rounded-2xl p-8 md:p-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Left: Info -->
            <div>
              <h3 class="text-2xl font-bold text-white mb-2">{{ useCases[activeTab].title }}</h3>
              <div class="flex items-center gap-2 mb-6">
                <span class="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                  {{ useCases[activeTab].solution }}
                </span>
              </div>

              <div class="mb-8">
                <div class="text-sm text-white/40 uppercase tracking-wider mb-2">Problème</div>
                <p class="text-white/60 leading-relaxed">{{ useCases[activeTab].problem }}</p>
              </div>

              <!-- Quote -->
              <div class="border-l-2 border-emerald-500/30 pl-6">
                <blockquote class="text-white/70 italic leading-relaxed mb-3">
                  "{{ useCases[activeTab].quote }}"
                </blockquote>
                <cite class="text-sm text-white/40 not-italic">— {{ useCases[activeTab].author }}</cite>
              </div>
            </div>

            <!-- Right: Results -->
            <div class="space-y-6">
              <div class="text-sm text-white/40 uppercase tracking-wider mb-4">Résultats</div>
              <div
                v-for="result in useCases[activeTab].results"
                :key="result.label"
                class="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <div>
                  <div class="text-sm text-white/40 mb-1">{{ result.label }}</div>
                  <div v-if="result.before" class="text-white/30 text-sm line-through">{{ result.before }}</div>
                </div>
                <div class="text-right">
                  <div class="text-xl font-bold text-emerald-400">{{ result.after }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
