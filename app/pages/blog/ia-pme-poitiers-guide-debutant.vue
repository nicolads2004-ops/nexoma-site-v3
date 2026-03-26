<script setup lang="ts">
useHead({
  title: 'IA pour les PME de Poitiers : par où commencer en 2026 ? — Nexoma',
  meta: [
    {
      name: 'description',
      content: 'Guide complet pour les PME de Poitiers et de la Vienne qui veulent adopter l\'intelligence artificielle en 2026. Usages concrets, coûts réels et premiers pas avec Nexoma.'
    },
    { property: 'og:title', content: 'IA pour les PME de Poitiers : par où commencer en 2026 ?' },
    { property: 'og:description', content: 'Guide IA débutant pour PME à Poitiers. Usages concrets, coûts et exemples secteur Vienne 86.' },
    { property: 'og:url', content: 'https://nexoma.poitiers.digital/blog/ia-pme-poitiers-guide-debutant' },
    { property: 'og:image', content: 'https://picsum.photos/seed/nexoma1/1200/630' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nexoma.poitiers.digital/blog/ia-pme-poitiers-guide-debutant' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'IA pour les PME de Poitiers : par où commencer en 2026 ?',
        datePublished: '2026-03-20',
        dateModified: '2026-03-20',
        author: { '@type': 'Organization', name: 'Nexoma' },
        publisher: { '@type': 'Organization', name: 'Nexoma', url: 'https://nexoma.poitiers.digital' },
        description: 'Guide complet pour les PME de la Vienne qui veulent adopter l\'intelligence artificielle en 2026.',
        url: 'https://nexoma.poitiers.digital/blog/ia-pme-poitiers-guide-debutant',
        image: 'https://picsum.photos/seed/nexoma1/1200/630'
      })
    }
  ]
})

const { openForm } = useContactForm()
</script>

<template>
  <div class="min-h-screen bg-[#030303] text-white">
    <!-- Header article -->
    <div class="pt-28 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06]">
      <div class="max-w-3xl mx-auto">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-300 mb-8"
        >
          <UIcon name="i-lucide-arrow-left" class="text-sm" />
          Retour au blog
        </NuxtLink>

        <div class="flex items-center gap-3 mb-6">
          <span class="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">Guide</span>
          <span class="text-xs text-white/30">20 mars 2026</span>
          <span class="text-xs text-white/30">· 7 min de lecture</span>
        </div>

        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
          IA pour les PME de Poitiers : par où commencer en 2026 ?
        </h1>

        <p class="text-xl text-white/50 leading-relaxed">
          L'intelligence artificielle n'est plus réservée aux grands groupes. Voici comment une PME de la Vienne
          peut l'adopter concrètement, sans budget astronomique ni compétences techniques.
        </p>
      </div>
    </div>

    <!-- Image hero -->
    <div class="px-4 sm:px-6 lg:px-8 py-8">
      <div class="max-w-3xl mx-auto">
        <img
          src="https://picsum.photos/seed/nexoma1/800/400"
          alt="IA pour les PME à Poitiers — Nexoma"
          class="w-full rounded-2xl aspect-[2/1] object-cover"
          loading="eager"
        >
      </div>
    </div>

    <!-- Contenu -->
    <article class="px-4 sm:px-6 lg:px-8 pb-20">
      <div class="max-w-3xl mx-auto prose prose-invert prose-lg max-w-none">
        <h2>Le mythe de l'IA réservée aux grands groupes</h2>
        <p>
          Pendant longtemps, l'intelligence artificielle était associée aux laboratoires de recherche, aux grandes entreprises du CAC 40
          et aux GAFAM. Des budgets de plusieurs millions, des équipes de data scientists, une infrastructure technique hors de portée
          pour un plombier de Châtellerault ou un cabinet d'expertise comptable de Poitiers.
        </p>
        <p>
          Ce temps est révolu. Depuis 2023, et plus encore en 2026, les outils d'IA sont devenus accessibles à toutes les tailles d'entreprise.
          Un artisan BTP peut aujourd'hui automatiser l'envoi de ses devis et relances pour moins de 200 euros par mois.
          Un commerce de centre-ville à Poitiers peut installer un chatbot qui répond aux clients 24h/24 sans recruter un poste supplémentaire.
        </p>
        <p>
          La vraie question n'est plus « est-ce que l'IA est pour moi ? » mais « par où est-ce que je commence ? »
        </p>

        <h2>3 usages concrets pour les PME de la Vienne</h2>

        <h3>1. L'automatisation des relances clients</h3>
        <p>
          C'est le cas d'usage numéro un pour les artisans et professions libérales. Combien de devis envoyés restent sans réponse ?
          Combien de factures impayées traînent parce que vous n'avez pas eu le temps de relancer ?
        </p>
        <p>
          Un agent IA connecté à votre logiciel de gestion peut envoyer automatiquement des relances personnalisées par email ou SMS,
          au bon moment, avec le bon ton. Sans que vous ayez à y penser. Le taux de recouvrement de nos clients dans la Vienne augmente
          en moyenne de 35 % dans les trois premiers mois.
        </p>

        <h3>2. L'accueil client automatisé</h3>
        <p>
          Un chatbot IA sur votre site web ou votre WhatsApp Business répond aux questions fréquentes de vos clients à toute heure :
          horaires, tarifs, disponibilités, prise de rendez-vous. Il filtre les demandes sérieuses et vous transmet uniquement
          les prospects qualifiés.
        </p>
        <p>
          Pour un hôtel à Poitiers ou un restaurant sur la place du Marché, cela représente une réduction significative des appels entrants
          pour des questions répétitives — et une meilleure expérience client.
        </p>

        <h3>3. La génération et le suivi de devis</h3>
        <p>
          Pour les artisans BTP, la création de devis est souvent un gouffre à temps. Un agent IA peut générer un devis pré-rempli
          à partir d'une simple description vocale ou d'un formulaire rapide, l'envoyer au client, et suivre son statut.
          Certains de nos clients récupèrent 4 à 6 heures par semaine sur cette seule tâche.
        </p>

        <h2>Quel est le coût d'un agent IA sur mesure ?</h2>
        <p>
          C'est la question que nous posent 90 % des PME lors du premier contact. La réponse honnête : cela dépend de ce que vous voulez automatiser.
        </p>
        <p>
          Pour vous donner une idée, nos solutions pour PME de la Vienne démarrent généralement entre 500 et 1 500 euros en frais de mise en place,
          puis entre 150 et 400 euros par mois selon la complexité des automatisations.
        </p>
        <p>
          À mettre en regard du temps gagné : si votre assistant commercial passe 10 heures par semaine sur des tâches automatisables,
          c'est environ 2 000 euros de coût salarial mensuel que vous pouvez réaffecter à des activités à plus forte valeur ajoutée.
          Le retour sur investissement est généralement atteint en moins de trois mois.
        </p>

        <h2>Exemples concrets dans la Vienne (86)</h2>
        <p>
          Voici quelques exemples de PME que nous avons accompagnées dans le département :
        </p>
        <ul>
          <li>
            <strong>Un électricien à Châtellerault</strong> : automatisation de l'envoi et du suivi des devis, relances automatiques à J+7 et J+14.
            Résultat : +28 % de devis signés, 5h récupérées par semaine.
          </li>
          <li>
            <strong>Une agence immobilière à Poitiers</strong> : chatbot qualifiant les leads entrants sur le site, prise de rendez-vous automatisée.
            Résultat : 40 % des appels entrants redirigés vers le bot, équipe commerciale recentrée sur les visites.
          </li>
          <li>
            <strong>Un cabinet d'ostéopathie à Loudun</strong> : rappels de rendez-vous automatisés par SMS, gestion des annulations et remplacements.
            Résultat : taux d'annulation réduit de 22 %, agenda optimisé.
          </li>
        </ul>

        <h2>Comment démarrer avec Nexoma ?</h2>
        <p>
          Notre processus est simple et sans risque. La première étape est un diagnostic gratuit de 30 minutes,
          en visioconférence ou dans vos locaux si vous êtes dans la Vienne.
        </p>
        <p>
          Lors de ce diagnostic, on cartographie ensemble vos tâches les plus chronophages, on identifie les deux ou trois automatisations
          à fort impact, et on vous présente une estimation claire des coûts et des gains attendus.
        </p>
        <p>
          Aucun engagement, aucun jargon technique. Si notre proposition ne vous convient pas, vous repartez au moins avec une meilleure
          vision de votre organisation et des pistes d'amélioration concrètes.
        </p>
        <p>
          L'IA n'est pas une baguette magique. C'est un outil — mais entre de bonnes mains, dans la bonne entreprise,
          il peut transformer votre quotidien. Prenons 30 minutes pour en parler.
        </p>
      </div>

      <!-- CTA -->
      <div class="max-w-3xl mx-auto mt-16 p-8 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/20 text-center">
        <h3 class="text-2xl font-bold mb-3">Prêt à faire votre diagnostic ?</h3>
        <p class="text-white/50 mb-6">30 minutes, gratuit, sans engagement. On identifie vos gains rapides ensemble.</p>
        <button
          class="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold
                 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]
                 hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 cursor-pointer"
          @click="openForm"
        >
          Demander mon diagnostic gratuit →
        </button>
      </div>
    </article>
  </div>
</template>
