<script setup lang="ts">
useHead({
  title: 'À propos — Nexoma, agence IA pour PME à Poitiers',
  meta: [
    {
      name: 'description',
      content: 'Nexoma est une agence IA basée à Poitiers, spécialisée en automatisation et agents IA sur mesure pour les PME de la Vienne (86). Découvrez notre vision et notre méthode.'
    },
    { property: 'og:title', content: 'À propos — Nexoma, agence IA pour PME à Poitiers' },
    { property: 'og:description', content: 'Agence IA à Poitiers. Agents IA sur mesure, automatisation de tâches, intégration CRM pour PME de la Vienne (86).' },
    { property: 'og:url', content: 'https://nexoma.poitiers.digital/a-propos' },
    { name: 'robots', content: 'index, follow' },
    { rel: 'canonical', href: 'https://nexoma.poitiers.digital/a-propos' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nexoma.poitiers.digital/a-propos' }
  ]
})

const stats = [
  { value: '20+', label: 'PME automatisées' },
  { value: '86', label: 'Vienne — département' },
  { value: '-60%', label: 'de temps sur les tâches admin' },
  { value: '21j', label: 'délai moyen de déploiement' }
]

const services = [
  {
    icon: 'i-lucide-bot',
    title: 'Agents IA sur mesure',
    description: 'Des assistants intelligents conçus pour vos process spécifiques : devis, relances, accueil client, suivi de chantier.'
  },
  {
    icon: 'i-lucide-zap',
    title: 'Automatisation des tâches répétitives',
    description: 'On identifie ce qui vous coûte du temps chaque semaine et on le confie à des workflows automatisés.'
  },
  {
    icon: 'i-lucide-database',
    title: 'Intégration CRM & outils métier',
    description: 'Connexion avec vos outils existants : CRM, logiciels de facturation, messagerie, Google Workspace, et plus.'
  }
]

const steps = [
  {
    number: '01',
    title: 'Diagnostic',
    description: 'On cartographie vos tâches chronophages et on identifie les gains rapides. Gratuit, sans engagement.'
  },
  {
    number: '02',
    title: 'Conception',
    description: 'On conçoit les agents IA et les workflows adaptés à votre activité, sans jargon technique.'
  },
  {
    number: '03',
    title: 'Déploiement',
    description: 'Mise en place rapide, tests en conditions réelles, ajustements jusqu\'à ce que tout fonctionne parfaitement.'
  },
  {
    number: '04',
    title: 'Formation',
    description: 'Votre équipe prend en main les outils en autonomie. On reste disponibles pour la suite.'
  }
]

const sectors = [
  { icon: 'i-lucide-hard-hat', label: 'BTP & Artisanat' },
  { icon: 'i-lucide-shopping-bag', label: 'Commerce & Retail' },
  { icon: 'i-lucide-briefcase', label: 'Professions libérales' },
  { icon: 'i-lucide-hotel', label: 'Hôtellerie & Restauration' }
]

const zones = ['Poitiers', 'Châtellerault', 'Loudun', 'Montmorillon', 'Civray', 'Lusignan', 'Neuville-de-Poitou', 'Tout le département 86']

const { openForm } = useContactForm()
</script>

<template>
  <div class="min-h-screen bg-[#030303] text-white">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Background glow -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.04] blur-3xl" />
      </div>

      <div class="relative max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Agence IA — Poitiers & Vienne (86)
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
          Agence IA pour PME<br>
          <span class="text-emerald-400">à Poitiers — Nexoma</span>
        </h1>

        <p class="text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-10">
          Nous aidons les PME et artisans de la Vienne à gagner du temps grâce à l'intelligence artificielle.
          Pas de jargon, pas de promesses vides — des résultats mesurables en moins d'un mois.
        </p>

        <button
          class="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold
                 text-base transition-all duration-300 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]
                 hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 cursor-pointer"
          @click="openForm"
        >
          Diagnostic gratuit →
        </button>
      </div>
    </section>

    <!-- Vision -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">Notre vision</p>
            <h2 class="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              L'IA accessible à toutes les PME de la Vienne, sans jargon technique
            </h2>
            <div class="space-y-4 text-white/50 leading-relaxed">
              <p>
                L'intelligence artificielle n'est plus réservée aux grands groupes avec des budgets IT en millions d'euros.
                En 2026, une PME de 5 salariés à Poitiers peut automatiser ses relances clients, ses devis et son accueil téléphonique
                pour quelques centaines d'euros par mois.
              </p>
              <p>
                Chez Nexoma, on est convaincus que les artisans, commerçants et professions libérales de la Vienne méritent
                les mêmes outils que les grands comptes — sans avoir à embaucher un DSI ou à comprendre comment fonctionne un LLM.
              </p>
              <p>
                Notre rôle : être votre équipe IA. On s'occupe de la technologie, vous vous concentrez sur votre métier.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="stat in stats"
              :key="stat.value"
              class="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center"
            >
              <div class="text-4xl font-black text-emerald-400 mb-2">{{ stat.value }}</div>
              <div class="text-sm text-white/40">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ce qu'on fait -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.015]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">Ce qu'on fait</p>
          <h2 class="text-3xl sm:text-4xl font-bold">Trois expertises, un seul objectif : vous libérer du temps</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="service in services"
            :key="service.title"
            class="p-8 rounded-2xl bg-[#030303] border border-white/[0.06] hover:border-emerald-500/20 transition-colors duration-300"
          >
            <div class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
              <UIcon :name="service.icon" class="text-emerald-400 text-xl" />
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ service.title }}</h3>
            <p class="text-white/40 text-sm leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Méthode -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">Notre méthode</p>
          <h2 class="text-3xl sm:text-4xl font-bold">De la première conversation au déploiement en 21 jours</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="step in steps"
            :key="step.number"
            class="relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
          >
            <div class="text-5xl font-black text-white/[0.06] mb-4">{{ step.number }}</div>
            <h3 class="text-lg font-semibold mb-3 text-emerald-400">{{ step.title }}</h3>
            <p class="text-white/40 text-sm leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Secteurs -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.015]">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">Secteurs</p>
            <h2 class="text-3xl sm:text-4xl font-bold mb-8">Nous travaillons avec tous les secteurs</h2>
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="sector in sectors"
                :key="sector.label"
                class="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <UIcon :name="sector.icon" class="text-emerald-400 text-lg flex-shrink-0" />
                <span class="text-sm font-medium">{{ sector.label }}</span>
              </div>
            </div>
          </div>

          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">Zone d'intervention</p>
            <h2 class="text-3xl sm:text-4xl font-bold mb-8">Tout le département de la Vienne</h2>
            <p class="text-white/50 leading-relaxed mb-6">
              Basés à Poitiers, nous intervenons dans tout le 86. Nos missions sont principalement à distance,
              ce qui nous permet d'accompagner les PME de tout le territoire sans frais de déplacement.
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="zone in zones"
                :key="zone"
                class="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm"
              >
                {{ zone }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-6">
          Prêt à libérer votre équipe des tâches répétitives ?
        </h2>
        <p class="text-white/50 text-lg mb-10">
          Un diagnostic gratuit de 30 minutes suffit pour identifier vos gains rapides.
          Sans engagement, sans jargon.
        </p>
        <button
          class="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold
                 text-lg transition-all duration-300 shadow-[0_0_40px_-5px_rgba(16,185,129,0.5)]
                 hover:shadow-[0_0_60px_-5px_rgba(16,185,129,0.7)] hover:-translate-y-1 cursor-pointer"
          @click="openForm"
        >
          Demander mon diagnostic gratuit →
        </button>
        <p class="text-white/25 text-sm mt-4">Réponse sous 24h — Poitiers & Vienne (86)</p>
      </div>
    </section>
  </div>
</template>
