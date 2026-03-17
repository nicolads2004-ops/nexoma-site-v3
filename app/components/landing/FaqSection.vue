<script setup lang="ts">
const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'Combien de temps pour être opérationnel ?',
    answer: '3 semaines maximum. Semaine 1 : diagnostic et configuration. Semaine 2 : tests et ajustements. Semaine 3 : déploiement et formation de votre équipe. Vous voyez des résultats dès le premier mois.'
  },
  {
    question: 'Est-ce que ça marche pour mon secteur ?',
    answer: 'Oui. Nous travaillons avec le BTP, l\'industrie, le commerce, les professions libérales, l\'hôtellerie et l\'agroalimentaire. Chaque agent est entraîné spécifiquement sur les process de votre métier, pas une solution générique.'
  },
  {
    question: 'Mes données sont-elles en sécurité ?',
    answer: 'Absolument. Hébergement en France (OVH), conformité RGPD complète, chiffrement de bout en bout. Vos données ne sont jamais partagées ni utilisées pour entraîner d\'autres modèles. Nous signons un accord de confidentialité.'
  },
  {
    question: 'Et si ça ne fonctionne pas ?',
    answer: 'Satisfait ou remboursé le premier mois, sans condition. En 2 ans, le taux de rétention de nos clients est de 94%. On ne vous laisse pas tomber : votre account manager suit vos KPIs chaque semaine.'
  },
  {
    question: 'Faut-il des compétences techniques ?',
    answer: 'Zéro. Votre équipe utilise les agents via des interfaces simples : email, WhatsApp, dashboard web. On s\'occupe de toute la partie technique. Si votre équipe sait utiliser un smartphone, elle saura utiliser nos agents.'
  },
  {
    question: 'Quelle est la différence avec ChatGPT ?',
    answer: 'ChatGPT est un outil généraliste. Nos agents sont entraînés sur VOS données : vos tarifs, vos process, votre ton, vos documents. Ils s\'intègrent dans vos outils existants (CRM, email, téléphone) et fonctionnent en autopilote. Pas besoin de taper des prompts.'
  },
  {
    question: 'Comment se passe la facturation ?',
    answer: 'Abonnement mensuel, sans engagement longue durée. Vous pouvez upgrader, downgrader ou résilier à tout moment avec un préavis de 30 jours. Pas de frais cachés, pas de setup fees (offre lancement).'
  }
]
</script>

<template>
  <section id="faq" class="relative py-24 md:py-32 overflow-hidden">
    <div class="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <LandingSectionHeader
        eyebrow="FAQ"
        title="Questions "
        highlight="fréquentes."
        description="Tout ce que vous devez savoir avant de démarrer."
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
