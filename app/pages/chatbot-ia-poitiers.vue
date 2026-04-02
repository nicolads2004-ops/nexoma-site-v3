<script setup lang="ts">
useHead({
  title: 'Chatbot IA Poitiers — Répondez à vos clients 24h/24 | Nexoma',
  meta: [
    {
      name: 'description',
      content: 'Nexoma déploie des chatbots IA pour les PME de Poitiers et de la Vienne (86). Site web, WhatsApp, Instagram : vos clients obtiennent une réponse en moins de 30 secondes.'
    },
    { property: 'og:title', content: 'Chatbot IA Poitiers — Répondez à vos clients 24h/24 | Nexoma' },
    { property: 'og:description', content: 'Chatbot IA pour PME à Poitiers. Intégration site web, WhatsApp, Instagram. Réponses automatiques 24h/24 en français.' },
    { property: 'og:url', content: 'https://nexoma.poitiers.digital/chatbot-ia-poitiers' },
    { property: 'og:type', content: 'website' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nexoma.poitiers.digital/chatbot-ia-poitiers', key: 'canonical' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Nexoma',
        description: 'Agence IA à Poitiers spécialisée dans les chatbots IA pour PME et commerces de la Vienne (86).',
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
        name: 'Chatbot IA pour entreprise',
        description: 'Conception et déploiement de chatbots IA en français pour PME et commerces. Intégration site web, WhatsApp, Instagram. Réponses automatiques 24h/24.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Nexoma',
          url: 'https://nexoma.poitiers.digital'
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Vienne (86)'
        },
        serviceType: 'Chatbot IA entreprise',
        url: 'https://nexoma.poitiers.digital/chatbot-ia-poitiers'
      })
    }
  ]
})

const channels = [
  {
    icon: 'i-lucide-globe',
    title: 'Site web',
    description: 'Un widget de chat intégré à votre site. Le visiteur pose sa question, le chatbot répond en temps réel avec des informations à jour sur vos services, tarifs et disponibilités.'
  },
  {
    icon: 'i-lucide-message-circle',
    title: 'WhatsApp Business',
    description: 'Vos clients vous contactent sur WhatsApp. Le chatbot IA répond instantanément en français, prend les réservations et transfère les demandes complexes à votre équipe.'
  },
  {
    icon: 'i-lucide-instagram',
    title: 'Instagram & Messenger',
    description: 'Réponses automatiques aux messages privés et aux commentaires. Le chatbot qualifie les prospects et redirige les demandes vers le bon interlocuteur.'
  },
  {
    icon: 'i-lucide-mail',
    title: 'Email',
    description: 'Réponse automatique aux demandes courantes par email : horaires, devis type, disponibilités, conditions générales. Les cas particuliers sont transférés.'
  }
]

const sectorExamples = [
  {
    icon: 'i-lucide-utensils',
    sector: 'Restaurant',
    useCase: 'Réservation de table par WhatsApp, carte du jour automatique, gestion des allergènes et menus spéciaux.',
    result: '-40% d\'appels téléphoniques'
  },
  {
    icon: 'i-lucide-shopping-bag',
    sector: 'Commerce de détail',
    useCase: 'Disponibilité produit en temps réel, horaires d\'ouverture, suivi de commandes click & collect.',
    result: '+25% de conversions en ligne'
  },
  {
    icon: 'i-lucide-hard-hat',
    sector: 'Artisan',
    useCase: 'Pré-qualification des demandes de devis, planification d\'interventions, réponse aux questions techniques courantes.',
    result: '2h gagnées par jour'
  },
  {
    icon: 'i-lucide-stethoscope',
    sector: 'Cabinet médical',
    useCase: 'Prise de rendez-vous en ligne, rappels automatiques, réponses aux questions sur les consultations et les documents à fournir.',
    result: '-60% d\'appels au secrétariat'
  }
]

const stats = [
  { value: '<30s', label: 'temps de réponse moyen' },
  { value: '24/7', label: 'disponibilité permanente' },
  { value: '85%', label: 'des questions résolues sans humain' },
  { value: '14j', label: 'pour un chatbot opérationnel' }
]

const steps = [
  {
    number: '01',
    title: 'Analyse de vos échanges',
    description: 'On étudie les questions que vos clients posent le plus souvent : téléphone, email, réseaux sociaux. On identifie ce que le chatbot peut prendre en charge.'
  },
  {
    number: '02',
    title: 'Conception du chatbot',
    description: 'Rédaction des réponses en français naturel, configuration des règles métier, personnalisation du ton selon votre marque.'
  },
  {
    number: '03',
    title: 'Intégration technique',
    description: 'Installation sur vos canaux (site web, WhatsApp, Instagram). Connexion à votre agenda, votre CRM ou votre logiciel de réservation.'
  },
  {
    number: '04',
    title: 'Lancement et ajustements',
    description: 'Mise en ligne progressive, suivi des conversations, affinage des réponses pendant les deux premières semaines.'
  }
]

const faqs = [
  {
    question: 'Un chatbot IA, c\'est différent d\'un chatbot classique ?',
    answer: 'Oui. Un chatbot classique suit un arbre de décisions figé. Un chatbot IA comprend le langage naturel, s\'adapte aux formulations de vos clients et s\'améliore avec le temps. Il gère les questions imprévues au lieu de répondre "je n\'ai pas compris".'
  },
  {
    question: 'Le chatbot parle-t-il correctement français ?',
    answer: 'Les modèles IA que nous utilisons maîtrisent le français, y compris les expressions courantes et le vocabulaire métier. Nous ajustons le ton et le vocabulaire à votre secteur d\'activité.'
  },
  {
    question: 'Que se passe-t-il quand le chatbot ne sait pas répondre ?',
    answer: 'Il transfère la conversation à un membre de votre équipe avec le contexte complet de l\'échange. Vous ne perdez jamais un client à cause d\'une question trop complexe.'
  },
  {
    question: 'WhatsApp Business est-il compatible ?',
    answer: 'Oui. Nous intégrons le chatbot IA directement dans WhatsApp Business via l\'API officielle. Vos clients écrivent sur WhatsApp comme d\'habitude et obtiennent une réponse immédiate.'
  }
]

const { openForm } = useContactForm()
</script>

<template>
  <div class="min-h-screen bg-[#030303] text-white">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.04] blur-3xl" />
      </div>

      <div class="relative max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Chatbot IA — Poitiers & Vienne (86)
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
          Un chatbot IA à Poitiers<br>
          <span class="text-emerald-400">qui répond à vos clients 24h/24</span>
        </h1>

        <p class="text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-10">
          Vos clients posent des questions à toute heure. Un chatbot IA en français, connecté à vos outils,
          répond en moins de 30 secondes sur votre site web, WhatsApp ou Instagram.
        </p>
        <p class="text-sm text-white/30 max-w-xl mx-auto mb-10">
          Nexoma est une division de <a href="https://poitiers.digital" target="_blank" rel="noopener" class="text-white/50 hover:text-white/70 underline underline-offset-2">Studio Digital Poitiers</a>, le hub digital de référence à Poitiers.
        </p>

        <button
          class="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold
                 text-base transition-all duration-300 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]
                 hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 cursor-pointer"
          @click="openForm"
        >
          Demander une démo gratuite →
        </button>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="stat in stats"
            :key="stat.value"
            class="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center"
          >
            <div class="text-3xl sm:text-4xl font-black text-emerald-400 mb-2">{{ stat.value }}</div>
            <div class="text-sm text-white/40">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Canaux d'intégration -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.015]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">Canaux d'intégration</p>
          <h2 class="text-3xl sm:text-4xl font-bold">Un chatbot IA là où vos clients vous contactent</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="channel in channels"
            :key="channel.title"
            class="p-8 rounded-2xl bg-[#030303] border border-white/[0.06] hover:border-emerald-500/20 transition-colors duration-300"
          >
            <div class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
              <UIcon :name="channel.icon" class="text-emerald-400 text-xl" />
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ channel.title }}</h3>
            <p class="text-white/40 text-sm leading-relaxed">{{ channel.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Exemples sectoriels -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">Cas concrets</p>
          <h2 class="text-3xl sm:text-4xl font-bold">Comment les PME de la Vienne utilisent un chatbot IA</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="example in sectorExamples"
            :key="example.sector"
            class="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
          >
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <UIcon :name="example.icon" class="text-emerald-400 text-lg" />
              </div>
              <h3 class="text-base font-semibold">{{ example.sector }}</h3>
            </div>
            <p class="text-white/40 text-sm leading-relaxed mb-4">{{ example.useCase }}</p>
            <div class="inline-flex items-center px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              {{ example.result }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Méthode -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.015]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">Notre méthode</p>
          <h2 class="text-3xl sm:text-4xl font-bold">Votre chatbot IA opérationnel en 14 jours</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="step in steps"
            :key="step.number"
            class="relative p-8 rounded-2xl bg-[#030303] border border-white/[0.06]"
          >
            <div class="text-5xl font-black text-white/[0.06] mb-4">{{ step.number }}</div>
            <h3 class="text-lg font-semibold mb-3 text-emerald-400">{{ step.title }}</h3>
            <p class="text-white/40 text-sm leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Chatbot IA vs chatbot classique -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">Comprendre</p>
            <h2 class="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Chatbot IA vs chatbot classique : ce qui change pour votre entreprise
            </h2>
            <div class="space-y-4 text-white/50 leading-relaxed">
              <p>
                Un chatbot classique suit un script. Si le client formule sa question autrement que prévu,
                le chatbot est bloqué. Résultat : frustration, abandon, appel téléphonique.
              </p>
              <p>
                Un chatbot IA comprend l'intention derrière les mots. "Vous ouvrez à quelle heure samedi ?"
                et "C'est ouvert le week-end ?" reçoivent la même réponse correcte.
                Il gère les fautes d'orthographe, les abréviations et le langage familier.
              </p>
              <p>
                Pour une PME, cela signifie un taux de résolution bien plus élevé,
                moins de transferts vers votre équipe et des clients satisfaits même à 23h un dimanche.
              </p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-3 h-3 rounded-full bg-red-400/60" />
                <span class="text-sm font-medium text-white/60">Chatbot classique</span>
              </div>
              <ul class="space-y-2 text-white/40 text-sm">
                <li>Réponses uniquement sur des scénarios prévus</li>
                <li>Bloqué par les reformulations</li>
                <li>Maintenance manuelle pour chaque nouvelle question</li>
                <li>Taux de résolution : 30-40%</li>
              </ul>
            </div>
            <div class="p-6 rounded-2xl bg-emerald-500/[0.05] border border-emerald-500/20">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-3 h-3 rounded-full bg-emerald-400" />
                <span class="text-sm font-medium text-emerald-400">Chatbot IA Nexoma</span>
              </div>
              <ul class="space-y-2 text-white/50 text-sm">
                <li>Comprend le langage naturel et les variantes</li>
                <li>S'adapte aux nouvelles questions automatiquement</li>
                <li>Connecté à vos outils métier en temps réel</li>
                <li>Taux de résolution : 80-90%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.015]">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">Questions fréquentes</p>
          <h2 class="text-3xl sm:text-4xl font-bold">Chatbot IA pour entreprise : vos questions</h2>
        </div>

        <div class="space-y-4">
          <div
            v-for="faq in faqs"
            :key="faq.question"
            class="p-6 rounded-2xl bg-[#030303] border border-white/[0.06]"
          >
            <h3 class="text-base font-semibold mb-3">{{ faq.question }}</h3>
            <p class="text-white/40 text-sm leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Liens internes -->
    <section class="py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <p class="text-white/40 text-sm mb-4">Nos autres services IA à Poitiers</p>
        <p class="text-white/30 text-xs mb-6">
          Amplifiez votre visibilité avec du <a href="https://rankeo.poitiers.digital" target="_blank" rel="noopener" class="text-emerald-400/70 hover:text-emerald-400 underline underline-offset-2">référencement SEO</a> ou combinez avec la <a href="https://adscale.poitiers.digital" target="_blank" rel="noopener" class="text-emerald-400/70 hover:text-emerald-400 underline underline-offset-2">publicité Google Ads</a>.
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink
            to="/agent-ia-poitiers"
            class="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm hover:bg-emerald-500/20 transition-colors"
          >
            Agent IA Poitiers
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
          Vos clients méritent une réponse immédiate, même à 23h
        </h2>
        <p class="text-white/50 text-lg mb-10">
          Démo gratuite de 30 minutes. On vous montre un chatbot IA en action sur votre site
          et on estime le nombre de demandes qu'il peut traiter à votre place.
        </p>
        <button
          class="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold
                 text-lg transition-all duration-300 shadow-[0_0_40px_-5px_rgba(16,185,129,0.5)]
                 hover:shadow-[0_0_60px_-5px_rgba(16,185,129,0.7)] hover:-translate-y-1 cursor-pointer"
          @click="openForm"
        >
          Demander ma démo gratuite →
        </button>
        <p class="text-white/25 text-sm mt-4">Réponse sous 24h — Poitiers & Vienne (86)</p>
      </div>
    </section>
  </div>
</template>
