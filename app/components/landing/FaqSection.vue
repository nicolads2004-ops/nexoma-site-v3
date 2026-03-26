<script setup lang="ts">
const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'Je pense que mon entreprise n\'a pas besoin d\'IA.',
    answer: 'C\'est ce que pensaient 87% de nos clients avant de commencer. La vérité ? Si vous avez des tâches répétitives — devis, relances, saisies, accueil, suivi client — vous perdez de l\'argent chaque jour sans le savoir. Le diagnostic gratuit vous montre exactement combien. Après, vous décidez.'
  },
  {
    question: 'Combien de temps pour voir des résultats concrets ?',
    answer: '21 jours. Pas 6 mois. Semaine 1 : on analyse vos process. Semaine 2 : on met en place et on teste. Semaine 3 : déploiement et formation. Nos clients voient un ROI mesurable dès le premier mois — c\'est pour ça qu\'on garantit le remboursement.'
  },
  {
    question: 'C\'est pas juste du ChatGPT ?',
    answer: 'Non. ChatGPT est un outil générique où vous tapez des prompts. Ce qu\'on met en place est fondamentalement différent : des solutions entraînées sur VOS données, intégrées dans VOS outils (CRM, email, téléphone), qui tournent en autonomie. Pas de prompt, pas de manipulation. Ça tourne tout seul.'
  },
  {
    question: 'Et si ça ne fonctionne pas ?',
    answer: 'Remboursement intégral le premier mois, sans condition. On prend 100% du risque. Notre taux de rétention est de 94% — 94 clients sur 100 restent après la première année. On suit vos résultats chaque semaine et on ajuste en continu.'
  },
  {
    question: 'Mon équipe n\'est pas technique du tout.',
    answer: 'Parfait — la nôtre l\'est. Tout ce qu\'on met en place s\'utilise via des interfaces simples : email, WhatsApp, un dashboard web. Si votre équipe sait utiliser un smartphone, elle saura utiliser nos solutions. On gère 100% de la technique.'
  },
  {
    question: 'Mes données sont-elles en sécurité ?',
    answer: 'Hébergement en France (OVH), conformité RGPD complète, chiffrement de bout en bout. Vos données ne sont jamais partagées ni utilisées pour entraîner d\'autres modèles. On signe un accord de confidentialité avant de commencer. Vos données restent les vôtres. Point.'
  },
  {
    question: 'Ça coûte combien ?',
    answer: 'Abonnement mensuel, sans engagement longue durée. Concrètement, nos solutions coûtent entre 10x et 20x moins qu\'un salarié pour les mêmes tâches — et elles fonctionnent 24h/24. Le diagnostic gratuit vous donne un chiffrage précis. Pas de frais cachés.'
  },
  {
    question: 'Est-ce que ça marche pour mon secteur ?',
    answer: 'BTP, commerce, professions libérales, hôtellerie, industrie, agroalimentaire — on a des résultats prouvés dans chaque secteur. Chaque solution est construite sur-mesure pour VOS process. Pas de la tech générique.'
  }
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map((faq) => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer
    }
  }))
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqSchema)
    }
  ]
})
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
