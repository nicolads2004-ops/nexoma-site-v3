<script setup lang="ts">
const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'Je pense que mon entreprise n\'a pas besoin d\'IA.',
    answer: 'C\'est ce que pensaient 87% de nos clients avant de commencer. La vérité ? Si vous avez des employés qui font des devis, des relances, de la saisie ou du suivi client — vous perdez de l\'argent chaque jour sans le savoir. Le diagnostic gratuit vous montre exactement combien. Après, vous décidez en toute connaissance de cause.'
  },
  {
    question: 'Combien de temps pour voir des résultats concrets ?',
    answer: '21 jours. Pas 6 mois. Pas "bientôt". Semaine 1 : on analyse vos process et on configure. Semaine 2 : tests en conditions réelles. Semaine 3 : déploiement et formation de votre équipe. Nos clients voient un ROI mesurable dès le premier mois — c\'est pour ça qu\'on garantit le remboursement.'
  },
  {
    question: 'C\'est pas juste un ChatGPT amélioré ?',
    answer: 'ChatGPT est un outil généraliste : vous posez une question, il répond. Nos agents sont fondamentalement différents. Ils sont entraînés sur VOS données (tarifs, process, ton, documents), intégrés dans VOS outils (CRM, email, téléphone), et fonctionnent en totale autonomie. Personne ne tape de prompt. L\'agent travaille. Vous récoltez.'
  },
  {
    question: 'Et si ça ne fonctionne pas ?',
    answer: 'Remboursement intégral le premier mois, sans condition et sans justification. On prend 100% du risque. En 2 ans, notre taux de rétention est de 94% — ce qui veut dire que 94 clients sur 100 restent. Votre account manager suit vos KPIs chaque semaine et ajuste les agents en continu.'
  },
  {
    question: 'Mon équipe n\'est pas technique du tout.',
    answer: 'Parfait — la nôtre l\'est. Votre équipe utilise les agents via des interfaces qu\'elle connaît déjà : email, WhatsApp, un dashboard simple. Si vos employés savent utiliser un smartphone, ils sauront utiliser nos agents. On gère 100% de la technique.'
  },
  {
    question: 'Mes données sont-elles en sécurité ?',
    answer: 'Hébergement en France (OVH), conformité RGPD complète, chiffrement de bout en bout. Vos données ne sont jamais partagées ni utilisées pour entraîner d\'autres modèles. On signe un accord de confidentialité avant de commencer. Vos données restent les vôtres. Point.'
  },
  {
    question: 'Ça coûte combien ?',
    answer: 'Abonnement mensuel, sans engagement longue durée. Concrètement, un agent IA coûte entre 10x et 20x moins qu\'un salarié pour les mêmes tâches. Et il travaille 24h/24, 7j/7. Le diagnostic gratuit vous donne un chiffrage précis adapté à votre situation. Pas de frais cachés, pas de setup fees.'
  },
  {
    question: 'Est-ce que ça marche pour mon secteur ?',
    answer: 'BTP, commerce, professions libérales, hôtellerie, industrie, agroalimentaire — on a des résultats prouvés dans chaque secteur. Chaque agent est entraîné spécifiquement sur les process de VOTRE métier. Ce n\'est pas une solution générique. C\'est du sur-mesure.'
  }
]
</script>

<template>
  <section id="faq" class="relative py-24 md:py-32 overflow-hidden">
    <div class="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <LandingSectionHeader
        eyebrow="Vos objections sont légitimes"
        title="On y répond "
        highlight="franchement."
        description="Pas de langue de bois. Voici les vraies réponses aux questions que vous vous posez."
      />

      <div class="rounded-2xl border border-white/[0.06] divide-y divide-white/[0.06] overflow-hidden" data-reveal>
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="transition-colors duration-300"
          :class="openIndex === index ? 'bg-white/[0.02]' : ''"
        >
          <button
            class="w-full flex items-center justify-between p-6 text-left cursor-pointer
                   hover:bg-white/[0.02] transition-colors duration-300"
            @click="toggle(index)"
          >
            <span class="font-medium text-white pr-4">{{ faq.question }}</span>
            <UIcon
              name="i-lucide-chevron-down"
              class="text-white/40 flex-shrink-0 transition-transform duration-300"
              :class="openIndex === index && 'rotate-180'"
            />
          </button>
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-200 ease-in"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-96"
            leave-from-class="opacity-100 max-h-96"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-show="openIndex === index" class="overflow-hidden">
              <div class="px-6 pb-6 text-white/50 leading-relaxed">
                {{ faq.answer }}
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
