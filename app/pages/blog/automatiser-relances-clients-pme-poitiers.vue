<script setup lang="ts">
useHead({
  title: 'Automatiser ses relances clients PME Poitiers — récupérez 5h par semaine — Nexoma',
  meta: [
    {
      name: 'description',
      content: 'Comment automatiser les relances clients avec un agent IA ? Guide pratique pour les PME et artisans de Poitiers et la Vienne (86). Exemples concrets, intégration CRM, résultats attendus.'
    },
    { property: 'og:title', content: 'Automatiser ses relances clients — guide PME Poitiers' },
    { property: 'og:description', content: 'Automatisez vos relances clients avec un agent IA. Guide pour PME Poitiers, exemples artisan BTP, intégration CRM.' },
    { property: 'og:url', content: 'https://nexoma.poitiers.digital/blog/automatiser-relances-clients-pme-poitiers' },
    { property: 'og:image', content: 'https://picsum.photos/seed/nexoma2/1200/630' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nexoma.poitiers.digital/blog/automatiser-relances-clients-pme-poitiers' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Comment automatiser ses relances clients et récupérer 5h par semaine — guide PME Poitiers',
        datePublished: '2026-03-22',
        dateModified: '2026-03-22',
        author: { '@type': 'Organization', name: 'Nexoma' },
        publisher: { '@type': 'Organization', name: 'Nexoma', url: 'https://nexoma.poitiers.digital' },
        description: 'Automatisez vos relances clients avec un agent IA. Guide pour PME et artisans de Poitiers.',
        url: 'https://nexoma.poitiers.digital/blog/automatiser-relances-clients-pme-poitiers',
        image: 'https://picsum.photos/seed/nexoma2/1200/630'
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
          <span class="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">Cas pratique</span>
          <span class="text-xs text-white/30">22 mars 2026</span>
          <span class="text-xs text-white/30">· 6 min de lecture</span>
        </div>

        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
          Comment automatiser ses relances clients et récupérer 5h par semaine — guide PME Poitiers
        </h1>

        <p class="text-xl text-white/50 leading-relaxed">
          Les relances manuelles sont chronophages et souvent oubliées. Un agent IA peut s'en charger
          à votre place, 24h/24, avec le bon ton et le bon timing.
        </p>
      </div>
    </div>

    <!-- Image hero -->
    <div class="px-4 sm:px-6 lg:px-8 py-8">
      <div class="max-w-3xl mx-auto">
        <img
          src="https://picsum.photos/seed/nexoma2/800/400"
          alt="Automatisation relances clients PME Poitiers — Nexoma"
          class="w-full rounded-2xl aspect-[2/1] object-cover"
          loading="eager"
        >
      </div>
    </div>

    <!-- Contenu -->
    <article class="px-4 sm:px-6 lg:px-8 pb-20">
      <div class="max-w-3xl mx-auto prose prose-invert prose-lg max-w-none">
        <h2>Le vrai coût des relances manuelles</h2>
        <p>
          Relancer un client qui n'a pas payé sa facture. Relancer un prospect qui n'a pas répondu au devis.
          Rappeler un client dont la commande est prête. Ce sont des tâches simples, mais elles s'accumulent.
        </p>
        <p>
          Dans une PME de 5 à 20 salariés, on estime que les relances représentent entre 3 et 8 heures par semaine
          de travail administratif — souvent assumé par le gérant lui-même ou par un assistant débordé.
          À 40 euros de l'heure de coût salarial, c'est entre 480 et 1 280 euros par mois dépensés
          sur des tâches que l'on peut confier à un agent IA.
        </p>
        <p>
          Et ce n'est que le coût direct. Le coût indirect est encore plus élevé : les relances oubliées,
          les devis qui restent sans suite faute de suivi, les factures payées avec deux mois de retard parce que
          personne n'a pensé à relancer.
        </p>

        <h2>Ce qu'un agent IA peut faire à votre place</h2>
        <p>
          Un agent IA de relance n'est pas un simple envoi d'emails en masse. C'est un système intelligent
          qui connaît le contexte de chaque client et adapte son message en conséquence.
        </p>
        <p>Concrètement, voici ce qu'il peut gérer :</p>
        <ul>
          <li>
            <strong>Relances de devis</strong> : un email personnalisé à J+7, un SMS à J+14, un appel automatisé à J+21.
            Le message change selon que le client a ouvert le devis ou non.
          </li>
          <li>
            <strong>Relances de factures</strong> : rappel amiable à l'échéance, relance ferme à J+8, mise en demeure à J+20.
            Ton adapté à l'ancienneté de la relation client.
          </li>
          <li>
            <strong>Rappels de rendez-vous</strong> : confirmation 48h avant, rappel 2h avant, message de suivi après le rendez-vous.
          </li>
          <li>
            <strong>Suivi des prospects</strong> : nurturing automatique sur plusieurs semaines pour les prospects qui ne sont pas encore prêts à acheter.
          </li>
        </ul>

        <h2>Exemple concret : un artisan BTP à Poitiers</h2>
        <p>
          Prenons l'exemple d'un plaquiste-peintre installé à Poitiers qui travaille principalement avec des particuliers
          et des petites entreprises. Avant de travailler avec Nexoma, voici sa situation :
        </p>
        <ul>
          <li>Il envoie entre 15 et 25 devis par mois.</li>
          <li>En moyenne, 40 % restent sans réponse après une semaine.</li>
          <li>Il relance à la main, quand il s'en souvient — souvent trop tard.</li>
          <li>Son taux de transformation était de 38 %.</li>
        </ul>
        <p>
          Après déploiement d'un agent IA de relance connecté à son logiciel de devis (en l'occurrence Batappli),
          la séquence automatique démarre dès qu'un devis est envoyé :
        </p>
        <ul>
          <li>J+5 : email de relance douce, proposant de répondre à d'éventuelles questions.</li>
          <li>J+10 : SMS court, personnel, rappelant la validité du devis.</li>
          <li>J+18 : email de dernière chance avec une légère urgence.</li>
        </ul>
        <p>
          Résultat après trois mois : taux de transformation passé de 38 % à 52 %.
          Temps de suivi commercial récupéré : 4h30 par semaine.
          Retour sur investissement atteint dès le deuxième mois.
        </p>

        <h2>Résultats attendus pour votre PME</h2>
        <p>
          Les résultats varient selon votre secteur et votre volume, mais voici les ordres de grandeur
          que nous constatons chez nos clients de la Vienne après 90 jours :
        </p>
        <ul>
          <li>+20 à +40 % de taux de transformation sur les devis</li>
          <li>-30 à -50 % de délai de paiement moyen</li>
          <li>3 à 6 heures récupérées par semaine sur les tâches de suivi</li>
          <li>Réduction de 80 % des relances oubliées</li>
        </ul>

        <h2>Intégration CRM et outils existants</h2>
        <p>
          La bonne nouvelle : vous n'avez pas à changer vos outils. Nos agents IA s'intègrent avec ce que vous utilisez déjà.
          Que vous soyez sur HubSpot, Sellsy, Dolibarr, Sage, ou simplement sur un tableau Excel bien organisé —
          on construit le pont entre vos données et les automatisations.
        </p>
        <p>
          Pour les professions libérales de Poitiers (avocats, comptables, kinés, ostéopathes),
          on travaille également avec Doctolib, Calendly, et les logiciels métier spécialisés.
        </p>
        <p>
          L'intégration prend en général entre 3 et 10 jours selon la complexité de votre stack. Après déploiement,
          l'agent fonctionne en autonomie — vous recevez un rapport hebdomadaire et pouvez ajuster les séquences à tout moment.
        </p>

        <h2>Par où commencer avec Nexoma ?</h2>
        <p>
          La première étape est notre diagnostic gratuit. En 30 minutes, on identifie ensemble vos principales sources
          de perte de temps sur le suivi client, on vous propose une architecture de relances adaptée à votre activité,
          et on vous donne une estimation précise du retour sur investissement.
        </p>
        <p>
          Aucun engagement. Si nos chiffres ne vous convainquent pas, vous repartez avec un audit de votre processus de relances —
          ce qui vaut déjà quelques heures de conseil.
        </p>
      </div>

      <!-- CTA -->
      <div class="max-w-3xl mx-auto mt-16 p-8 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/20 text-center">
        <h3 class="text-2xl font-bold mb-3">Combien d'heures perdez-vous chaque semaine en relances ?</h3>
        <p class="text-white/50 mb-6">Diagnostic gratuit en 30 minutes. On chiffre vos gains ensemble, sans engagement.</p>
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
