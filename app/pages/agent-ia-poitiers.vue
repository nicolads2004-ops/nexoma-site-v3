<script setup lang="ts">
useHead({
  title: 'Agent IA Poitiers — Automatisation sur-mesure pour PME Vienne 86 | Nexoma',
  meta: [
    {
      name: 'description',
      content: 'Nexoma conçoit des agents IA sur mesure pour les PME de Poitiers et de la Vienne (86). Relance client, tri emails, accueil téléphonique : gagnez 10h par semaine.'
    },
    { property: 'og:title', content: 'Agent IA Poitiers — Automatisation sur-mesure pour PME Vienne 86 | Nexoma' },
    { property: 'og:description', content: 'Agents IA sur mesure pour PME à Poitiers. Relance client, accueil téléphonique, tri emails, CRM. Résultats en 21 jours.' },
    { property: 'og:url', content: 'https://nexoma.poitiers.digital/agent-ia-poitiers' },
    { property: 'og:type', content: 'website' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nexoma.poitiers.digital/agent-ia-poitiers', key: 'canonical' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Nexoma',
        description: 'Agence IA à Poitiers spécialisée dans la conception d\'agents IA sur mesure pour les PME de la Vienne (86).',
        url: 'https://nexoma.poitiers.digital',
        email: 'contact@poitiers.digital',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Poitiers',
          addressRegion: 'Nouvelle-Aquitaine',
          postalCode: '86000',
          addressCountry: 'FR'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '46.5802',
          longitude: '0.3404'
        },
        areaServed: [
          { '@type': 'City', name: 'Poitiers' },
          { '@type': 'City', name: 'Châtellerault' },
          { '@type': 'City', name: 'Loudun' },
          { '@type': 'City', name: 'Montmorillon' },
          { '@type': 'AdministrativeArea', name: 'Vienne (86)' }
        ],
        priceRange: '€€',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '19:00'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Agent IA sur mesure pour PME',
        description: 'Conception et déploiement d\'agents IA pour automatiser les tâches répétitives des PME : relance client, accueil téléphonique, tri emails, gestion CRM.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Nexoma',
          url: 'https://nexoma.poitiers.digital'
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Vienne (86)'
        },
        serviceType: 'Agent IA entreprise',
        url: 'https://nexoma.poitiers.digital/agent-ia-poitiers'
      })
    }
  ]
})

const useCases = [
  {
    icon: 'i-lucide-phone-forwarded',
    title: 'Accueil téléphonique',
    description: 'Un agent IA qui répond à vos appels, qualifie les demandes et planifie les rendez-vous directement dans votre agenda. Plus aucun appel manqué, même le week-end.'
  },
  {
    icon: 'i-lucide-mail-check',
    title: 'Tri et réponse aux emails',
    description: 'Classement automatique des messages entrants par priorité, réponses aux questions fréquentes, transfert des demandes complexes à la bonne personne.'
  },
  {
    icon: 'i-lucide-repeat',
    title: 'Relance client automatisée',
    description: 'Devis sans réponse, factures en retard, clients inactifs : l\'agent IA relance au bon moment, avec le bon message, sans que vous y pensiez.'
  },
  {
    icon: 'i-lucide-database',
    title: 'Gestion CRM et données',
    description: 'Mise à jour automatique des fiches clients, création de rapports hebdomadaires, synchronisation entre vos outils métier sans ressaisie manuelle.'
  }
]

const advantages = [
  { value: '10h', label: 'gagnées par semaine en moyenne' },
  { value: '24/7', label: 'disponibilité sans interruption' },
  { value: '21j', label: 'pour un agent opérationnel' },
  { value: '0', label: 'compétence technique requise' }
]

const steps = [
  {
    number: '01',
    title: 'Audit des tâches',
    description: 'On passe en revue vos process quotidiens pour identifier ce qui peut être confié à un agent IA. Gratuit, 30 minutes.'
  },
  {
    number: '02',
    title: 'Conception de l\'agent',
    description: 'On conçoit un agent adapté à votre métier : règles métier, ton de communication, connexion à vos outils existants.'
  },
  {
    number: '03',
    title: 'Déploiement et tests',
    description: 'Mise en production progressive, tests en conditions réelles sur vos vrais cas d\'usage. Ajustements inclus.'
  },
  {
    number: '04',
    title: 'Suivi et optimisation',
    description: 'Tableau de bord de performance, ajustements mensuels, évolution de l\'agent selon vos nouveaux besoins.'
  }
]

const sectors = [
  { icon: 'i-lucide-hard-hat', label: 'BTP & Artisanat', example: 'Relance devis, suivi chantier' },
  { icon: 'i-lucide-shopping-bag', label: 'Commerce & Retail', example: 'Gestion commandes, SAV automatisé' },
  { icon: 'i-lucide-briefcase', label: 'Professions libérales', example: 'Prise de RDV, tri emails' },
  { icon: 'i-lucide-hotel', label: 'Hôtellerie & Restauration', example: 'Réservations, réponses avis' },
  { icon: 'i-lucide-stethoscope', label: 'Santé & Bien-être', example: 'Rappels patients, pré-qualification' },
  { icon: 'i-lucide-truck', label: 'Transport & Logistique', example: 'Suivi livraisons, dispatch' }
]

const faqs = [
  {
    question: 'Qu\'est-ce qu\'un agent IA exactement ?',
    answer: 'Un agent IA est un programme autonome qui exécute des tâches à votre place : répondre aux emails, relancer des clients, mettre à jour un CRM. Contrairement à un simple chatbot, il prend des décisions et agit selon des règles que vous définissez.'
  },
  {
    question: 'Faut-il des compétences techniques pour l\'utiliser ?',
    answer: 'Non. L\'agent est conçu pour fonctionner de manière autonome. Vous interagissez avec lui comme avec un collaborateur : par email, messagerie ou tableau de bord. Nexoma gère toute la partie technique.'
  },
  {
    question: 'Combien de temps pour avoir un agent opérationnel ?',
    answer: '21 jours en moyenne entre le premier échange et un agent en production. Les cas simples (relance devis, tri emails) peuvent être déployés en 10 jours.'
  },
  {
    question: 'L\'agent remplace-t-il un salarié ?',
    answer: 'Non. Il prend en charge les tâches répétitives et à faible valeur ajoutée pour que votre équipe se concentre sur le conseil, la relation client et le travail de fond.'
  }
]

const { openForm } = useContactForm()
</script>

<template>
  <div class="min-h-screen bg-[#030303] text-white">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/[0.04] blur-3xl" />
      </div>

      <div class="relative max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Agent IA sur mesure — Poitiers & Vienne (86)
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
          Votre agent IA à Poitiers<br>
          <span class="text-green-400">qui travaille pendant que vous dormez</span>
        </h1>

        <p class="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
          Un agent IA conçu pour votre entreprise, branché sur vos outils, opérationnel en 21 jours.
          Il relance vos clients, trie vos emails et met à jour votre CRM — sans intervention de votre part.
        </p>
        <p class="text-sm text-white/30 max-w-xl mx-auto mb-10">
          Nexoma est une division de <a href="https://poitiers.digital" target="_blank" rel="noopener" class="text-white/50 hover:text-white/70 underline underline-offset-2">Studio Digital Poitiers</a>, le hub digital de référence à Poitiers.
        </p>

        <button
          class="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold
                 text-base transition-all duration-300 shadow-[0_0_30px_-5px_rgba(0,139,69,0.4)]
                 hover:shadow-[0_0_40px_-5px_rgba(0,139,69,0.6)] hover:-translate-y-0.5 cursor-pointer"
          @click="openForm"
        >
          Demander un diagnostic gratuit →
        </button>
      </div>
    </section>

    <!-- Qu'est-ce qu'un agent IA -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-green-400 mb-4">Comprendre</p>
            <h2 class="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Un agent IA, c'est un collaborateur numérique qui exécute vos tâches répétitives
            </h2>
            <div class="space-y-4 text-white/70 leading-relaxed">
              <p>
                Un agent IA n'est pas un gadget. C'est un programme autonome, entraîné sur vos règles métier,
                qui exécute des tâches concrètes : répondre à un email, relancer un devis, qualifier un appel entrant,
                mettre à jour une fiche client.
              </p>
              <p>
                Contrairement à un chatbot classique qui se contente de répondre à des questions,
                l'agent IA agit. Il se connecte à vos outils (CRM, messagerie, agenda, facturation)
                et travaille en continu, 24 heures sur 24, 7 jours sur 7.
              </p>
              <p>
                Pour une PME de la Vienne, cela signifie moins de temps passé sur l'administratif
                et plus de temps consacré au terrain, aux clients et au développement commercial.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="advantage in advantages"
              :key="advantage.value"
              class="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center"
            >
              <div class="text-4xl font-black text-green-400 mb-2">{{ advantage.value }}</div>
              <div class="text-sm text-white/50">{{ advantage.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cas d'usage -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.015]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-xs font-semibold uppercase tracking-widest text-green-400 mb-4">Cas d'usage pour PME</p>
          <h2 class="text-3xl sm:text-4xl font-bold">Ce que votre agent IA peut faire dès le premier mois</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="useCase in useCases"
            :key="useCase.title"
            class="p-8 rounded-2xl bg-[#030303] border border-white/[0.06] hover:border-green-500/20 transition-colors duration-300"
          >
            <div class="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
              <UIcon :name="useCase.icon" class="text-green-400 text-xl" />
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ useCase.title }}</h3>
            <p class="text-white/60 text-sm leading-relaxed">{{ useCase.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Méthode -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-xs font-semibold uppercase tracking-widest text-green-400 mb-4">Notre méthode</p>
          <h2 class="text-3xl sm:text-4xl font-bold">De l'audit à l'agent opérationnel en 21 jours</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="step in steps"
            :key="step.number"
            class="relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
          >
            <div class="text-5xl font-black text-white/[0.06] mb-4">{{ step.number }}</div>
            <h3 class="text-lg font-semibold mb-3 text-green-400">{{ step.title }}</h3>
            <p class="text-white/60 text-sm leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Secteurs -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.015]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-xs font-semibold uppercase tracking-widest text-green-400 mb-4">Secteurs d'activité</p>
          <h2 class="text-3xl sm:text-4xl font-bold">Un agent IA adapté à votre métier</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="sector in sectors"
            :key="sector.label"
            class="p-6 rounded-2xl bg-[#030303] border border-white/[0.06] hover:border-green-500/20 transition-colors duration-300"
          >
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <UIcon :name="sector.icon" class="text-green-400 text-lg" />
              </div>
              <h3 class="text-base font-semibold">{{ sector.label }}</h3>
            </div>
            <p class="text-white/60 text-sm">{{ sector.example }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-xs font-semibold uppercase tracking-widest text-green-400 mb-4">Questions fréquentes</p>
          <h2 class="text-3xl sm:text-4xl font-bold">Agent IA pour entreprise : ce qu'il faut savoir</h2>
        </div>

        <div class="space-y-4">
          <div
            v-for="faq in faqs"
            :key="faq.question"
            class="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
          >
            <h3 class="text-base font-semibold mb-3">{{ faq.question }}</h3>
            <p class="text-white/60 text-sm leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Liens internes -->
    <section class="py-12 px-4 sm:px-6 lg:px-8 bg-white/[0.015]">
      <div class="max-w-3xl mx-auto text-center">
        <p class="text-white/60 text-sm mb-4">Nos autres services IA à Poitiers</p>
        <p class="text-white/30 text-xs mb-6">
          Boostez votre acquisition avec le <a href="https://rankeo.poitiers.digital" target="_blank" rel="noopener" class="text-green-400/70 hover:text-green-400 underline underline-offset-2">référencement naturel</a> ou la <a href="https://adscale.poitiers.digital" target="_blank" rel="noopener" class="text-green-400/70 hover:text-green-400 underline underline-offset-2">publicité Google Ads</a>.
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink
            to="/chatbot-ia-poitiers"
            class="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm hover:bg-green-500/20 transition-colors"
          >
            Chatbot IA Poitiers
          </NuxtLink>
          <NuxtLink
            to="/"
            class="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/60 text-sm hover:text-white/80 transition-colors"
          >
            Accueil Nexoma
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/60 text-sm hover:text-white/80 transition-colors"
          >
            Blog IA & PME
          </NuxtLink>
          <NuxtLink
            to="/a-propos"
            class="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/60 text-sm hover:text-white/80 transition-colors"
          >
            À propos
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-6">
          Libérez 10 heures par semaine grâce à un agent IA sur mesure
        </h2>
        <p class="text-white/70 text-lg mb-10">
          Diagnostic gratuit de 30 minutes. On identifie les tâches qui vous coûtent du temps
          et on vous montre ce qu'un agent IA peut prendre en charge dans votre activité.
        </p>
        <button
          class="px-10 py-5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold
                 text-lg transition-all duration-300 shadow-[0_0_40px_-5px_rgba(0,139,69,0.5)]
                 hover:shadow-[0_0_60px_-5px_rgba(0,139,69,0.7)] hover:-translate-y-1 cursor-pointer"
          @click="openForm"
        >
          Demander mon diagnostic gratuit →
        </button>
        <p class="text-white/25 text-sm mt-4">Réponse sous 24h — Poitiers & Vienne (86)</p>
      </div>
    </section>
  </div>
</template>
